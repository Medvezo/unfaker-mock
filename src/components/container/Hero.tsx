import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroImg from "public/Hero-crop.png";

export default function Hero() {
	return (
		<div className="relative mt-16">
			<div className=" lg:flex lg:justify-between lg:items-start lg:px-32 lg:gap-5 ">
				<div className="px-6 pb-24 pt-10 sm:pb-32 lg:flex-1 lg:px-0 lg:pb-56 lg:pt-48">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<h2 className="mt-24 text-4xl font-bold tracking-tight text-black dark:text-white sm:mt-10 sm:text-6xl">
							Unveil the Truth in Every Frame
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Our deepfake detection platform empowers you to verify the
							authenticity of any video. <br />
							Unfaker — where every pixel tells the real story
						</p>
						<div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
							<Button
								href="/signup"
								variant="solid"
								className="lg:w-fit text-white px-0 bg-accent w-full ">
								<Link href="/signup" className="py-5 px-10">
									Get Started
								</Link>
							</Button>
						</div>
					</div>
				</div>
				<div className=" w-full lg:w-1/2 xl:w-1/3 lg:m-auto px-16 lg:px-0  ">
					<Image
						width={500}
						height={500}
						className=" object-cover w-full"
						src={HeroImg}
						alt="Hero section illustration"
						layout="intrinsic"
					/>
				</div>
			</div>
		</div>
	);
}
