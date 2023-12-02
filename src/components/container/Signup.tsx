"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/layout/Logo";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";
import { toast } from "react-toastify";
import { Input } from "@nextui-org/input";
import PasswordInput from "@/components/form/PasswordInput";

export default function Signup() {
	const router = useRouter();
	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const [buttonDisabled, setButtonDisabled] = useState(false);

	const onSignup = async () => {
		try {
			// push user to login page on success
			await toast.promise(
				new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve({ data: "Mock response data" });
					}, 2000);
				}),
				{
					pending: "Signing up...",
					success: "Signed up successfully 🎉",
					error: "Signup failed",
				}
			);
			router.push("/login");
		} catch (error: any) {
			console.log("Signup failed: ", error);
		}
	};

	// Validation on client side
	useEffect(() => {
		if (user.email.length > 0 && user.password.length > 0) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	}, [user]);

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<Logo home classes="mx-auto" width={50} height={50} />

				<h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-accent">
					Sign up
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full px-3 sm:max-w-lg">
				<div className="bg-white px-6 py-12 shadow rounded-lg sm:px-12">
					<form className="space-y-8">
						<div className="flex flex-col gap-12 text-black">
							<Input
								isClearable
								onClear={() => setUser({ ...user, email: "" })}
								color="warning"
								isRequired
								variant="underlined"
								label="Email"
								type="email"
								placeholder="you@example.com"
								labelPlacement="outside"
								value={user.email}
								onChange={(e) => setUser({ ...user, email: e.target.value })}
							/>

							<PasswordInput value={user} setValue={setUser} />
						</div>
						<div className="flex items-center gap-1 px-3 ">
							<span className="text-sm text-gray-700">
								By signing up you agree to our{" "}
								<b className=" text-accent underline">User Terms of Service</b>
							</span>
						</div>

						<Button
							fullWidth
							type="submit"
							isDisabled={buttonDisabled}
							onClick={onSignup}
							className="bg-accent font-bold">
							Sign Up
						</Button>
					</form>
				</div>

				<p className="mt-10 text-center text-sm text-white">
					Already member?{" "}
					<Link
						href="/login"
						className="font-semibold leading-6 text-secondary  ">
						Log in to your Account!
					</Link>
				</p>
			</div>
		</div>
	);
}
