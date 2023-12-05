import Case from "@/components/Case";
import Layout from "@/components/Layout";
import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import CaseStudies from "@/components/CaseStudies";
export default function Portfolio() {
	return (
		<Layout>
			<Flex
				direction="column"
				justify="center"
				align="center"
				height={{ base: "50vh", md: "90vh" }}
				margin="auto"
				width={{ base: "100%", md: "70%" }}
				textAlign="center"
				gap="5"
				mt={{ base: "10", md: "26" }}
			>
				<Heading color=" #4169E2" as="h2" fontSize="x-large">
					AN AGILE PARTNER FOR YOUR CUSTOM REQUIREMENTS
				</Heading>
				<Heading as="h1" fontSize={{ base: "medium", md: "xxx-large" }}>
					{`Explore software development case studies from companies with similar challenges`}
				</Heading>
				<Text
					fontSize={{ base: "medium", md: "large" }}
					fontWeight="400"
				>
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
				<CaseStudies showButton={false} />
			</Flex>
		</Layout>
	);
}
