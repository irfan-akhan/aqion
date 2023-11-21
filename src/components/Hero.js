import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import CustomButton from "./partials/Button";

const Hero = () => {
	return (
		<Flex
			width="100wv"
			height={{ base: "fit-content", md: "90vh" }}
			justify="center"
			mb="10rem"
			direction={{ base: "column", md: "row" }}
		>
			<Flex
				pl={{ base: 0, md: "7rem" }}
				mt={{ base: "1rem", md: "4rem" }}
				direction="column"
				align={{ base: "center", md: "flex-start" }}
				gap={{ base: "6", md: "8" }}
				pr="3"
				maxW={{ base: "100%", md: "60%" }}
				boxShadow="20px 18px 2px 7px #d3d3d3"
				pos="relative"
			>
				<Stack>
					<Heading
						as="h1"
						width="fit-content"
						fontSize={{ base: "xx-large", md: "4rem" }}
					>
						We design, <br /> build and launch <br /> digital
						products
					</Heading>
					<Text
						fontWeight="300"
						fontSize={{ base: "medium", md: "large" }}
					>
						Together we build inspiring digital products
					</Text>
				</Stack>

				<Text
					fontWeight="300"
					px={{ base: "5", md: "0" }}
					fontSize={{ base: "large", md: "x-large" }}
				>
					From idea discovery to product growth – we can help you at
					every stage of the product development lifecycle.
				</Text>
				<CustomButton
					link={true}
					linkProps={{ name: "Let's collaborate", path: "/contact" }}
				/>
			</Flex>

			<Box width="50%" display={{ base: "none", md: "initial" }}>
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
};

export default Hero;
