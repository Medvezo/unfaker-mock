import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";

export default function TermsModal() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<div className="flex flex-col gap-2">
			<Button
				onClick={onOpen}
				className=" text-accent underline"
				variant="light"
				color="primary">
				User Terms of Service
			</Button>

			<Modal
				backdrop="blur"
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				scrollBehavior="inside">
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								Terms of Service
							</ModalHeader>
							<ModalBody>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Nullam pulvinar risus non risus hendrerit venenatis.
									Pellentesque sit amet hendrerit risus, sed porttitor quam.
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Nullam pulvinar risus non risus hendrerit venenatis.
									Pellentesque sit amet hendrerit risus, sed porttitor quam.
								</p>
								<p>
									Magna exercitation reprehenderit magna aute tempor cupidatat
									consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
									incididunt cillum quis. Velit duis sit officia eiusmod Lorem
									aliqua enim laboris do dolor eiusmod. Et mollit incididunt
									nisi consectetur esse laborum eiusmod pariatur proident Lorem
									eiusmod et. Culpa deserunt nostrud ad veniam.
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Nullam pulvinar risus non risus hendrerit venenatis.
									Pellentesque sit amet hendrerit risus, sed porttitor quam.
									Magna exercitation reprehenderit magna aute tempor cupidatat
									consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
									incididunt cillum quis. Velit duis sit officia eiusmod Lorem
									aliqua enim laboris do dolor eiusmod. Et mollit incididunt
									nisi consectetur esse laborum eiusmod pariatur proident Lorem
									eiusmod et. Culpa deserunt nostrud ad veniam.
								</p>
								<p>
									Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit
									duis sit officia eiusmod Lorem aliqua enim laboris do dolor
									eiusmod. Et mollit incididunt nisi consectetur esse laborum
									eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt
									nostrud ad veniam. Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Nullam pulvinar risus non risus hendrerit
									venenatis. Pellentesque sit amet hendrerit risus, sed
									porttitor quam. Magna exercitation reprehenderit magna aute
									tempor cupidatat consequat elit dolor adipisicing. Mollit
									dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
									officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et
									mollit incididunt nisi consectetur esse laborum eiusmod
									pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad
									veniam.
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Nullam pulvinar risus non risus hendrerit venenatis.
									Pellentesque sit amet hendrerit risus, sed porttitor quam.
								</p>
								<p>
									Magna exercitation reprehenderit magna aute tempor cupidatat
									consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
									incididunt cillum quis. Velit duis sit officia eiusmod Lorem
									aliqua enim laboris do dolor eiusmod. Et mollit incididunt
									nisi consectetur esse laborum eiusmod pariatur proident Lorem
									eiusmod et. Culpa deserunt nostrud ad veniam.
								</p>
								<p>
									Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit
									duis sit officia eiusmod Lorem aliqua enim laboris do dolor
									eiusmod. Et mollit incididunt nisi consectetur esse laborum
									eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt
									nostrud ad veniam. Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Nullam pulvinar risus non risus hendrerit
									venenatis. Pellentesque sit amet hendrerit risus, sed
									porttitor quam. Magna exercitation reprehenderit magna aute
									tempor cupidatat consequat elit dolor adipisicing. Mollit
									dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
									officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et
									mollit incididunt nisi consectetur esse laborum eiusmod
									pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad
									veniam.
								</p>
							</ModalBody>
							<ModalFooter>
								<Button color="danger" variant="light" onPress={onClose}>
									Close
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</div>
	);
}
