"use client";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Input } from "@nextui-org/input";
import { TPasswordInput } from "@/lib/types";

export default function PasswordInput({ value, setValue }: TPasswordInput) {
	// Password visibility
	const [isVisible, setIsVisible] = useState(false);
	const toggleVisibility = () => setIsVisible(!isVisible);

	return (
		<Input
			isRequired
			endContent={
				<button
					className="focus:outline-none"
					type="button"
					onClick={toggleVisibility}>
					{isVisible ? (
						<AiOutlineEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
					) : (
						<AiOutlineEye className="text-2xl text-default-400 pointer-events-none" />
					)}
				</button>
			}
			type={isVisible ? "text" : "password"}
			variant="underlined"
			label="Password"
			value={value.password}
			color="warning"
			labelPlacement="outside"
			onChange={(e: any) => setValue({ ...value, password: e.target.value })}
		/>
	);
}
