import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { inter } from "@/lib/fonts";
// React Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
	title: "Unfaker",
	description: "Deepfake detection application",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<body className={inter.className}>
				<Providers>{children}</Providers>
				<ToastContainer autoClose={5000} theme="colored" />
			</body>
		</html>
	);
}
