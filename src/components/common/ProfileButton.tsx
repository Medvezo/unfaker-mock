"use client"
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { FaRegUserCircle } from "react-icons/fa";

export default function ProfileButton() {
	const router = useRouter();
	return (
		<Button
			isIconOnly
			color="warning"
			variant="ghost"
			href="/profile"
			aria-label="Take a photo"
			startContent={<FaRegUserCircle className="w-10 h-10" />}
			onClick={(e) => {
				e.preventDefault();
				router.push("/profile");
			}}
		></Button>
	);
}