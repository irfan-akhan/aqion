import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function RecruitmentCard({ heading, text, step }) {
	return (
		<Flex p="12" align="center" gap="5" justify="start">
			<Text fontSize="4rem" color="#4169E2">
				{step}
			</Text>
			<Box textAlign="start">
				<Text mb="2" fontSize="xx-large">
					{heading}
				</Text>
				<Text>{text}</Text>
			</Box>
		</Flex>
	);
}
