"use client";
import { useState, useEffect } from "react";
import LogoLeaf from "@/components/layout/Logo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { toast } from "react-toastify";
import PasswordInput from "@/components/form/PasswordInput";

export default function Login() {
	const router = useRouter();

	// states for inputs
	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const [buttonDisabled, setButtonDisabled] = useState(false); // form disability

	useEffect(() => {
		if (user.email.length > 0 && user.password.length > 0) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	}, [user]);

	const onLogin = () => {
		// push user to app on success
		router.push("/app");
	};

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md ">
				<LogoLeaf classes="mx-auto" width={50} height={50} />

				<h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-amber-700">
					Log in
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full px-3 rounded-lg sm:max-w-lg">
				<div className="bg-white px-6 py-12 shadow-md shadow-gray-700 rounded-lg sm:px-12 ">
					<form
						className="space-y-6 text-black"
						onSubmit={onLogin}
						method="POST">
						<div className="flex flex-col gap-12">
							<Input
								onClear={() => setUser({ ...user, email: "" })}
								isClearable
								color="primary"
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
								type="submit"
								fullWidth
								isDisabled={buttonDisabled}
								className="bg-accent  font-bold">
								Sign In
							</Button>
						</div>
					</form>
				</div>

				<p className="mt-10 text-center text-sm text-white">
					Not a member?{" "}
					<Link
						href="../signup"
						className="font-semibold leading-6 text-secondary transition-colors duration-100 ease-in">
						Create an Account!
					</Link>
				</p>
			</div>
		</div>
	);
}
