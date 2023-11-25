import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import OurStack from "@/components/OurStack";
import PositionCard from "@/components/PositionCard";
import RecruitmentCard from "@/components/RecruitmentCard";
import ValueCard from "@/components/ValueCard";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
	Box,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Flex,
	Heading,
	Image,
	Text,
} from "@chakra-ui/react";
import React from "react";

export default function Careers() {
	const openPositions = [];
	const generatePositions = () => {
		openPositions?.length ? (
			<Flex></Flex>
		) : (
			<Flex direction="column" p="16">
				<Heading as="h2" fontWeight="500" fontSize="xx-large">
					{`We currently don't have any career opportunities.`}
				</Heading>
				<Text></Text>
			</Flex>
		);
	};
	return (
		<Layout>
			<Hero
				heading="Shape the Future of Digital Products"
				text="Q is home to more than 300+ fast learners and experts helping brands make the world more digitalized."
				linkProps={{ name: "View open positions", path: "#positions" }}
				imgUrl="/teams.jpg"
			/>

			<Flex width="80%" p="12" m="auto" gap="15">
				<Image src="teams.jpg" width="450px" />
				<Box p="10">
					<Heading mb="5">Be a Part of Something Big!</Heading>
					<Text>
						Our team is always looking for extraordinary talent,
						motivated, passionate, and creative team players with
						the desire to bring their ideas to life and positively
						impact society.
					</Text>
				</Box>
			</Flex>
			<Flex
				direction="column"
				w="80%"
				p="16"
				border="2px solid #000"
				justify="center"
				align="center"
				m="auto"
				my="10"
			>
				<Heading as="h2" fontWeight="500" fontSize="xx-large">
					{`We currently don't have any career opportunities.`}
				</Heading>
				<Text></Text>
			</Flex>
			<OurStack />
			<Flex
				direction="column"
				p="24"
				textAlign="center"
				w="70%"
				mx="auto"
				align="center"
				justify="center"
			>
				<Text fontSize="x-large">Our recruitment process</Text>
				<Text fontSize="xxx-large" lineHeight="44px" my="3">
					Have you sent us your application?
				</Text>
				<Text fontSize="large">
					Great, this is your first step to joining our team! This
					will be your further path in our recruitment process
				</Text>
				<RecruitmentCard
					heading="Phone Interview"
					step="1"
					text={`Our Recruiter - Ania - will contact you to briefly
            tell you about our company and position. You can
            also expect a few questions related to your
            experience and expectations.`}
				/>
				<RecruitmentCard
					heading="Meeting with the Manager/TL
					"
					step="2"
					text={`You will have the opportunity to meet your future Manager or 
					Team Leader. We will want to get to know your competencies better, 
					understand your role so far and talk about your aspirations in terms 
					of further development.`}
				/>
				<RecruitmentCard
					heading="Technical meeting/task"
					step="3"
					text={`You are already at the final stage in our recruitment process, congratulations! 
					Now we would like to confirm your skills in a practically. We will invite you to a 
					workshop where you will have the opportunity to work on a task typical for the position
					you applied for. In the case of some positions, instead of a workshop, the last stage of 
					recruitment will be a task. You will receive enough time for its execution to calmly 
					prepare it and at the same time its execution will not be time-consuming for you`}
				/>
				<RecruitmentCard
					heading="Feedback & Decision"
					step="4"
					text={`After the last stage of recruitment, we need about 2 days to provide you with 
					the final decision, you will be informed about the waiting time for the decision during
				    the last stage of the recruitment. 
					You will always receive feedback from us, no matter what decision we make`}
				/>
				<Text fontSize="xx-large">
					Become a part of IT. Become a part of Aqion.
				</Text>
			</Flex>
			<Flex
				direction="column"
				w="90%"
				p="16"
				// border="2px solid #000"
				justify="center"
				// align="center"
				m="auto"
				// my="10"
			>
				<Heading as="h3" my="5" fontSize="xx-large">
					AQION Values
				</Heading>
				<Box bg="#000">
					<ValueCard
						heading="Move Fast.
					"
						step="01"
						text={`Think fast and act fast.`}
						subText={`Be pragmatic, use Occam's razor.`}
					/>
					<ValueCard
						heading="Be Kind."
						step="02"
						text={`Never lose a good heart.`}
						subText={`Think big but stay humble.`}
					/>
					<ValueCard
						heading="Do More."
						step="03"
						text={`Always do more than people expect.`}
						subText={`Be passionate, take the initiative.`}
					/>
				</Box>
			</Flex>
			<Flex
				direction="column"
				w="90%"
				p="16"
				// border="2px solid #000"
				justify="center"
				// align="center"
				m="auto"
				// my="10"
				id="positions"
			>
				<Heading as="h3" my="5" fontSize="xx-large">
					Open positions
				</Heading>
				<Box>
					<PositionCard
						title="Full Stack Developer"
						position="remote"
						location="Srinagar"
					/>
					<PositionCard
						title="WordPress (PHP) Developer"
						position="remote"
						location="Srinagar"
					/>
					<PositionCard
						title="Data Engineer"
						position="remote"
						location="Srinagar"
					/>

					<PositionCard
						title="Senior React Developer"
						position="remote"
						location="Srinagar"
					/>
					<PositionCard
						title="Solution Architect"
						position="remote"
						location="Srinagar"
					/>
				</Box>
			</Flex>
			<Flex
				direction="column"
				w="90%"
				p="16"
				// border="2px solid #000"
				justify="center"
				// align="center"
				m="auto"
				// my="10"
				id="positions"
			>
				<Heading as="h3" my="5" fontSize="xx-large">
					FAQs
				</Heading>
				<Box>
					<Accordion allowMultiple>
						<AccordionItem>
							{({ isExpanded }) => (
								<>
									<h2>
										<AccordionButton>
											<Box
												as="span"
												flex="1"
												textAlign="left"
												fontWeight="500"
												fontSize="large"
											>
												Will I be recruited for a
												specific role
											</Box>
											{isExpanded ? (
												<MinusIcon fontSize="18px" />
											) : (
												<AddIcon fontSize="18px" />
											)}
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4}>
										No, we are looking for candidates to
										join us for long-term cooperation, not
										for a specific project. Projects are
										allocated immediately after you join the
										team, as agreed between you, your Team
										Leader and the Talent Allocation
										Specialist.
									</AccordionPanel>
								</>
							)}
						</AccordionItem>
						<AccordionItem>
							{({ isExpanded }) => (
								<>
									<h2>
										<AccordionButton>
											<Box
												as="span"
												flex="1"
												textAlign="left"
												fontWeight="500"
												fontSize="large"
											>
												What does the onboarding process
												look like
											</Box>
											{isExpanded ? (
												<MinusIcon fontSize="18px" />
											) : (
												<AddIcon fontSize="18px" />
											)}
										</AccordionButton>
									</h2>
									<AccordionPanel pb={4}>
										{`We want you to start working at
										Apptension equipped with the broadest
										possible knowledge and tools that will
										enable you to smoothly join the team.
										For the first three days, we will invite
										you to the office in Poznan, so that you
										can meet the team face-to-face, get to
										know our office and feel the vibe of
										Apptension a little better. Then, with
										the support of the team and Team Leader
										/ Manager, you will gradually learn your
										responsibilities and tasks for the role.`}
									</AccordionPanel>
								</>
							)}
						</AccordionItem>
					</Accordion>
				</Box>
			</Flex>
		</Layout>
	);
}
