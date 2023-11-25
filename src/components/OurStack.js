import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import StackCards from "./StackCards";

export default function OurStack() {
	return (
		<Flex direction="column" justify="center" align="center" p="20" my="10">
			<Heading as="h2" fontWeight="400" my="5">
				OUR TECH STACK
			</Heading>
			<Text
				fontWeight="400"
				fontSize="medium"
				textAlign="center"
				width="70%"
			>
				{`We build ultra-performant and reliable software with the latest
				technologies under our belt. Let us find a best-matching
				framework that’ll exceed your product expectations.`}
			</Text>
			<StackCards />
		</Flex>
	);
}
