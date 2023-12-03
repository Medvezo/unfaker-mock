"use client";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@nextui-org/button";
import { TiDeleteOutline } from "react-icons/ti";
import { useVideo } from "@/components/container/VideoProvider";
import ScanOptions from "./ScanOptions";
import { IoIosMail } from "react-icons/io";
import FrameExtractor from "@/components/common/FrameExtractor";

export default function VideoDropzone() {
	const [buttonDisabled, setButtonDisabled] = useState(true);
	const [files, setFiles] = useState<File[]>([]);
	// option state for processing
	const [option, setOption] = useState<string | null>(null);
	// To differ background from real-time
	const [processingMessage, setProcessingMessage] = useState<string | null>(
		null
	);
	// Error state
	const [errorMessage, setErrorMessage] = useState("");
	// Whether show frames or not
	const [showFrameExtractor, setShowFrameExtractor] = useState(false);

	// Global store state
	const { setVideoFile } = useVideo();

	// Ondropo handle
	const onDrop = useCallback((acceptedFiles: File[]) => {
		const firstFile = acceptedFiles[0];
		if (firstFile && firstFile.size <= 30000000) {
			setFiles([firstFile]);
		}
	}, []);

	// Ondrop delete
	const handleDelete = (fileName: string) => {
		setFiles(files.filter((file) => file.name !== fileName));
	};

	useEffect(() => {
		setErrorMessage("");
	}, [files.length]);

	// Handle rejection
	const onDropRejected = useCallback(() => {
		setErrorMessage("File is too large");
	}, []);

	// Ondrop handle
	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		onDropRejected,
		accept: {
			"video/*": [],
		},
		maxSize: 30000000,
	});

	// Button disabled handle
	useEffect(() => {
		files.length > 0 && option
			? setButtonDisabled(false)
			: setButtonDisabled(true);
	}, [files.length, option]);

	// Handle Submit
	const handleSubmit = () => {
		setVideoFile(files[0]);
		if (option === "background") {
			const completionTime = new Date(Date.now() + 5 * 60000); // 5 minutes from now
			setProcessingMessage(
				`We will send you the report to your email by ${completionTime.toLocaleTimeString()}.`
			);
			setShowFrameExtractor(false);

			setButtonDisabled(true);
		} else if (option === "real-time") {
			setProcessingMessage(null);
			setShowFrameExtractor(true); // show  FrameExtractor component
		}
		// Delay scrolling to ensure the page has updated
		setTimeout(() => {
			window.scrollTo({
				top: document.body.scrollHeight,
				behavior: "smooth",
			});
		}, 100); 
	};

	return (
		<div className="container mx-auto max-w-sm sm:max-w-xl lg:max-w-6xl px-6 lg:px-12">
			<div
				{...getRootProps()}
				className="border-dashed border-4 border-amber-700 rounded-lg p-6 mt-6 text-center cursor-pointer">
				<input {...getInputProps()} />
				<p className="text-gray-600">
					Drag and drop here, or click to select file
				</p>
				<em>
					(Only *.mp4, *.mov, and *.avi files will be accepted, max file size
					30MB)
				</em>
			</div>
			<aside className="mt-4 w-full flex flex-col justify-center items-center gap-5">
				<h4 className="font-semibold text-lg">File:</h4>
				<ul className="flex flex-wrap justify-center items-center gap-10">
					{errorMessage && (
						<p className="font-bold text-red-500 text-xl">{errorMessage}</p>
					)}

					{files.map((file) => (
						<li
							key={file.name}
							className="mt-2 flex justify-between items-center ">
							<div className="relative ">
								<p className="font-bold ml-5 mb-5 underline underline-offset-8">
									{file.name} -{" "}
									<em>{(file.size / 1024 / 1024).toFixed(2)} MB</em>
								</p>
								<video className="mt-2 w-full max-w-sm px-3 " controls>
									<source src={URL.createObjectURL(file)} type="video/mp4" />
									Your browser does not support the video tag.
								</video>
								<Button
									isIconOnly
									variant="solid"
									color="danger"
									className="absolute top-10 right-0 "
									onClick={() => handleDelete(file.name)}
									aria-label="Delete">
									<TiDeleteOutline className="h-8 w-8" />
								</Button>
							</div>
						</li>
					))}
				</ul>
				<ScanOptions setOption={setOption} />
				<Button
					isDisabled={buttonDisabled}
					onClick={handleSubmit}
					color="success"
					variant="solid"
					className=" w-full mt-10">
					Analyze
				</Button>
				{/* Handle Processing */}
				{processingMessage && (
					<div className="flex flex-col justify-center items-center gap-10 border-gray-700 dark:border-white border rounded-lg p-3 my-24">
						<IoIosMail className="h-32 w-32 text-green-500" />
						<p className="font-bold text-xl max-w-sm px-3 text-center">
							{processingMessage}
						</p>
					</div>
				)}
				{showFrameExtractor && <FrameExtractor />}
			</aside>
		</div>
	);
}
