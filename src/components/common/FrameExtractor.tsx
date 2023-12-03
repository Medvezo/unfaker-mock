import React, { useEffect, useRef, useState, useCallback } from "react";
import { useVideo } from "@/components/container/VideoProvider";
import Image from "next/image";

const FrameExtractor: React.FC = () => {
    const { videoFile } = useVideo();
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [frames, setFrames] = useState<string[]>([]);

    const drawIndicators = (context: CanvasRenderingContext2D) => {
        // ... existing drawIndicators code
    };

    const extractRandomFrame = useCallback(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (video && canvas && videoFile) {
            const context = canvas.getContext("2d");
            video.onloadedmetadata = () => {
                const duration = video.duration;
                const randomTime = Math.floor(Math.random() * duration);
                video.currentTime = randomTime; // Jump to a random position
            };

            video.onseeked = () => {
                if (context) {
                    context.drawImage(video, 0, 0, canvas.width, canvas.height);
                    drawIndicators(context);
                    const imageData = canvas.toDataURL();
                    setFrames(prevFrames => [...prevFrames, imageData]);
                }
            };
            video.src = URL.createObjectURL(videoFile);
            video.load();
        }
    }, [videoFile]);

    useEffect(() => {
        if (videoFile) {
            extractRandomFrame();
        }
    }, [videoFile, extractRandomFrame]);

    return (
        <div className="flex flex-col items-center justify-center">
            <video ref={videoRef} className="hidden" />
            <canvas ref={canvasRef} className="hidden" width="230" height="180" />
            <div className="flex flex-wrap justify-center gap-4 mt-4">
                {frames.map((frame, index) => (
                    <Image key={index} src={frame} alt={`Frame ${index}`} width={230} height={180} />
                ))}
            </div>
        </div>
    );
};

export default FrameExtractor;
