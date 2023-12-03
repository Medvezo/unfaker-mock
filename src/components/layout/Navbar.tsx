import Logo from "@/components/layout/Logo";
import Link from "next/link";
import AuthButtons from "../container/AuthButtons";

export default function Navbar() {
	return (
		<nav className="fixed top-0 z-40 w-full flex justify-between items-center bg-primary px-2 md:px-5 py-2">
			<Link href="/" className="flex justify-center items-center gap-3">
				<Logo width={50} height={50} />
			</Link>
			<AuthButtons />
		</nav>
	);
}
