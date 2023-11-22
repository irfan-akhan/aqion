import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function AboutHero({ text, heading, bgImage }) {
	return (
		<Flex
			bgImage={bgImage}
			bgPosition="top"
			minH="90vh"
			align="flex-end"
			color="#fff"
			justify="center"
		>
			<Stack>
				<Heading
					as="h1"
					width="fit-content"
					mt="-30%"
					fontSize={{ base: "xx-large", md: "4rem" }}
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
		</Flex>
	);
}
