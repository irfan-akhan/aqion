import {
	Box,
	Flex,
	Text,
	UnorderedList,
	ListItem,
	ListIcon,
	Heading,
} from "@chakra-ui/react";
import React from "react";

export default function ServiceCard({ icon, heading, bg, color, text, items }) {
	return (
		<Flex
			direction={{ base: "column" }}
			p={{ base: 4, md: "16" }}
			gap="5"
			width="46%"
			bg={bg ? bg : "#000"}
			color={color ? color : "#fff"}
			m="5"
			data-aos="fade-up"
		>
			<Box data-aos="fade-up" data-aos-delay="200">
				{icon}
				<Heading
					as="h2"
					color="#4169E2"
					fontWeight="500"
					width="fit-content"
					mt="5"
					// boxShadow="-47px 66px 0px -47px #4169E2 "
				>
					{heading}
				</Heading>
			</Box>
			<Text data-aos="fade-up" data-aos-delay="200">
				{text}
			</Text>
			{items?.length ? (
				<UnorderedList spacing="5">
					{items.map((item) => (
						<ListItem
							data-aos="fade-up"
							data-aos-delay="250"
							key={item}
							opacity={0.9}
						>
							{item}
						</ListItem>
					))}
				</UnorderedList>
			) : (
				""
			)}
		</Flex>
	);
}
