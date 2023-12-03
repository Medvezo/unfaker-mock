"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { useVideo } from "@/components/container/VideoProvider";
import Image from "next/image";

const FrameExtractor: React.FC = () => {
	// Video
	const { videoFile } = useVideo();
	// Refs
	const videoRef = useRef<HTMLVideoElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const [frames, setFrames] = useState<string[]>([]); // Array of data URLs

	// Mock extracting Frames
	const extractFrames = useCallback(() => {
		const video = videoRef.current;
		const canvas = canvasRef.current;

		if (video && canvas && videoFile) {
			const context = canvas.getContext("2d");
			const interval = 5; // Extract a frame every 5 seconds
			let currentTime = 0;

			video.onseeked = () => {
				if (context) {
					context.drawImage(video, 0, 0, canvas.width, canvas.height);
					const imageData = canvas.toDataURL();
					setFrames((prevFrames) => [...prevFrames, imageData]);
				}
				currentTime += interval;
				if (currentTime <= video.duration) {
					video.currentTime = currentTime;
				}
			};

			video.src = URL.createObjectURL(videoFile);
			video.load();
		}
	}, [videoFile]);

	useEffect(() => {
		if (videoFile) {
			extractFrames();
		}
	}, [videoFile, extractFrames]); //  including extractFrames

	return (
		<div>
			<video ref={videoRef} className="w-72 h-auto" />
			<canvas ref={canvasRef} width="230" height="180" />
			<div>
				{frames.map((frame, index) => (
					<Image
						key={index}
						src={frame}
						alt={`Frame ${index}`}
						width={200}
						height={200}
					/>
				))}
			</div>
		</div>
	);
};

export default FrameExtractor;
