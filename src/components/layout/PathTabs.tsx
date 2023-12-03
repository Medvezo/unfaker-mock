"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { tabs } from "@/lib/const";

export default function PathTabs() {
	const router = useRouter();
	const pathname = usePathname();
	// Active tab
	const [selectedTab, setSelectedTab] = useState(pathname);

	const handleTabClick = (path: string) => {
		setSelectedTab(path);
		router.push(path);
	};
	return (
		<nav className="flex flex-col pt-24  px-5 w-full">
			<div className="flex justify-center gap-3 lg:gap-10 border-b border-white border-opacity-25 pb-5">
				{tabs.map((tab) => (
					<button
						key={tab.path}
						className={`px-4 py-1 flex justify-center items-center gap-2 w-1/2 lg:w-1/5  font-semibold rounded-md  ${
							selectedTab === tab.path
								? "bg-amber-700 text-white"
								: "bg-white text-gray-800"
						}`}
						onClick={() => handleTabClick(tab.path)}>
						{<tab.icon className="h-7 w-7 md:h-10 md:w-10" />} {tab.name}
					</button>
				))}
			</div>
		</nav>
	);
}
