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
			aria-label="Go to dasboard"
            size="lg"
			startContent={<FaRegUserCircle className="w-16 h-16 mx-1" />}
			onClick={(e) => {
				e.preventDefault();
				router.push("/profile");
			}}
		></Button>
	);
}