import {
	Box,
	Flex,
	Image,
	Heading,
	Text,
	UnorderedList,
	ListItem,
	Avatar,
	AvatarBadge,
	AvatarGroup,
	Wrap,
	WrapItem,
	Center,
	HStack,
	Tag,
} from "@chakra-ui/react";
import blogPosts from "../../../lib/blog.json";
import Layout from "@/components/Layout";
import { BlogListCard } from "@/components/BlogListCard";

export default function Project({ blogPost, slug }) {
	console.log("props are ", blogPost, slug);
	const suggestedPosts = [blogPosts[0], blogPosts[1]];

	const { title, content, tags, publishDate, author } = blogPost;

	return (
		<Layout>
			<Flex
				width={{ base: "100%", md: "65vw" }}
				margin="auto"
				gap="8"
				my="15vh"
				direction="column"
				data-aos="fade-up"
			>
				<Flex
					direction="column"
					gap="5"
					my="5"
					data-aos="fade-up"
					data-aos-delay="20"
				>
					<Heading
						textTransform="uppercase"
						data-aos="fade-up"
						data-aos-delay="30"
					>
						{title}
					</Heading>
					<Flex align="center" gap="2">
						<Avatar
							size="lg"
							name="Segun Adebayo"
							src="https://bit.ly/sage-adebayo"
						/>
						<Text data-aos="fade-up" data-aos-delay="40">
							{author}
						</Text>
						<Text
							data-aos="fade-up"
							data-aos-delay="50"
							fontSize="x-small"
						>
							{publishDate}
						</Text>
					</Flex>
				</Flex>

				<HStack
					data-aos="fade-up"
					data-aos-delay="20"
					mt="5"
					spacing="3"
					wrap="wrap"
				>
					{tags?.map((item) => (
						<Tag
							px="8"
							py="3"
							key={item}
							variant="solid"
							colorScheme="blue"
							data-aos="fade-up"
							data-aos-delay="30"
						>
							{item}
						</Tag>
					))}
				</HStack>

				<Image
					data-aos="fade-up"
					data-aos-delay="20"
					width={"100%"}
					alt="Segun Adebayo"
					src="/people.jpg"
				/>
				<Flex
					direction="column"
					gap="12"
					data-aos="fade-up"
					data-aos-delay="20"
				>
					{content?.map((item, idx) => {
						return (
							<Flex
								key={idx}
								direction="column"
								gap="5"
								data-aos="fade-up"
								data-aos-delay="20"
							>
								<Heading
									data-aos="fade-up"
									data-aos-delay="30"
									fontWeight="400"
									textTransform="capitalize"
									fontSize="xxx-large"
								>
									{item.heading}
								</Heading>
								{item.text ? (
									<Text
										data-aos="fade-up"
										data-aos-delay="50"
										my="3"
										fontWeight="300"
										lineHeight="40px"
										fontSize="x-large"
									>
										{item.text}
									</Text>
								) : item.bullets ? (
									<UnorderedList>
										{item.bullets.map((text) => (
											<ListItem
												key={text}
												data-aos="fade-up"
												data-aos-delay="40"
												my="3"
												fontWeight="300"
												lineHeight="40px"
												fontSize="x-large"
											>
												{text}
											</ListItem>
										))}
									</UnorderedList>
								) : null}
							</Flex>
						);
					})}
				</Flex>
			</Flex>
			<Flex my="24" p={12} bg="#f5f5f5" justify="space-evenly">
				<Flex minW="80%" p={8} bg="#fff" justify="space-evenly">
					{suggestedPosts?.map((post, idx) => (
						<BlogListCard
							key={idx}
							subHeading={post.content[0]}
							tags={[post.tags[0], post.tags[1], post.tags[2]]}
							title={post.title}
							content={post.content}
							slug={post?.slug}
						/>
					))}
				</Flex>
			</Flex>
		</Layout>
	);
}

export async function getStaticPaths(_ctx) {
	const slugs = blogPosts.map(({ slug }) => slug);
	return {
		paths: slugs.map((slug) => ({ params: { slug } })),
		fallback: false,
	};
}
export async function getStaticProps({ params: { slug } }) {
	const blogPost = blogPosts?.find((item) => item.slug == slug);
	return { props: { blogPost: blogPost } };
}