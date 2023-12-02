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
			<Link href="/">
				<Image
					className={classes}
					src={LeafLogo}
					alt="Biz Fix It leaf logo"
					width={width}
					height={height}
				/>
			</Link>
		);
	} else {
		return (
			<Image
				className={classes}
				src={LeafLogo}
				alt="Biz Fix It leaf logo"
				width={width}
				height={height}
			/>
		);
	}
}
