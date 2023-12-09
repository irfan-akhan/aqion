import { Box, Flex, Text, Link, Heading, Image } from "@chakra-ui/react";
// import Link from "next/link";
import React from "react";
const Links = ["Services", "About", "Portfolio", "Careers", "Blog"];

export default function Footer() {
	return (
		<Flex
			minH="70vh"
			p={{ base: "16", md: "28" }}
			bg="#000"
			gap="10"
			direction="column"
			color="#fff"
		>
			<Flex
				justify={{ base: "center", md: "space-between" }}
				direction={{ base: "column", md: "row" }}
			>
				<Flex direction="column" gap="3">
					<Box
						as="a"
						href="/"
						data-aos="fade-up"
						fontSize={{ base: "large" }}
						width="fit-content"
					>
						<Image src="/logo.png" width="150px" />
					</Box>
					<Box
						opacity=".8"
						border="1px solid #ffffff43"
						p="2"
						as="a"
						textUnderlineOffset="10px"
						href={`mailto:contact@aqion.com`}
						fontWeight="300"
						_hover={{
							textDecorationColor: "#4169e1",
							transition: "all 1s ease-in",
							bg: "#4169e1",
							borderColor: "#4169e1",
						}}
						data-aos="fade-up"
						fontSize={{ base: "large" }}
						width="fit-content"
					>
						contact
						<span style={{ fontSize: "12px" }}>@aqion.com</span>
					</Box>
				</Flex>
				<Flex
					direction={{ base: "column", md: "row" }}
					gap="10"
					my={{ base: 8, md: "initial" }}
					opacity=".8"
				>
					<Box maxWidth={{ base: "100%", md: "50%" }}>
						<Heading
							data-aos="fade-up"
							as="h2"
							mb="4"
							fontWeight="300"
							fontSize={{ base: "large", md: "x-large" }}
						>
							Japan HQ
						</Heading>
						<Text data-aos="fade-up" fontWeight="300">
							9813602, Miyagi ken kurokawa district, Ohira
						</Text>
					</Box>
					<Box maxWidth={{ base: "100%", md: "50%" }}>
						<Heading
							as="h2"
							mb="4"
							data-aos="fade-up"
							fontWeight="300"
							fontSize={{ base: "large", md: "x-large" }}
						>
							Srinagar HQ
						</Heading>
						<Text data-aos="fade-up" fontWeight="300">
							190011, Mandiball Hawal
						</Text>
					</Box>
				</Flex>
			</Flex>
			<Flex
				justify={{ base: "center", md: "flex-start" }}
				gap="5"
				wrap="wrap"
			>
				{Links.map((link) => (
					<Link
						data-aos="fade-up"
						textUnderlineOffset="10px"
						transition="all 1s ease-in"
						_hover={{
							textDecoration: "underline",
							transition: "all 1s ease-in",
						}}
						fontWeight="300"
						key={link}
						opacity={".8"}
						href={`/${link?.toLowerCase()}-aqion-tech`}
					>
						{link}
					</Link>
				))}
			</Flex>
			<Flex
				justify="space-between"
				align="center"
				direction={{ base: "column", md: "initial" }}
				data-aos="fade-up"
			>
				<Link
					href="/privacy policy.pdf"
					target="_blank"
					textUnderlineOffset={"10px"}
					opacity=".8"
				>
					Privacy Policy
				</Link>
				<Text opacity=".8">©2023 - AQION Tech</Text>
			</Flex>
		</Flex>
	);
}
