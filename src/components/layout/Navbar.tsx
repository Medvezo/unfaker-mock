import Logo from "@/components/layout/Logo";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="fixed top-0 w-full flex justify-between items-center bg-primary px-2 md:px-5 py-2">
			<Link href="/" className="flex justify-center items-center gap-3">
				<Logo width={50} height={50} />
				<h1 className="lg:text-2xl text-lg text-white">Unfaker</h1>
			</Link>
			<div className="flex gap-3 md:gap-5 items-center">
				<Button variant="bordered" className="border-accent ">
					Log in
				</Button>
				<Button variant="solid" className="bg-accent ">
					Sign up
				</Button>
			</div>
		</nav>
	);
}
