import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function SalesContactCard({
	email = "contact@aqion.jp",
	heading,
	imageUrl = "/contact.jpg",
	subText = "If you need any further assistance or have additional questions, just send us an email.",
}) {
	return (
		<Flex
			align="center"
			justify="space-around"
			p={{ base: 4, md: "16" }}
			bg="#090909"
			color="#fff"
			gap="20"
			data-aos="fade-up"
		>
			<Flex
				placeContent="center"
				p="4"
				border="2px solid #4169e166"
				boxShadow="10px 10px 0px 2px #4169E2"
				textAlign="center"
			>
				<Image objectFit="fill" width="300px" src={imageUrl} />
			</Flex>
			<Box width={{ base: "50%" }} p="14">
				{heading && (
					<Text
						data-aos="fade-up"
						fontWeight="400"
						fontSize={{ base: "large", md: "xx-large" }}
					>
						{heading}
					</Text>
				)}
				{subText && (
					<Text
						data-aos="fade-up"
						fontWeight="300"
						mb="5"
						fontSize={{ base: "large", md: "x-large" }}
					>
						{subText}
					</Text>
				)}
				<Box
					as="a"
					textDecoration="underline"
					textUnderlineOffset="10px"
					href={`mailto:${email}`}
					mb={{ base: 5, md: 12 }}
					fontWeight="400"
					_hover={{
						textDecorationColor: "#4169e1",
						transition: "all 1s ease-in",
					}}
					fontSize={{ base: "x-large" }}
				>
					{email}
				</Box>
			</Box>
		</Flex>
	);
}
