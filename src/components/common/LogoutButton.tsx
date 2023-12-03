"use client";
import { Button } from "@nextui-org/button";
import Cookies from "js-cookie";
export default function LogoutButton() {
	// Logout by deleting mock cookie
	const logout = () => {
		Cookies.remove("isLoggedIn");
	};
	return (
		<Button color="danger" variant="solid" onClick={logout}>
			Log Out
		</Button>
	);
}
