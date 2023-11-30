import Case from "@/components/Case";
import Layout from "@/components/Layout";
import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import data from "../../lib/shuttlelane.json";
export default function Portfolio() {
	console.log("dara", data);
	return (
		<Layout>
			<Flex
				direction="column"
				justify="center"
				align="center"
				minH="90vh"
				margin="auto"
				width="70%"
				textAlign="center"
				gap="5"
				mt="26"
			>
				<Heading color="blue" as="h2" fontSize="x-large">
					AN AGILE PARTNER FOR YOUR CUSTOM REQUIREMENTS
				</Heading>
				<Heading as="h1" fontSize="xxx-large">
					{`Explore software development case studies from companies with similar challenges`}
				</Heading>
				<Text fontSize="large" fontWeight="400">
					{`We build digital solutions for global brands, enterprises,
					agencies, and startups that want to grow and scale-up.`}
				</Text>
			</Flex>
			<Flex
				direction="column"
				justify="center"
				align="center"
				p={{ base: 4, md: "10" }}
				data-aos="fade-up"
			>
				<Case
					bg={"red"}
					title={data.name}
					build={data.tagline}
					text={data.client}
					banner={data.banner}
				/>
			</Flex>
		</Layout>
	);
}
