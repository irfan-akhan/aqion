import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";

export default function ValueCard({ heading, text, subText, step }) {
	return (
		<Flex
			p="12"
			my="10"
			align="flex-start"
			gap="20"
			justify="space-between"
			color="#fff"
			bg="#000"
		>
			<Box>
				<Text fontSize="4rem" color=" #4169E2">
					{step}
				</Text>
				<Text mb="4" fontSize="xxx-large">
					{heading}
				</Text>
				<Text fontSize="large">{text}</Text>
				<Text fontSize="large">{subText}</Text>
			</Box>
			<Box>
				<Image
					src="/teams.jpg"
					width="500px"
					height="350px"
					objectFit="cover"
					alt="team"
				/>
			</Box>
		</Flex>
	);
}
