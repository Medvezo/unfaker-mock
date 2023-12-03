"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { useVideo } from "@/components/container/VideoProvider";
import Image from "next/image";

const FrameExtractor: React.FC = () => {
	const { videoFile } = useVideo();
	const videoRef = useRef<HTMLVideoElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [frames, setFrames] = useState<
		{ imageData: string; trustScore: number }[]
	>([]);

	const drawIndicators = (
		context: CanvasRenderingContext2D,
		width: number,
		height: number
	): number => {
		// Draw a random polygon
		const points = Math.floor(Math.random() * 5) + 3;
		context.beginPath();
		for (let i = 0; i < points; i++) {
			const x = Math.random() * width;
			const y = Math.random() * height;
			if (i === 0) {
				context.moveTo(x, y);
			} else {
				context.lineTo(x, y);
			}
		}
		context.closePath();
		context.fillStyle = "rgba(255, 0, 0, 0.5)";
		context.fill();

		// Mock trust score
		return Math.floor(Math.random() * (90 - 40 + 1)) + 40;
	};

	const extractRandomFrames = useCallback(() => {
		const video = videoRef.current;
		const canvas = canvasRef.current;
		if (video && canvas && videoFile) {
			const context = canvas.getContext("2d");
			video.onloadedmetadata = () => {
				setFrames([]);
				// Canvas size
				canvas.width = video.videoWidth;
				canvas.height = video.videoHeight;

				const duration = video.duration;
				const frameCount = 5; // Number of frames to extract
				let extractedCount = 0;

				const extractFrame = () => {
					if (extractedCount >= frameCount) return;
					const randomTime = Math.random() * duration;
					video.currentTime = randomTime;
					extractedCount++;
				};

				video.onseeked = () => {
					if (context) {
						context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
						const trustScore = drawIndicators(
							context,
							video.videoWidth,
							video.videoHeight
						);
						const imageData = canvas.toDataURL();
						setFrames((prevFrames) => [
							...prevFrames,
							{ imageData, trustScore },
						]);
					}
				};

				extractFrame();
				video.addEventListener("seeked", extractFrame);
			};

			video.src = URL.createObjectURL(videoFile);
			video.load();
		}
	}, [videoFile]);

	useEffect(() => {
		if (videoFile) {
			extractRandomFrames();
		}
	}, [videoFile, extractRandomFrames]);

	return (
		<div className="flex flex-col items-center justify-center my-10">
			<video ref={videoRef} className="hidden" />
			<canvas ref={canvasRef} className="hidden" />
			<div className="flex flex-wrap justify-center gap-4 mt-4 ">
				{frames.map((frame, index) => (
					<div key={index} className="flex flex-col items-center border border-white rounded-lg overflow-hidden">
						<Image
							src={frame.imageData}
							alt={`Frame ${index}`}
							width={300}
							height={300}
							className="w-96 h-auto object-contain"
						/>
						<p className="text-red-500 text-xl font-bold p-2">Trust Score: {frame.trustScore}%</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default FrameExtractor;
