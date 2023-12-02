import LeafLogo from "public/Logo.webp";
import Image from "next/image";

type LogoLeafProps = {
	width: number;
	height: number;
	classes?: string;
};

export default function LogoLeaf({ width, height, classes }: LogoLeafProps) {
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
