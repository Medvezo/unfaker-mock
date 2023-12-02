import Login from "@/components/container/Login";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Login",
	description: "Log in to Unfaker for detecting video fakes!",
};

export default function Home() {
	
	return (
		<main className="bg-primary min-h-screen">
			<Login/>
		</main>
	);
}