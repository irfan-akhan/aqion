import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import React from "react";
import CustomButton from "./partials/Button";

export default function PositionCard({ title, position, location }) {
	return (
		<Flex
			p="6"
			my="10"
			align="flex-end"
			gap="20"
			justify="space-between"
			border="1px solid #00000079"
		>
			<Box>
				<Text textTransform="capitalize" mb="4" fontSize="x-large">
					{title}
				</Text>
				<Flex
					gap="5"
					fontSize="medium"
					textTransform="uppercase"
					color="#fff"
				>
					<Text bg="#000" w="fit-content" py="1" px="2">
						{position}
					</Text>
					<Text bg="#000" w="fit-content" py="1" px="2">
						{location}
					</Text>
				</Flex>
			</Box>
			<CustomButton text="Apply Now" />
		</Flex>
	);
}
