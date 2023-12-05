import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function AboutHero({ text, heading, bgImage }) {
	return (
		<Flex
			minH={{ base: "initial", md: "95vh" }}
			align="center"
			direction="column"
			color="#000"
			justify="center"
			p={{ base: 4, md: "36" }}
		>
			<Stack mb={{ base: 4, md: "36" }}>
				<Heading
					textAlign={"center"}
					as="h1"
					width="fit-content"
					fontSize={{ base: "x-large", md: "4rem" }}
				>
					{heading}
				</Heading>
				{text && (
					<Text
						textAlign="center"
						fontWeight="300"
						fontSize={{ base: "medium", md: "x-large" }}
					>
						Together we build inspiring digital products
					</Text>
				)}
			</Stack>
			<Flex
				my="5"
				gap="10"
				justify="center"
				align="center"
				// maxH="50vh"
				// overflow="hidden"
			>
				<Stack width={{ base: "initial", md: "55%" }}>
					<Heading
						data-aos="fade-up"
						as="h1"
						width="fit-content"
						mb="5"
						fontSize={{ base: "x-large", md: "xx-large" }}
					>
						Our Company
					</Heading>

					<Text
						data-aos="fade-up"
						data-aos-delay="20"
						fontWeight="300"
						fontSize={{ base: "medium", md: "x-large" }}
					>
						We build products for the next generation firms to
						operate with higher efficiency and impact.
					</Text>
				</Stack>
				<Box
					data-aos="fade-up"
					display={{ base: "none", md: "initial" }}
				>
					<Image
						boxShadow="10px 10px 0px 2px #4169E2"
						border="2px solid #fff"
						borderRadius="10"
						src="/company.jpg"
						width="450px"
						objectFit="cover"
						alt="aqion company"
					/>
				</Box>
			</Flex>
		</Flex>
	);
}
