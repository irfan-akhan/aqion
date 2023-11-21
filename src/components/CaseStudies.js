import React from "react";
import Case from "./Case";
import { Box, Flex } from "@chakra-ui/react";
import CustomButton from "./partials/Button";
const data = [1, 2, 3, 4, 5];
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
			{data.map((item, idx) => (
				<Case key={idx} bg={bg[idx]} />
			))}
			<Box my="16">
				<CustomButton
					link={true}
					linkProps={{ name: "View all project", path: "/portfolio" }}
				/>
			</Box>
		</Flex>
	);
}
