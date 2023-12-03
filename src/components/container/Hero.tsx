import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
	return (
		<div className="relative mt-16">
			<div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
				<div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<h2 className="mt-24 text-4xl font-bold tracking-tight text-black dark:text-white sm:mt-10 sm:text-6xl">
							Unveil the Truth in Every Frame
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Unfaker, where the line between reality and digital manipulation
							is clarified. Our deepfake detection platform empowers you to
							verify the authenticity of any video. Unfaker — where every pixel
							tells the real story
						</p>
						<div className="mt-10 flex items-center gap-x-6">
							<Button href="/signup">Get</Button>
						</div>
					</div>
				</div>
				<div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
					<Image
						width={500}
						height={500}
						className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
						src="/Logo.webp"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}
