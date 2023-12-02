"use client";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

export default function AuthButtons() {
	const router = useRouter();

	return (
		<div className="flex gap-3 md:gap-5 items-center">
			<Button
				onClick={() => router.push("/login")}
				variant="bordered"
				className="border-accent ">
				Log in
			</Button>
			<Button
				onClick={() => router.push("/signup")}
				variant="solid"
				className="bg-accent ">
				Sign up
			</Button>
		</div>
	);
}
