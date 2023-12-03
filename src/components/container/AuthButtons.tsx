"use client";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { useRouter, usePathname } from "next/navigation";
import { isLoggedIn } from "@/hooks/isLoggedIn";
import ProfileButton from "@/components/common/ProfileButton";

export default function AuthButtons() {
	const router = useRouter();
	const pathname = usePathname()
	const [isClient, setIsClient] = useState(false);
	const [isLogged, setIsLogged] = useState(isLoggedIn());

    useEffect(() => {
        setIsClient(true);
        setIsLogged(isLoggedIn()); // Update state on route change
    }, [pathname]); // path to re-trigger on route change


	return (
		<>
			{isClient && isLogged ? (
				<ProfileButton />
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
