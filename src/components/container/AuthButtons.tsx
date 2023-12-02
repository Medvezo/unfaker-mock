"use client";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "@/hooks/isLoggedIn";

export default function AuthButtons() {
	const router = useRouter();
	const [isClient, setIsClient] = useState(false);
	const isLogged = isLoggedIn();

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<>
			{isClient && isLogged ? (
				<p>Profile</p>
			) : (
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
			)}
		</>
	);
}
