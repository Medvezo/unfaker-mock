"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { VideoProvider } from "@/components/container/VideoProvider";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<NextUIProvider>
			<NextThemesProvider
				attribute="class"
				defaultTheme="dark"
				themes={["light", "dark"]}>
				<VideoProvider>{children}</VideoProvider>
			</NextThemesProvider>
		</NextUIProvider>
	);
}
