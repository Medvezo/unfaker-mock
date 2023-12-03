import LeafLogo from "public/Logo.webp";
import Image from "next/image";
import Link from "next/link";

type LogoLeafProps = {
	width: number;
	height: number;
	classes?: string;
	home?: boolean;
};

export default function LogoLeaf({
	width,
	height,
	classes,
	home,
}: LogoLeafProps) {
	if (home) {
		return (
			<Link href="/" className="flex justify-center items-center gap-3 w-full">
				<Image
					className={` ${classes}`}
					src={LeafLogo}
					alt="Biz Fix It leaf logo"
					width={width}
					height={height}
				/>
				<h1 className="lg:text-2xl text-lg text-white font-bold">Unfaker</h1>
			</Link>
		);
	} else {
		return (
			<>
				<Image
					className={classes}
					src={LeafLogo}
					alt="Biz Fix It leaf logo"
					width={width}
					height={height}
				/>
				<h1 className="lg:text-2xl text-lg text-white font-bold">Unfaker</h1>
			</>
		);
	}
}
