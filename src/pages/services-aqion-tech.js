import CTC from "@/components/CTC";
import CoreValueCard from "@/components/CoreValueCard";
import { FaNode, FaReact, FaReacteurope } from "react-icons/fa6";
import {
	SiMysql,
	SiMongodb,
	SiJavascript,
	SiNextdotjs,
	SiPython,
} from "react-icons/si";
import { MdJavascript, MdSupportAgent } from "react-icons/md";
import { PiTargetLight } from "react-icons/pi";
import { HiLightBulb } from "react-icons/hi";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { FaSpellCheck } from "react-icons/fa6";
import {
	FaAppStoreIos,
	FaAws,
	FaHeadSideVirus,
	FaLaptopCode,
	FaNodeJs,
	FaPython,
	FaWordpress,
} from "react-icons/fa";
import { GiBrainstorm } from "react-icons/gi";

import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineEngineering } from "react-icons/md";
import {
	TbBrandFirebase,
	TbBrandFlutter,
	TbBrandReactNative,
	TbBrandTeams,
} from "react-icons/tb";
import { FaConnectdevelop } from "react-icons/fa";
import { SiNginxproxymanager } from "react-icons/si";
import AboutHero from "@/components/AboutHero";
import Link from "next/link";
import CustomButton from "@/components/partials/Button";

export default function Services() {
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
					A ONE-STOP-SHOP DEVELOPMENT PARTNER
				</Heading>
				<Heading as="h1" fontSize="xxx-large">
					{`Custom software development services from professionals
					you’ll enjoy working with`}
				</Heading>
				<Text fontSize="large" fontWeight="300">
					{`Team up with superstar product designers, frontend/backend
					developers and DevOps.Diverse
					professionals. Numerous delivered projects. Full-cycle custom
					software development services powered by years of best
					practices.`}
				</Text>
			</Flex>
			<Flex
				direction="column"
				justify="center"
				align="center"
				minH="90vh"
				margin="auto"
				width="80%"
				textAlign="center"
				gap="5"
			>
				<Heading as="h2" fontSize="xxx-large">
					Our Software Application Development Services
				</Heading>
				<Flex
					justify="space-between"
					align="center"
					textAlign="start"
					p="6"
					my="10"
				>
					<Flex direction="column" width="50%" gap="5">
						<Image src="/product-design.svg" boxSize={"50px"} />
						<Heading
							as="h2"
							_hover={{ color: "blue" }}
							cursor="pointer"
						>
							Digital Product Design
						</Heading>
						<Text fontWeight="500" fontSize="large">
							{`Turn a raw idea into a product millions can’t live without`}
						</Text>
						<Text fontSize="large" fontWeight="300">
							{`The Software House designed branding and UX/UI that
							impacted growth of financing platforms, educational
							services, and even a neo-bank. Practicality,
							repeated use, and A-grade speed are just a couple of
							Design Thinking rules our custom software
							development company lives by.`}
						</Text>
						<Link href="#" colorScheme="blue">
							{`Learn more ->`}
						</Link>
					</Flex>
					<Flex wrap="wrap" gap="3" justify="center" width="50%">
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width="25%"
							border="1px solid blue"
							p="3"
							rounded="5"
						>
							<FaHeadSideVirus fontSize="30px" color="blue" />
							<Text my="3">Empathize</Text>
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width="25%"
							rounded="5"
							border="1px solid blue"
							p="3"
						>
							<PiTargetLight fontSize="40px" color="blue" />
							<Text>Define</Text>
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width="25%"
							rounded="5"
							border="1px solid blue"
							p="3"
						>
							<HiLightBulb fontSize="40px" color="blue" />
							<Text>Ideate</Text>
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width="25%"
							rounded="5"
							border="1px solid blue"
							p="3"
						>
							<LiaProjectDiagramSolid
								fontSize="40px"
								color="blue"
							/>
							<Text>Prototype</Text>
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width="25%"
							rounded="5"
							border="1px solid blue"
							p="3"
						>
							<FaSpellCheck fontSize="40px" color="blue" />
							<Text>Test</Text>
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width="25%"
							rounded="5"
							border="1px solid blue"
							p="3"
						>
							<MdSupportAgent fontSize="40px" color="blue" />
							<Text>Maintain</Text>
						</Flex>
					</Flex>
				</Flex>
				<Flex
					justify="space-between"
					align="center"
					textAlign="start"
					p="6"
					my="10"
				>
					<Flex wrap="wrap" gap="3" justify="flex-start" width="50%">
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width="25%"
							border="1px solid blue"
							p="3"
							rounded="5"
						>
							<FaNode fontSize="50px" color="blue" />
							<Text my="3">NodeJS</Text>
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width="25%"
							rounded="5"
							border="1px solid blue"
							p="3"
						>
							<FaReact fontSize="50px" color="blue" />
							<Text>ReactJS</Text>
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width="25%"
							rounded="5"
							border="1px solid blue"
							p="3"
						>
							<SiNextdotjs fontSize="50px" color="blue" />
							<Text>NextJS</Text>
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width="25%"
							rounded="5"
							border="1px solid blue"
							p="3"
						>
							<SiJavascript fontSize="50px" color="blue" />
							<Text>Javascript</Text>
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width="25%"
							rounded="5"
							border="1px solid blue"
							p="3"
						>
							<SiPython fontSize="50px" color="blue" />
							<Text>Python</Text>
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width="25%"
							rounded="5"
							border="1px solid blue"
							p="3"
						>
							<FaAws fontSize="50px" color="blue" />
							<Text>AWS</Text>
						</Flex>
					</Flex>
					<Flex direction="column" width="50%" gap="5">
						<Image src="/web-development.svg" boxSize={"50px"} />
						<Heading
							as="h2"
							_hover={{ color: "blue" }}
							cursor="pointer"
						>
							Web Development
						</Heading>
						<Text fontWeight="500" fontSize="large">
							{`Be certain the project is on track by choosing from
							numberous professionals available for every stage of the
							development process.`}
						</Text>
						<Text fontSize="large" fontWeight="300">
							{`We design, build, refactor, migrate, architect, and
							provide ongoing maintenance as part of custom
							software development services. No hot fixes — only
							scalable builds with technologies that stand the
							test of time.`}
						</Text>

						<Text fontSize="large" fontWeight="300">
							{`How much does performance matter to you? We aim for
							grade A and a maximum 1s loading time for each custom
							software solution.`}
						</Text>
						<Link href="#" colorScheme="blue">
							{`Learn more ->`}
						</Link>
					</Flex>
				</Flex>
				<Flex
					justify="space-between"
					align="center"
					textAlign="start"
					p="6"
					my="10"
				>
					<Flex direction="column" width="50%" gap="5">
						<Image src="/product-design.svg" boxSize={"50px"} />
						<Heading
							as="h2"
							_hover={{ color: "blue" }}
							cursor="pointer"
						>
							Mobile Application Development
						</Heading>
						<Text fontWeight="500" fontSize="large">
							{`Turn a raw idea into a product millions can’t live without`}
						</Text>
						<Text fontSize="large" fontWeight="300">
							{`Leave your mobile app development tasks to us because we’ve been 
							   in the business long enough to create immersive UIs for iOS and
							 Android devices.`}
						</Text>
						<Link href="#" colorScheme="blue">
							{`Learn more ->`}
						</Link>
					</Flex>
					<Flex wrap="wrap" gap="3" justify="center" width="50%">
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width="25%"
							border="1px solid blue"
							p="3"
							rounded="5"
						>
							<TbBrandFirebase fontSize="60px" color="blue" />
							<Text my="3">Firebase</Text>
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width="25%"
							rounded="5"
							border="1px solid blue"
							p="3"
						>
							<TbBrandReactNative fontSize="60px" color="blue" />
							<Text>React Native</Text>
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width="25%"
							rounded="5"
							border="1px solid blue"
							p="3"
						>
							<TbBrandFlutter fontSize="40px" color="blue" />
							<Text>Flutter</Text>
						</Flex>
					</Flex>
				</Flex>

				<Flex
					justify="space-between"
					align="center"
					textAlign="start"
					p="6"
					my="10"
				>
					<Flex wrap="wrap" gap="3" justify="flex-start" width="50%">
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width="25%"
							border="1px solid blue"
							p="3"
							rounded="5"
						>
							<FaNode fontSize="60px" color="blue" />
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width="25%"
							rounded="5"
							border="1px solid blue"
							p="3"
						>
							<FaReact fontSize="60px" color="blue" />
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width="25%"
							rounded="5"
							border="1px solid blue"
							p="3"
						>
							<FaPython fontSize="60px" color="blue" />
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width="25%"
							rounded="5"
							border="1px solid blue"
							p="3"
						>
							<SiJavascript fontSize="60px" color="blue" />
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width="25%"
							rounded="5"
							border="1px solid blue"
							p="3"
						>
							<SiMysql fontSize="60px" color="blue" />
						</Flex>
						<Flex
							direction="column "
							justify="space-evenly"
							align="center"
							width="25%"
							rounded="5"
							border="1px solid blue"
							p="3"
						>
							<FaWordpress fontSize="40px" color="blue" />
						</Flex>
					</Flex>
					<Flex direction="column" width="50%" gap="5">
						<Image src="/agile-development.svg" boxSize={"50px"} />
						<Heading
							as="h2"
							_hover={{ color: "blue" }}
							cursor="pointer"
						>
							Agile Development Teams on Demand
						</Heading>
						<Text fontWeight="500" fontSize="large">
							{`Fill the talent gap for your custom software projects 
							    in a few weeks.`}
						</Text>
						<Text fontSize="large" fontWeight="300">
							{`With access to over 20+ proactive and social
							professionals, you can form a durable development
							team with frontend, backend, mobile or cloud services that
							can assist you for years.`}
						</Text>

						<Text fontSize="large" fontWeight="300">
							{`In their work, they follow multiple years of best custom
							software development practices we documented. You’ll
							be positively surprised with the very first sprint.`}
						</Text>
						<Link href="#" colorScheme="blue">
							{`Learn more ->`}
						</Link>
					</Flex>
				</Flex>
			</Flex>
			<Flex
				gap="5"
				bg="#f5f5f5"
				p="12"
				width="80%"
				margin="auto"
				my="10"
				rounded="14"
				align="center"
				justify="center"
				minH="50vh"
			>
				<Flex flexDir="column" gap="5">
					<Heading>{`“Stakeholders are extremely pleased“`}</Heading>
					<Text>
						{`That’s what Percent’s Division head thinks about our 2
						years of work. Need a development partner? Let’s have a
						free and confidential chat.`}
					</Text>
				</Flex>
				<Flex gap="5">
					<CustomButton
						rounded="20px"
						text="Book free consultation"
					/>
				</Flex>
			</Flex>
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
