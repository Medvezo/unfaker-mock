import Image from "next/image";
import Logo from "public/Logo.webp";

export default function Navbar() {
	return (
		<nav className="fixed top-0 w-full flex justify-between items-center bg-primary px-5 py-2">
			<div className="flex justify-center items-center gap-3">
				<Image src={Logo} alt="Logo" width={50} height={50} />
                <h1 className="lg:text-2xl text-lg">Unfaker</h1>
			</div>
			<div className="flex gap-5 items-center">
				<button>Log in</button>
				<button>Sign up</button>
			</div>
		</nav>
	);
}
