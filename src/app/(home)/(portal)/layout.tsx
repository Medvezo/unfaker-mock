import PathTabs from "@/components/layout/PathTabs";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<PathTabs />
			<main className="min-h-screen flex justify-center items-center mt-20">
				{children}
			</main>
		</>
	);
}
