import { BlogListCard } from "@/components/BlogListCard";
import Layout from "@/components/Layout";
import { Flex } from "@chakra-ui/react";
import React from "react";
import blogPosts from "../../../lib/blog.json";
export default function Blog() {
	return (
		<Layout>
			<Flex
				direction={{ base: "column", md: "row" }}
				justify="center"
				wrap="wrap"
				minH="90vh"
				margin="auto"
				width="90%"
				// textAlign="center"
				gap="5"
				my="15vh"
			>
				{blogPosts?.map((post) => (
					<BlogListCard
						key={post?.slug}
						subHeading={post.content[0]}
						tags={[post.tags[0], post.tags[1], post.tags[2]]}
						title={post.title}
						content={post.content}
						slug={post?.slug}
					/>
				))}
			</Flex>
		</Layout>
	);
}
