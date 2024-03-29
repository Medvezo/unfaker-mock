"use client";
import { useState, useEffect } from "react";
import Logo from "@/components/layout/Logo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { toast } from "react-toastify";
import PasswordInput from "@/components/form/PasswordInput";
import Cookies from "js-cookie";

export default function Login() {
	const router = useRouter();

	// states for inputs
	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const [buttonDisabled, setButtonDisabled] = useState(false); // form disability

	// Validation on client side
	useEffect(() => {
		if (user.email.length > 0 && user.password.length > 0) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	}, [user]);

	const onLogin = async () => {
		try {
			// Mock promise data with toast
			await toast.promise(
				new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve({ data: "Mock response data" });
					}, 2000);
				}),
				{
					pending: "Logging in...",
					success: "Logged in successfully 🎉",
					error: "Login failed",
				}
			);
			Cookies.set("isLoggedIn", "true");
			// push user to dashboard page on success
			router.push("/dashboard");
		} catch (error: any) {
			console.log("Login failed: ", error);
		}
	};

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md ">
				<Logo home width={50} height={50} />

				<h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-amber-700">
					Log in
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full px-3 rounded-lg sm:max-w-lg">
				<div className="bg-white px-6 py-12 shadow-md shadow-gray-700 rounded-lg sm:px-12 ">
					<form
						className="space-y-6 text-black"
						onSubmit={onLogin}
						method="post">
						<div className="flex flex-col gap-12">
							<Input
								onClear={() => setUser({ ...user, email: "" })}
								isClearable
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
							<Button
								onClick={onLogin}
								type="submit"
								fullWidth
								isDisabled={buttonDisabled}
								className="bg-accent font-bold">
								Sign In
							</Button>
						</div>
					</form>
				</div>

				<p className="mt-10 text-center text-sm text-white">
					Not a member?{" "}
					<Link
						href="/signup"
						className="font-semibold leading-6 text-secondary">
						Create an Account!
					</Link>
				</p>
			</div>
		</div>
	);
}
