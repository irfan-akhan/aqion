import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
// {
// 	name: "vue",
// 	icon: "vue.svg",
// 	name: "react",
// 	icon: "react.svg",
// 	name: "gatsby",
// 	icon: "gatsby.svg",
// 	name: "javascript",
// 	icon: "javascript.svg",
// 	name: "react native",
// 	icon: "native.svg",
// },
export default function StackCards() {
	const roles = {
		frontend: [
			"vue.svg",
			"react.svg",
			"gatsby.svg",
			"javascript.svg",
			"react native.svg",
			,
		],
		backend: [
			"python.svg",
			"node.svg",
			"grapghql.svg",
			"nest.png",
			"django.svg",
		],
		infrastructure: [
			"docker.svg",
			"firebase.svg",
			"aws.svg",
			"serverless.svg",
		],
		design: [
			"figma.svg",
			"photoshop.svg",
			"illustrator.svg",
			"blender.svg",
			"after effects.svg",
		],
	};
	const [activeRole, setActiveRole] = useState("frontend");
	return (
		<Flex
			direction="column"
			align="center"
			justify="center"
			p="16"
			bg="#000"
			my="12"
		>
			<Flex mx="auto" p="5" gap="10">
				{Object.keys(roles).map((role) => (
					<Button
						key={role}
						colorScheme="blue"
						variant={activeRole == role ? "solid" : "ghost"}
						textTransform="capitalize"
						onClick={(e) => setActiveRole(role)}
					>
						{role}
					</Button>
				))}
			</Flex>
			<Flex
				my="3"
				px="24"
				py="10"
				justify="space-between"
				align="center"
				color="#fff"
				minW="80vw"
			>
				{roles && activeRole
					? roles[activeRole].map((roleDetails, idx) => (
							<Flex
								key={idx}
								align="center"
								direction="column"
								textAlign="center"
							>
								<Image
									boxSize="70px"
									objectFit="contain"
									src={`/stack/${roleDetails}`}
									alt={`${roleDetails}`}
								/>
								<Text
									fontSize="small"
									textTransform="uppercase"
									my="3"
								>
									{roleDetails.split(".")[0]}
								</Text>
							</Flex>
					  ))
					: ""}
			</Flex>
		</Flex>
	);
}
