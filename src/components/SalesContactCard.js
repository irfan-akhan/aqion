import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function SalesContactCard({ email, heading, imageUrl, subText }) {
	return (
		<Flex
			align="start"
			justify="center"
			p={{ base: 4, md: "16" }}
			bg="#090909"
			color="#fff"
			gap="10"
			data-aos="fade-up"
			direction={{ base: "column" }}
		>
			<Flex
				placeContent="center"
				p="4"
				border="2px solid #4169e166"
				boxShadow="10px 10px 0px 2px #4169E2"
				textAlign="center"
			>
				<Image
					alt="sales rep"
					objectFit="fill"
					width="180px"
					src={imageUrl}
				/>
			</Flex>
			<Box width={{ base: "100%" }}>
				{heading && (
					<Text
						data-aos="fade-up"
						fontWeight="400"
						fontSize={{ base: "large", md: "x-large" }}
					>
						{heading}
					</Text>
				)}
				{subText && (
					<Text
						data-aos="fade-up"
						fontWeight="200"
						mb="5"
						fontSize={{ base: "medium", md: "large" }}
					>
						{subText}
					</Text>
				)}
				<Box
					border="1px solid #ffffff43"
					p="2"
					as="a"
					textUnderlineOffset="10px"
					href={`mailto:${email}`}
					mb={{ base: 5, md: 12 }}
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
					{email}
				</Box>
			</Box>
		</Flex>
	);
}
