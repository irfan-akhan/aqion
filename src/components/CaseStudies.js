import React from "react";
import Case from "./Case";
import { Box, Flex } from "@chakra-ui/react";
import CustomButton from "./partials/Button";
import shuttlelane from "../../lib/shuttlelane.json";
import kohstudio from "../../lib/kohstudio.json";

const bg = ["#006699", "#000000", "#431547", "#EC1D24", "#e6007e"];
export default function CaseStudies() {
	return (
		<Flex
			direction="column"
			justify="center"
			align="center"
			p={{ base: 4, md: "10" }}
			data-aos="fade-up"
		>
			{[shuttlelane, kohstudio, shuttlelane, shuttlelane, kohstudio].map(
				(item, idx) => (
					<Case
						key={idx}
						bg={bg[idx]}
						title={item.name}
						build={item.tagline}
						text={item.client}
						banner={item.banner}
					/>
				)
			)}
			<Box my="16">
				<CustomButton
					link={true}
					linkProps={{ name: "View all project", path: "/portfolio" }}
				/>
			</Box>
		</Flex>
	);
}
