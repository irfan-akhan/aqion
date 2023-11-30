import AboutHero from "@/components/AboutHero";
import CTC from "@/components/CTC";
import CoreValueCard from "@/components/CoreValueCard";
import Layout from "@/components/Layout";
import ManagementCard from "@/components/ManagementCard";
import Values from "@/components/Values";
import CareerCTA from "@/components/careerCTA";
import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
export default function About() {
	return (
		<Layout>
			<AboutHero
				bgImage="/team.jpg"
				heading="We empower companies to build great products"
				text="Working in various businesses across multiple countries worldwide, we exceed industry boundaries each day."
			/>
			<Flex
				p={{ base: 4, md: 20 }}
				py={{ base: 4, md: 10 }}
				justify="center"
				align="flex-start"
				overflow="hidden"
			>
				<Box
					minW={{ base: "100%", md: "40%" }}
					p={{ base: 4, md: "12" }}
				>
					<Heading
						data-aos="fade-up"
						as="h1"
						fontSize={{ base: "x-large", md: "xx-large" }}
					>
						Outsourcing Experts. Building Digital Products & Apps
						That Let People Do Things Differently. <br />
						Since 2020
					</Heading>
				</Box>
				<Box data-aos="fade-left" p={{ base: 4, md: "12" }}>
					<Text fontWeight="500" mb="5">
						ABOUT US
					</Text>
					<Text
						data-aos="fade-up"
						fontWeight="300"
						fontSize={{ base: "large", md: "1.4rem" }}
					>
						{`Aqion Tec is a global web and mobile apps development
						company helping startups, enterprises & digital agencies
						establish & extend their development teams and develop
						impressive web & products. We follow the culture of
						constant learning and improvement to provide the best
						solutions to clients.`}
					</Text>
				</Box>
			</Flex>
			<Flex
				minH="90vh"
				p={{ base: 4, md: 16 }}
				py={{ base: 4, md: 10 }}
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
						{`Since 2013 we have been providing global headquarters with exceptional digital solutions, from mobile apps to complex infrastructure.`}
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
						alt="people"
					/>
				</Box>
			</Flex>
			<Flex
				align="start"
				justify="space-between"
				p={{ base: 4, md: "32" }}
				// bg="#090909"
				// color="#fff"
				gap="10"
				wrap="wrap"
				mt="5"
				direction={{ base: "column" }}
			>
				<Heading
					data-aos="fade-up"
					as="h1"
					fontSize={{ base: "x-large", md: "xxx-large" }}
					alignSelf="flex-start"
					my="5"
					textAlign="center"
				>
					Our Values
				</Heading>
				<Values
					heading="Teamwork"
					text="Supporting others and helping them achieve their true potential, making sure that no one is left with their problem alone, respecting each individual."
				/>
				<Divider />

				<Values
					heading="Dedication to innovation"
					text="Always looking for better solutions, thinking big, being creative in problem-solving, and open-minded to new ideas."
				/>
				<Divider />

				<Values
					heading="Customer understanding"
					text="Cooperation with the client, remembering that they hired us to be experts and advise them. Treating them as partners and understanding and solving their problems."
				/>
				<Divider />

				<Values
					heading="Knowledge sharing"
					text="Spreading the knowledge - internally and externally, teaching others new abilities, asking for help with understanding the concept of something."
				/>
				<Divider />

				<Values
					heading="Constant Improvement"
					text="Striving for continuous improvement, being self-directed and accomplishing your goals, making the improvement a constant part of the work life."
				/>
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
					People who run the show
				</Heading>
				<ManagementCard />
			</Flex>
			<Flex
				align="start"
				justify="space-between"
				p={{ base: 4, md: "32" }}
				gap="10"
				wrap="wrap"
				mt="5"
				direction={{ base: "column" }}
			>
				<Heading
					width="100%"
					data-aos="fade-up"
					as="h1"
					fontSize={{ base: "x-large", md: "xxx-large" }}
					alignSelf="flex-start"
					my="5"
					textAlign="start"
				>
					What Sets Us Apart
				</Heading>
				<Flex wrap="wrap" gap="10">
					<CoreValueCard
						heading="Core Values"
						text={`We engage every project with focus and purpose. We are not okay with just okay; we know great work comes through constant pushing the ‘good enough’ wall. And we do it every time we work on something. Each of our team members is diligent and committed to what’s to be done.`}
					/>
					<CoreValueCard
						heading="Personal Approach"
						text={`Each project is unique, and hence, we take time understanding the "why" behind every project we take on. We brainstorm, and together, we come up with a solution that is feasible and solves the problem in hand. We build, we measure, we prototype, we test and test again.`}
					/>
					<CoreValueCard
						heading="Self Organized Teams"
						text={`We don’t do pile-ons. Our secret to success lies in our ability to self-organize and adapt to any situation. We prefer working in small teams who know and own the problem at hand. No extra layer, no obstacles, easy flow of information, tight feedback loops - everything we need to deliver fast.`}
					/>
					<CoreValueCard
						heading="Strong Relationships with Customers"
						text={`Since our inception 15 years back, we’ve encountered many great minds, amazing people who worked with us. They came to us with a story, a vision they want their product to reflect. For us, clients aren’t just people we’re helping, they are Classic Informatics’ critical team members.`}
					/>
				</Flex>
			</Flex>
			<CareerCTA />
			<CTC />
		</Layout>
	);
}
