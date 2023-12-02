import { Skeleton } from "@nextui-org/skeleton";

export default function Loading() {
	return (
		<div className="flex flex-1 flex-col  py-12 sm:px-6 lg:px-8 bg-primary min-h-screen">
			<div className="sm:mx-auto sm:w-full sm:max-w-md space-y-6">
				{/* Skeleton for Sign-up Text */}{" "}
				<Skeleton className="h-10 w-10 mx-auto rounded-full" />
				<Skeleton className="mt-6 h-6 w-1/4 mx-auto rounded-lg" />
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full px-3 sm:max-w-lg">
				<div className="bg-white px-6 py-12 shadow rounded-lg sm:px-12">
					<div className="space-y-12">
						{/* Skeleton for Email Input */}
						<Skeleton className="h-10 w-full rounded-lg" />

						{/* Skeleton for Password Input */}
						<div className="flex flex-col gap-5 my-3">
							<Skeleton className="h-10 w-full rounded-lg" />

							<Skeleton className="h-3 w-full rounded-lg" />
						</div>

						{/* Skeleton for Sign-up Button */}
						<Skeleton className="w-full mt-5 h-10  rounded-lg" />
					</div>
				</div>

				{/* Skeleton for Not a member Text */}
				<Skeleton className="mt-10 h-4 w-2/3 mx-auto rounded-lg" />
			</div>
		</div>
	);
}
