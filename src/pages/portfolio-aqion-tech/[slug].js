import {
	Box,
	Flex,
	Image,
	Heading,
	Text,
	UnorderedList,
	ListItem,
} from "@chakra-ui/react";
import data from "../../../lib/data.json";
import Layout from "@/components/Layout";
import CoreValueCard from "@/components/CoreValueCard";

export default function Project({ caseStudy }) {
	const {
		name,
		tagline,
		services,
		team_size,
		client,
		industry,
		objective,
		background,
		timeline,
		banner,
		technologies_used = {},
		features = {},
		results = [],
		deliverables = null,
		imageSet = {},
		future_enhancements,
	} = caseStudy;

	return (
		<Layout>
			<Box width="80vw" margin="auto">
				<Flex>
					<Flex direction="column" my="24" minH="90vh" gap="5">
						<Flex>
							{imageSet?.logo && (
								<Image
									src={imageSet.logo}
									alt={name}
									width="150px"
									mr="5"
								/>
							)}
							<Heading as="h1" fontSize="xxx-large">
								{name}
							</Heading>
						</Flex>
						<Text fontSize="large">{client}</Text>
						<Image src={banner} alt={name} />
					</Flex>
				</Flex>
				<Flex direction="column" my="24" gap="5">
					<Heading
						as="h1"
						fontSize="xxx-large"
						textTransform="capitalize"
					>
						What we did
					</Heading>
					<Flex my="5">
						<Box>
							<UnorderedList spacing="5">
								{services?.map((service) => (
									<ListItem key={service}>{service}</ListItem>
								))}
							</UnorderedList>
						</Box>
						<Box ml="auto" px="3">
							<Text
								fontSize="large"
								textTransform="uppercase"
								fontWeight="600"
							>
								Industry
							</Text>
							<Text textTransform="capitalize" my="5">
								{industry}
							</Text>
						</Box>
						<Box mx="8">
							<Text
								fontSize="large"
								textTransform="uppercase"
								fontWeight="600"
							>
								Team Size
							</Text>
							<Text textTransform="capitalize" my="5">
								{team_size} people
							</Text>
						</Box>
					</Flex>
				</Flex>
				<Flex direction="column" my="24" gap="20">
					<Box>
						<Heading
							my="5"
							fontSize="xxx-large"
							as="h2"
							fontWeight="600"
						>
							Objective
						</Heading>
						<Text fontWeight="300" fontSize="large">
							{objective}
						</Text>
					</Box>
					<Box>
						<Heading
							my="5"
							fontSize="xxx-large"
							as="h2"
							fontWeight="600"
						>
							background
						</Heading>
						<Text fontWeight="300" fontSize="large">
							{background}
						</Text>
					</Box>
				</Flex>
				<Box my="24" height="90vh">
					<Image src="/project-timeline.png" alt="project timeline" />
					<Flex
						justify="space-between"
						px="16"
						fontWeight="600"
						color="gray"
						mt="4"
					>
						{timeline.map((time, idx) => (
							<Text key={idx}>{time} weeks</Text>
						))}
					</Flex>
				</Box>
				<Box my="24">
					<Heading
						fontSize="xxx-large"
						as="h2"
						fontWeight="600"
						mb="12"
						textTransform="capitalize"
					>
						What we build
					</Heading>
					<Flex gap="24">
						<Text width="70%" fontWeight="300" fontSize="large">
							Through collaboration with Q, The Times Travel was
							able to implement and create a new web app with a
							diverse approach to the traveling experience.
							Implementing UX and UI design, developing custom
							WordPress themes, SEO optimization and the overall
							web infrastructure were all done in just 6 months.
						</Text>
						<Box>
							<Heading
								as="h3"
								mb="4"
								fontWeight="400"
								fontSize="x-large"
							>
								Deliverables
							</Heading>
							<UnorderedList spacing="3">
								{deliverables ? (
									deliverables.map((item) => (
										<ListItem
											key={item}
											fontWeight="300"
											fontSize="large"
										>
											{item}
										</ListItem>
									))
								) : (
									<>
										<ListItem
											fontWeight="300"
											fontSize="large"
										>
											Web app
										</ListItem>
										<ListItem
											fontWeight="300"
											fontSize="large"
										>
											Admin dashboard
										</ListItem>
									</>
								)}
							</UnorderedList>
						</Box>
					</Flex>
				</Box>
				<Box my="24">
					<Heading
						fontSize="xxx-large"
						as="h2"
						fontWeight="600"
						mb="12"
						textTransform="capitalize"
					>
						Tech Stack
					</Heading>
					{Object.keys(technologies_used)?.map((area) => (
						<Flex my="3" key={area}>
							<Text
								mr="5"
								fontWeight={600}
								textTransform="capitalize"
							>
								{area}
							</Text>
							<Text fontWeight="300" fontSize="large">
								{technologies_used[area]}
							</Text>
						</Flex>
					))}
				</Box>
				<Flex direction="column" my="24">
					<Heading
						fontSize="xxx-large"
						as="h2"
						fontWeight="600"
						mb="12"
						textTransform="capitalize"
					>
						Features
					</Heading>
					<Flex wrap="wrap" gap="8">
						{Object.keys(features)?.map((feature, idx) => (
							<CoreValueCard
								key={idx}
								heading={feature}
								text={features[feature]}
							/>
						))}
					</Flex>
				</Flex>
				<Flex direction="column" my="24">
					<Heading
						fontSize="xxx-large"
						as="h2"
						fontWeight="600"
						mb="12"
						textTransform="capitalize"
					>
						Visuals and Wireframes
					</Heading>
					<Flex wrap="wrap" gap="8">
						{imageSet?.gallery.map((url, idx) => (
							<Image src={url} key={idx} alt={name} />
						))}
					</Flex>
				</Flex>
				<Flex direction="column" my="24">
					<Heading
						fontSize="xxx-large"
						as="h2"
						fontWeight="600"
						mb="12"
						textTransform="capitalize"
					>
						Conclusion
					</Heading>
					{results?.map((result, idx) => (
						<Text
							fontSize="large"
							key={idx}
							fontWeight="300"
							my="2"
						>
							{result}
						</Text>
					))}
				</Flex>
			</Box>
		</Layout>
	);
}
export async function getStaticPaths(_ctx) {
	const slugs = Object.keys(data);
	return {
		paths: slugs.map((slug) => ({ params: { slug } })),
		fallback: false,
	};
}
export async function getStaticProps({ params: { slug } }) {
	const caseStudy = data[slug];
	return { props: { caseStudy } };
}
