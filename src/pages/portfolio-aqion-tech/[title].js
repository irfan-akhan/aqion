import {
	Box,
	Flex,
	Image,
	Heading,
	Text,
	UnorderedList,
	ListIcon,
	ListItem,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import data from "../../../lib/data.json";
import Layout from "@/components/Layout";
import CoreValueCard from "@/components/CoreValueCard";

export default function Project() {
	const router = useRouter();
	const { title } = router.query;
	console.log("title >>", title);
	console.log("data >>", data);
	const {
		name,
		tagline,
		client,
		objective,
		background,
		banner,
		technologies_used = {},
		features = {},
		results = [],
		deliverables = null,
		future_enhancements,
	} = data[title];

	return (
		<Layout>
			<Box width="80vw" margin="auto">
				<Flex direction="column" my="24" minH="90vh" gap="5">
					<Heading width="70%" as="h1" fontSize="xxx-large">
						{name}
					</Heading>
					<Text fontSize="large">{client}</Text>
					<Image src={banner} alt={name} />
				</Flex>
				<Flex direction="column" p="12" my="24" gap="20">
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
				<Box my="24" bg="tan" height="90vh"></Box>
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
						<Text fontWeight="300" fontSize="large">
							Through collaboration with Q, The Times Travel was
							able to implement and create a new web app with a
							diverse approach to the traveling experience.
							Implementing UX and UI design, developing custom
							WordPress themes, SEO optimization and the overall
							web infrastructure were all done in just 6 months.
						</Text>
						<Box>
							<Heading as="h3" mb="4" fontWeight="500">
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
						technologies used
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
