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
import CustomButton from "./partials/Button";

export default function Case({ bg }) {
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
				p={{ base: "4", md: "7rem" }}
				direction="column"
				align={{ base: "center", md: "flex-start" }}
				gap={{ base: "6", md: "8" }}
				maxW={{ base: "100%", md: "60%" }}
			>
				<Stack>
					<Heading
						as="h1"
						width="fit-content"
						mb="5"
						fontSize={{ base: "large", md: "xx-large" }}
						data-aos="fade-up"
						data-aos-delay="20"
					>
						Title is here
					</Heading>
					<Heading
						as="h1"
						width="fit-content"
						fontSize={{ base: "medium", md: "xxx-large" }}
						data-aos="fade-up"
						data-aos-delay="25"
					>
						We design, build and launch digital products
					</Heading>
				</Stack>

				<Text
					fontWeight={{ base: 300, md: "400" }}
					px={{ base: "0", md: "0" }}
					width={{ base: "100%", md: "80%" }}
					fontSize={{ base: "medium", md: "large" }}
					data-aos="fade-up"
					data-aos-delay="30"
				>
					From idea discovery to product growth – we can help you at
					every stage of the product development lifecycle.
				</Text>
				<Button
					as="a"
					href="/contact-aqion-tech"
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
					data-aos-delay="30"
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
					src="/herobg1.jpg"
					h="120%"
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
