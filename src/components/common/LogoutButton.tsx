"use client";
import { Button } from "@nextui-org/button";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
	const router = useRouter();
	// Logout by deleting mock cookie
	const logout = () => {
		Cookies.remove("isLoggedIn");
		router.push("/");
	};
	return (
		<Button color="danger" variant="solid" onClick={logout}>
			Log Out
		</Button>
	);
}
