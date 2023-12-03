"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { useVideo } from "@/components/container/VideoProvider";
import Image from "next/image";

const drawIndicators = (
	context: CanvasRenderingContext2D,
	width: number,
	height: number,
	setTrustScores: React.Dispatch<
		React.SetStateAction<{ frameIndex: number; trustScore: number }[]>
	>,
	frameIndex: number
) => {
	// Ensure the canvas size matches the video's dimensions
	context.canvas.width = width;
	context.canvas.height = height;

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
	context.fillStyle = "rgba(255, 0, 0, 0.25)";
	context.fill();

	// Trust score for each frame
	const trustScore = Math.floor(Math.random() * 100);
	setTrustScores((prevScores) => [...prevScores, { frameIndex, trustScore }]);
};

const FrameExtractor: React.FC = () => {
	const { videoFile } = useVideo();
	const videoRef = useRef<HTMLVideoElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [frames, setFrames] = useState<string[]>([]);
	const [trustScores, setTrustScores] = useState<
		{ frameIndex: number; trustScore: number }[]
	>([]);

	const extractRandomFrames = useCallback(() => {
		const video = videoRef.current;
		const canvas = canvasRef.current;
		if (video && canvas && videoFile) {
			const context = canvas.getContext("2d");
			video.onloadedmetadata = () => {
				setFrames([]);
				setTrustScores([]);
				const duration = video.duration;
				const frameCount = 5;
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
						const imageData = canvas.toDataURL();
						setFrames((prevFrames) => [...prevFrames, imageData]);
						drawIndicators(
							context,
							video.videoWidth,
							video.videoHeight,
							setTrustScores,
							frames.length
						);
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
		<div className="flex flex-col items-center justify-center">
			<video ref={videoRef} className="hidden" />
			<canvas ref={canvasRef} className="hidden" />
			<div className="flex flex-wrap justify-center gap-4 mt-4">
				{frames.map((frame, index) => (
					<div key={index} className="flex flex-col items-center">
						<Image
							src={frame}
							alt={`Frame ${index}`}
							width={150}
							height={150}
							className="w-96 h-auto"
						/>
						<p className="text-red-500">
							Trust Score:{" "}
							{
								trustScores.find((score) => score.frameIndex === index)
									?.trustScore
							}
							%
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default FrameExtractor;
