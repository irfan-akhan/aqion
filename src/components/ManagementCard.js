import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ManagementCard() {
	return (
		<>
			<Flex
				placeContent="center"
				width={{ base: "100%", md: "40%" }}
				display={{ base: "none", md: "initial" }}
				border="2px solid #4169e166"
				boxShadow="10px 10px 0px 2px #4169E2"
				textAlign="center"
			>
				<Image src="/contact.jpg" alt="aqion" width="80%" />
			</Flex>
			<Box width={{ base: "100%", md: "40%" }}>
				<Flex gap="20">
					<Box>
						<Text
							data-aos="fade-up"
							fontWeight="400"
							fontSize={{ base: "large", md: "x-large" }}
						>
							Wajid Kaaz
						</Text>
						<Text
							data-aos="fade-up"
							fontWeight="300"
							mb="10"
							fontSize={{ base: "medium" }}
						>
							Gandi
						</Text>
					</Box>
					<Flex gap="6">
						<Button
							_hover={{
								transform: "all 1s ease-in",
								bg: "##fff",
								boxShadow: "0px 0px 0px 0px",
							}}
							bg="#000"
							border="2px solid #fff"
							color="white"
							p="5"
							py="7"
							boxShadow="5px 5px 0px 0px  #fff"
						>
							<FaArrowLeft />
						</Button>
						<Button
							_hover={{
								transform: "all 1s ease-in",
								bg: "##fff",
								boxShadow: "0px 0px 0px 0px",
							}}
							bg="#000"
							border="2px solid #fff"
							color="white"
							p="5"
							py="7"
							boxShadow="5px 5px 0px 0px  #fff"
						>
							<FaArrowRight />
						</Button>
					</Flex>
				</Flex>
				<Text
					data-aos="fade-up"
					fontWeight="300"
					mb="5"
					fontSize={{ base: "large", md: "large" }}
				>
					{`An energetic and passionate leader with a strong
        international background. With 15 years of executive
        experience, Filip can seal any deal. His attention to
        detail is causing many headaches, but that’s only
        because he’s a perfectionist in everything he does. He
        knows no limits, and for him, “boundaries” is just
        another word.`}
				</Text>
			</Box>
		</>
	);
}
