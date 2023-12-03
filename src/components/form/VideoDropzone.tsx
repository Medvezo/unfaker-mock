"use client";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@nextui-org/button";
import { TiDeleteOutline } from "react-icons/ti";

export default function VideoDropzone() {
	const [files, setFiles] = useState<File[]>([]);

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

	// Ondrop handle
	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: {
			"video/*": [],
		},
		maxSize: 30000000,
	});

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
			<aside className="mt-4">
				<h4 className="font-semibold text-lg">File:</h4>
				<ul className="flex flex-wrap justify-center items-center gap-10">
					{files.map((file) => (
						<li
							key={file.name}
							className="mt-2 flex justify-between items-center ">
							<div className="relative ">
								{file.name} - {(file.size / 1024 / 1024).toFixed(2)} MB
								<video className="mt-2 w-full max-w-xs " controls>
									<source src={URL.createObjectURL(file)} type="video/mp4" />
									Your browser does not support the video tag.
								</video>
							<Button
								isIconOnly
                                variant="solid"
								color="danger"
                                className="absolute top-5 right-0 translate-x-5"
								onClick={() => handleDelete(file.name)}
								aria-label="Delete">
								<TiDeleteOutline className="h-8 w-8" />
							</Button>
							</div>
						</li>
					))}
				</ul>
			</aside>
		</div>
	);
}
