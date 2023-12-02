import Image from "next/image";
import Logo from "public/Logo.webp";
import { Button } from "@nextui-org/button";

export default function Navbar() {
	return (
		<nav className="fixed top-0 w-full flex justify-between items-center bg-primary px-2 md:px-5 py-2">
			<div className="flex justify-center items-center gap-3">
				<Image src={Logo} alt="Logo" width={50} height={50} />
				<h1 className="lg:text-2xl text-lg text-white">Unfaker</h1>
			</div>
			<div className="flex gap-3 md:gap-5 items-center">
				<Button variant="bordered" className="border-accent ">Log in</Button>
				<Button variant="solid" className="bg-accent ">Sign up</Button>
			</div>
		</nav>
	);
}
