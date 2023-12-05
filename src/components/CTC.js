import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import CustomButton from "./partials/Button";

export default function CTC() {
	return (
		<Flex
			mb="10"
			direction="column"
			p="10"
			gap={{ base: 5, md: "10" }}
			justify="center"
			align="center"
			data-aos="fade-up"
			data-aos-offset="40"
		>
			<Heading
				as="h3"
				fontSize={{ base: "large", md: "xx-large" }}
				fontWeight="400"
				textAlign="center"
				textTransform="uppercase"
			>
				Have a project in mind, or want to say hello?
			</Heading>
			<CustomButton
				link={true}
				linkProps={{
					name: "Let's collaborate",
					path: "/contact-aqion-tech",
				}}
			/>
		</Flex>
	);
}
