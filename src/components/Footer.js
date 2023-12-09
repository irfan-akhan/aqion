import { Box, Flex, Text, Link, Heading, Image } from "@chakra-ui/react";
// import Link from "next/link";
import React from "react";
const Links = ["Services", "About", "Portfolio", "Careers", "Blog"];

export default function Footer() {
	return (
		<Flex
			minH="70vh"
			p="28"
			bg="#000"
			gap="10"
			direction="column"
			color="#fff"
		>
			<Flex justify="space-between">
				<Flex direction="column" gap="3">
					<Box
						as="a"
						href="/"
						data-aos="fade-up"
						fontSize={{ base: "large" }}
					>
						<Image src="/logo.png" width="150px" />
					</Box>
					<Box
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
					>
						contact
						<span style={{ fontSize: "12px" }}>@aqion.com</span>
					</Box>
				</Flex>
				<Flex direction="row" gap="3">
					<Box maxWidth="50%">
						<Heading
							data-aos="fade-up"
							as="h2"
							mb="4"
							fontWeight="400"
							fontSize={{ base: "large", md: "x-large" }}
						>
							Japan HQ
						</Heading>
						<Text data-aos="fade-up" fontWeight="300">
							9813602, Miyagi ken kurokawa district, Ohira
						</Text>
					</Box>
					<Box maxWidth="50%">
						<Heading
							as="h2"
							mb="4"
							data-aos="fade-up"
							fontWeight="400"
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
			<Flex justify="flex-start" gap="5">
				{Links.map((link) => (
					<Link
						textUnderlineOffset="10px"
						transition="all 1s ease-in"
						_hover={{
							textDecoration: "underline",
							transition: "all 1s ease-in",
						}}
						key={link}
						href={`/${link?.toLowerCase()}-aqion-tech`}
					>
						{link}
					</Link>
				))}
			</Flex>
			<Flex justify="space-between">
				<Link
					href="/privacy policy.pdf"
					target="_blank"
					textUnderlineOffset={"10px"}
				>
					Privacy Policy
				</Link>
				<Text>©2023 - AQION Agency</Text>
			</Flex>
		</Flex>
	);
}
