import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

export default function Case({ bg, build, title, text, banner, slug }) {
	const router = useRouter();
	console.log("slug is ", slug);
	return (
		<Flex
			data-aos="fade-up"
			height={{ base: "fit-content", md: "95vh" }}
			justify="center"
			my="6"
			overflow="hidden"
			bg={bg ? bg : "initial"}
			color="#fff"
			direction={{ base: "column", md: "row" }}
		>
			<Flex
				p={{ base: "4", md: "5rem" }}
				direction="column"
				align={{ base: "center", md: "flex-start" }}
				gap={{ base: "6" }}
				maxW={{ base: "100%", md: "60%" }}
			>
				<Stack>
					<Heading
						as="h1"
						width="fit-content"
						mb="2"
						fontSize={{ base: "large", md: "xx-large" }}
						data-aos="fade-up"
						data-aos-delay="20"
						fontWeight="400"
					>
						{title}
					</Heading>
					<Heading
						as="h1"
						width="fit-content"
						fontSize={{ base: "medium", md: "xxx-large" }}
						data-aos="fade-up"
						data-aos-delay="25"
					>
						{build}
					</Heading>
				</Stack>

				<Text
					fontWeight={{ base: 300, md: "400" }}
					p={{ base: "0", md: "0" }}
					width={{ base: "100%", md: "80%" }}
					fontSize={{ base: "medium", md: "large" }}
					data-aos="fade-up"
					data-aos-delay="30"
				>
					{text}
				</Text>
				<Button
					as="a"
					href={`/portfolio-aqion-tech/${slug}`}
					borderRadius="0"
					variant="outline"
					borderColor="#fff"
					fontWeight="300"
					fontSize="medium"
					transform="all 1s ease-in"
					boxShadow="5px 5px 0px 0px  #fff"
					_hover={{
						color: "white",
						transform: "all 1s ease-in",
						// borderColor: "transparent",
						boxShadow: "3px 2px 0px 0px  #fff",
					}}
					padding="5"
					color="#fff"
					data-aos="fade-up"
				>
					{`View case study ->`}
				</Button>
			</Flex>

			<Box
				width="50%"
				display={{ base: "none", md: "initial" }}
				data-aos="fade-left"
				data-aos-delay="30"
			>
				<Image
					src={banner}
					h="120%"
					alt="aqion"
					width="100%"
					transition="all 1s ease-in"
					_hover={{
						transform: "scale(.9)",
					}}
				/>
			</Box>
		</Flex>
	);
}
