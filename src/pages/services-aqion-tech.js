import CTC from "@/components/CTC";
import CoreValueCard from "@/components/CoreValueCard";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import {
	Box,
	Divider,
	Flex,
	Heading,
	Image,
	ListItem,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { BsMegaphoneFill } from "react-icons/bs";
import { MdOutlineEngineering } from "react-icons/md";
import { RiStackFill } from "react-icons/ri";
import { TfiAgenda } from "react-icons/tfi";
import { GrCloudSoftware } from "react-icons/gr";
import { TbBrandTeams } from "react-icons/tb";
import { FaConnectdevelop } from "react-icons/fa";
import { SiNginxproxymanager } from "react-icons/si";

export default function Services() {
	return (
		<Layout>
			<Hero
				linkProps={{
					name: "View our work",
					path: "/portfolio-aqion-tech",
				}}
				text="From idea to product launch and beyond."
				heading="Closing the Gap Between Your Idea and Product"
			/>
			<Flex
				width="100%"
				p={{ base: 0, md: "20" }}
				// m={{"auto"}}
				gap={{ base: 4, md: "15" }}
				height={{ base: "fit-content", md: "90vh" }}
				overflow="hidden"
			>
				<Image
					src="/people.jpg"
					width="750px"
					display={{ base: "none", md: "block" }}
					alt="teams"
				/>
				<Box p={{ base: "5", md: "10" }}>
					<Heading
						as="h2"
						fontSize={{ base: "x-large", md: "xxx-large" }}
						mb="5"
					>
						What We Do
					</Heading>
					<Text>
						Product form and functionality alone are not enough to
						compete in an extremely competitive market. To stand
						out, we design smart, simple, and human-centric products
						based on user insight that connect with people on a
						deeper level.
					</Text>
				</Box>
			</Flex>
			<Flex wrap="wrap" p="12" my="10" align="center" justify="center">
				<ServiceCard
					icon={<MdOutlineEngineering fontSize="6rem" />}
					items={[
						"MVP Development",
						" Product Development",
						"Cloud & DevOps",
					]}
					heading="Product Engineering"
					text="We deliver powerful products using the right mix of front and back-end technologies."
				/>
				<ServiceCard
					icon={<GrCloudSoftware fontSize="6rem" />}
					items={[
						"Digital Transformation",
						"Content Management Solutions",
						"Digital Commerce",
					]}
					heading="Digital Experience"
					text="We help you delight your customers at each touchpoint with a uniform digital experience."
				/>
				<ServiceCard
					icon={<RiStackFill fontSize="6rem" />}
					items={[
						"BI and Analytics",
						"SaaS Application Development",
						"Application Modernization",
					]}
					heading="Enterprise Solutions"
					text="We help enterprises build, modernize, migrate & maintain new-age digital solutions."
				/>
				<ServiceCard
					icon={<BsMegaphoneFill fontSize="6rem" />}
					items={[
						"Inbound Marketing",
						"Content Marketing",
						"Performance Marketing",
					]}
					heading="Growth Hacking"
					text="We plan, execute, and optimize your marketing strategy to growth hack into success."
				/>
			</Flex>
			<Flex
				wrap="wrap"
				p="12"
				my="10"
				align="center"
				justify="center"
				bg="#f5f5f9 "
			>
				<ServiceCard
					bg="#fff"
					color="#000"
					icon={<TbBrandTeams fontSize="6rem" />}
					heading="Dedicated Teams"
					text="We help you set up an agile team of developers, strategists & project manager around expertise you’re looking for. You’ll have full control over the extent of involvement of the team."
				/>
				<ServiceCard
					bg="#fff"
					color="#000"
					icon={<MdOutlineEngineering fontSize="6rem" />}
					heading="Remote Developers"
					text="We provide dedicated developers to those who prefer direct engagement without any management layers. They work exclusively for you, in any project you wish them to be in."
				/>
				<ServiceCard
					bg="#fff"
					color="#000"
					icon={<SiNginxproxymanager fontSize="6rem" />}
					heading="Managed Projects"
					text="Our managed projects model allows you to get your projects fully handled by our team selected by you. Share your requirements & get started now!"
				/>
				<ServiceCard
					bg="#fff"
					color="#000"
					icon={<FaConnectdevelop fontSize="6rem" />}
					heading="Infrastructure"
					text="Our managed projects model allows you to get your projects fully handled by our team selected by you. Share your requirements & get started now!"
				/>
			</Flex>
			{/* <Flex
				justifyContent="space-between"
				align="flex-start"
				minH="50vh"
				my="3"
				textAlign="start"
				p={{ base: 6, md: "24" }}
				direction={{ base: "column", md: "row" }}
				gap={{ base: 5, md: 0 }}
			>
				<Box>
					<Text>01</Text>
				</Box>
				<Box>
					<Text fontWeight="500" fontSize="x-large" textAlign="start">
						Design
					</Text>
				</Box>
				<UnorderedList spacing={4} fontSize="large" fontWeight="300">
					<ListItem>UX/UI design</ListItem>
					<ListItem>User flow</ListItem>
					<ListItem>Wireframes</ListItem>
				</UnorderedList>
				<UnorderedList spacing={4} fontSize="large" fontWeight="300">
					<ListItem>Prototyping</ListItem>
					<ListItem>Brand identity</ListItem>
					<ListItem>Usability testing</ListItem>
				</UnorderedList>
			</Flex>
			<Flex
				justifyContent="space-between"
				align="flex-start"
				minH="50vh"
				my="3"
				p={{ base: 6, md: "24" }}
				direction={{ base: "column", md: "row" }}
				gap={{ base: 5, md: 0 }}
			>
				<Box>
					<Text>02</Text>
				</Box>
				<Box>
					<Text fontWeight="500" fontSize="x-large">
						Development
					</Text>
				</Box>
				<UnorderedList spacing={4} fontSize="large" fontWeight="300">
					<ListItem>Technical product discovery</ListItem>
					<ListItem>Mobile apps</ListItem>
					<ListItem>Web apps</ListItem>
					<ListItem>Web platforms</ListItem>
					<ListItem>eCommerce</ListItem>
				</UnorderedList>
				<UnorderedList spacing={4} fontSize="large" fontWeight="300">
					<ListItem>Infrastructure</ListItem>
					<ListItem>Data science</ListItem>
					<ListItem>QA Automation</ListItem>
				</UnorderedList>
			</Flex>
			<Flex
				justifyContent="space-between"
				align="flex-start"
				minH="50vh"
				my="3"
				p={{ base: 6, md: "24" }}
				direction={{ base: "column", md: "row" }}
				gap={{ base: 5, md: 0 }}
			>
				<Box>
					<Text>03</Text>
				</Box>
				<Box>
					<Text fontWeight="500" fontSize="x-large">
						Product/Team Scaling
					</Text>
				</Box>
				<UnorderedList spacing={4} fontSize="large" fontWeight="300">
					<ListItem>Team augmentation/ dedicated team</ListItem>
					<ListItem>Agile product teams</ListItem>
					<ListItem>Product ownership</ListItem>
					<ListItem>DevOps</ListItem>
				</UnorderedList>
				<UnorderedList spacing={4} fontSize="large" fontWeight="300">
					<ListItem>Cloud migration</ListItem>
					<ListItem>Systems integration</ListItem>
				</UnorderedList>
			</Flex>
			<Flex
				justifyContent="space-between"
				align="flex-start"
				minH="50vh"
				my="3"
				p={{ base: 6, md: "24" }}
				direction={{ base: "column", md: "row" }}
				gap={{ base: 5, md: 0 }}
			>
				<Box>
					<Text>04</Text>
				</Box>
				<Box>
					<Text fontWeight="500" fontSize="x-large">
						Strategic Support
					</Text>
				</Box>
				<UnorderedList spacing={4} fontSize="large" fontWeight="300">
					<ListItem>Business & product analysis</ListItem>
				</UnorderedList>
				<UnorderedList spacing={4} fontSize="large" fontWeight="300">
					<ListItem>User Conversion</ListItem>
				</UnorderedList>
			</Flex> */}
			{/* Approach */}
			<Box p={{ base: 2, md: "12" }}>
				<Heading
					p={{ base: 2, md: "12" }}
					as="h2"
					fontSize={{ base: "x-large", md: "xxx-large" }}
					pb="0"
				>
					AQION Client approach
				</Heading>
				<Flex
					justifyContent="space-between"
					align="flex-start"
					p={{ base: 2, md: "12" }}
					my="3"
					gap={{ base: "3", md: "2" }}
					direction={{ base: "column", md: "row" }}
				>
					<Box width={{ base: "100%", md: "10%" }}>
						<Text>01</Text>
					</Box>
					<Box width={{ base: "100%", md: "20%" }}>
						<Text fontWeight="500" fontSize="x-large">
							Transparency <br /> Partnership
						</Text>
					</Box>
					<Text
						width={{ base: "100%", md: "60%" }}
						fontSize="large"
						fontWeight="300"
					>
						Our communication and intentions are honest, and we
						expect the same from your side. We are here to warn you
						about possible risks and challenges, and we expect the
						same from your side regarding any changes that might
						occur on the journey.
					</Text>
				</Flex>
				<Divider />
				<Flex
					justifyContent="space-between"
					align="flex-start"
					p={{ base: 2, md: "12" }}
					my="3"
					gap={{ base: "3", md: "2" }}
					direction={{ base: "column", md: "row" }}
				>
					<Box width={{ base: "100%", md: "10%" }}>
						<Text>02</Text>
					</Box>
					<Box width={{ base: "100%", md: "20%" }}>
						<Text fontWeight="500" fontSize="x-large">
							Digging Deeper
						</Text>
					</Box>
					<Text
						width={{ base: "100%", md: "60%" }}
						fontSize="large"
						fontWeight="300"
					>
						Our unique culture of creativity and collaboration
						drives innovative and better results for our clients.
						Having extensive experience across multiple industries,
						markets and always putting users first, we hold
						ourselves accountable for the solutions we put on the
						market.
					</Text>
				</Flex>
				<Divider />
				<Flex
					justifyContent="space-between"
					align="flex-start"
					p={{ base: 2, md: "12" }}
					my="3"
					gap={{ base: "3", md: "2" }}
					direction={{ base: "column", md: "row" }}
				>
					<Box width={{ base: "100%", md: "10%" }}>
						<Text>03</Text>
					</Box>
					<Box width={{ base: "100%", md: "20%" }}>
						<Text fontWeight="500" fontSize="x-large">
							Tailored Approach
						</Text>
					</Box>
					<Text
						width={{ base: "100%", md: "60%" }}
						fontSize="large"
						fontWeight="300"
					>
						Every project is unique and requires a tailored-made
						approach that acknowledges customer and market problems
						and needs.
					</Text>
				</Flex>
			</Box>

			{/* Why partner with us */}
			<Flex
				align="start"
				justify="space-between"
				p={{ base: 4, md: "24" }}
				gap="10"
				wrap="wrap"
				mt="5"
				direction={{ base: "column" }}
			>
				<Heading
					width="100%"
					data-aos="fade-up"
					as="h2"
					fontSize={{ base: "x-large", md: "xxx-large" }}
					alignSelf="flex-start"
					my="5"
					textAlign="start"
				>
					Why parter with AQION ?
				</Heading>
				<Flex wrap="wrap" gap="10">
					<CoreValueCard
						heading="Pixel-perfect designs"
						text={`We’re quality-oriented with great attention to detail and design accuracy.`}
					/>
					<CoreValueCard
						heading="Crystal clear processes"
						text={`We’re like an open book, not ashamed to show how we’re doing IT`}
					/>
					<CoreValueCard
						heading="On-point and fast communication"
						text={`Our teams are always in the loop of their projects, ready to keep the fast and on-point conversations.`}
					/>
					<CoreValueCard
						heading="Fully adjusted to operate internationally"
						text={`We can easily align communication within different time zones.`}
					/>
					<CoreValueCard
						heading="Flexible cooperation"
						text={`We’re adjustable to individual needs. Hitting your budget, deadlines, and overall business goals.`}
					/>
					<CoreValueCard
						heading="Dedication to innovation"
						text={`We make sure no industry update will go unnoticed past our experts, so you get a cutting-edge, personalized solution.`}
					/>
				</Flex>
			</Flex>
			<CTC />
		</Layout>
	);
}
