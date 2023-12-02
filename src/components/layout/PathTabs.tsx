"use client";
import { Tabs, Tab } from "@nextui-org/tabs";
import { FaRegUser } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { usePathname } from "next/navigation";

export default function PathTabs() {
	const pathname = usePathname();

	return (
		<div className="flex w-full flex-col">
			<Tabs
				aria-label="Options"
				color="primary"
				variant="bordered"
				selectedKey={pathname}>
				<Tab
					key="Profile"
                    href="/profile"
					title={
						<div className="flex items-center space-x-2">
							<FaRegUser />
							<span>Music</span>
						</div>
					}
				/>
				<Tab
					key="Dashboard"
                    href="/dashboard"
					title={
						<div className="flex items-center space-x-2">
							<VscGraph />
							<span>Videos</span>
						</div>
					}
				/>
			</Tabs>
		</div>
	);
}
