import AboutHero from "@/components/AboutHero";
import Layout from "@/components/Layout";
import ManagementCard from "@/components/ManagementCard";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
export default function About() {
	return (
		<Layout>
			<AboutHero
				bgImage="/team.jpg"
				heading="People remain our DNA"
				text="Working in various businesses across multiple countries worldwide, we exceed industry boundaries each day."
			/>
			<Flex
				minH="90vh"
				p={{ base: 4, md: "16" }}
				mb={{ base: 12 }}
				justify="center"
				align="flex-start"
				height={{ base: "fit-content", md: "90vh" }}
				overflow="hidden"
				direction={{ base: "column", md: "row" }}
			>
				<Box
					minW={{ base: "100%", md: "40%" }}
					p={{ base: 4, md: "16" }}
				>
					<Heading
						data-aos="fade-up"
						as="h1"
						fontSize={{ base: "x-large", md: "xx-large" }}
					>
						Creating Experiences
					</Heading>
					<Text
						my="5"
						data-aos="fade-up"
						fontWeight="300"
						fontSize={{ base: "large", md: "1.4rem" }}
					>
						{`Since 2013 we have been providing global headquarters with exceptional digital solutions, from mobile apps to complex infrastructure.

`}
					</Text>
					<Text
						my="5"
						data-aos="fade-up"
						fontWeight="300"
						fontSize={{ base: "large", md: "1.4rem" }}
					>
						{`Nowadays, Q is recognized for creating experiences across countries while challenging boundaries across industries and exceeding users’ expectations.`}
					</Text>
				</Box>
				<Box
					pt="24"
					// display={{ base: "none", md: "block" }}
					data-aos="fade-left"
				>
					<Text
						my="5"
						data-aos="fade-up"
						fontWeight="300"
						fontSize={{ base: "large", md: "1.4rem" }}
					>
						{`We bring our services to our clients’ doorsteps with three global offices in Zagreb, London, and Zürich. This approach led us to long-term relationships resulting in many award-winning products.`}
					</Text>
				</Box>
			</Flex>
			<Flex
				minH="90vh"
				p={{ base: 4, md: "16" }}
				mb={{ base: 12 }}
				justify="center"
				align="center"
				height={{ base: "fit-content", md: "90vh" }}
				overflow="hidden"
				direction={{ base: "column", md: "row" }}
			>
				<Box
					minW={{ base: "100%", md: "40%" }}
					p={{ base: 4, md: "16" }}
				>
					<Heading
						data-aos="fade-up"
						as="h1"
						fontSize={{ base: "x-large", md: "4rem" }}
					>
						Life at AQION
					</Heading>
					<Text
						my="5"
						data-aos="fade-up"
						fontWeight="300"
						fontSize={{ base: "large", md: "1.4rem" }}
					>
						{`Our experts are dedicated to agility, creativity, flexibility, and quality to create digital products that impact people’s lives.`}
					</Text>
					<Text
						my="5"
						data-aos="fade-up"
						fontWeight="300"
						fontSize={{ base: "large", md: "1.4rem" }}
					>
						{`Our solutions cover all phases of the digital product lifecycle, from idea to technical and strategic support.`}
					</Text>
				</Box>
				<Box
					// display={{ base: "none", md: "block" }}
					data-aos="fade-left"
				>
					<Image
						clipPath="polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)"
						src="/people.jpg"
						width="100%"
					/>
				</Box>
			</Flex>
			<Flex
				align="start"
				justify="space-between"
				p={{ base: 4, md: "32" }}
				bg="#090909"
				color="#fff"
				gap="10"
				wrap="wrap"
				mt="5"
				direction={{ base: "column", md: "row" }}
			>
				<Heading
					width="100%"
					data-aos="fade-up"
					as="h1"
					fontSize={{ base: "x-large", md: "xxx-large" }}
					alignSelf="flex-start"
					my="10"
					textAlign="center"
				>
					Our Management
				</Heading>
				<ManagementCard />
			</Flex>
		</Layout>
	);
}
