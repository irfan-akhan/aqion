"use client";

import {
	Box,
	Flex,
	HStack,
	IconButton,
	useDisclosure,
	Stack,
	Image,
	Divider,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import CustomButton from "./partials/Button";

const Links = ["Services", "About", "Portfolio", "Careers", "Blog"];

const NavLink = (props) => {
	const { children } = props;

	return (
		<Flex role="group" p="1" direction="column" justify="center">
			<Box
				as="a"
				mx={2}
				py={1}
				_hover={{
					textDecoration: "none",
				}}
				fontWeight="300"
				fontSize="large"
				href={`/${children?.toLowerCase()}`}
			>
				{children}
			</Box>
			<Divider
				// display="none"
				transition="all .3s ease-in"
				_groupHover={{ bg: "#4169E2", padding: "1px" }}
				bg="transparent"
				padding="1px"
				border="none"
				width="inherit"
			/>
		</Flex>
	);
};

export default function Navbar() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box p={4}>
			<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
				<IconButton
					size={"md"}
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					aria-label={"Open Menu"}
					display={{ md: "none" }}
					onClick={isOpen ? onClose : onOpen}
				/>
				<HStack spacing={8} alignItems={"center"}>
					<Box as="a" href="/">
						<Image src="/logo.png" width="100px" />
					</Box>
					<HStack
						as={"nav"}
						spacing={4}
						display={{ base: "none", md: "flex" }}
					>
						{Links.map((link) => (
							<NavLink key={link}>{link}</NavLink>
						))}
					</HStack>
				</HStack>
				<Flex alignItems={"center"}>
					<CustomButton
						link={true}
						linkProps={{ name: "Contact Us", path: "/contact-us" }}
					/>
				</Flex>
			</Flex>

			{isOpen ? (
				<Box pb={4} display={{ md: "none" }}>
					<Stack as={"nav"} spacing={4}>
						{Links.map((link) => (
							<NavLink key={link}>{link}</NavLink>
						))}
					</Stack>
				</Box>
			) : null}
		</Box>
	);
}
