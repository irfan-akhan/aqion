import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const CustomButton = ({
	link,
	text,
	weight = 500,
	fontSize = "medium",
	linkProps = {},
	size = "md",
	p = "5",
	px = "5",
}) => {
	return (
		<Button
			p={p}
			px={px}
			borderRadius="0"
			variant="outline"
			borderColor="black"
			fontWeight={weight}
			fontSize={fontSize}
			size={size}
			transform="all 1s ease-in"
			boxShadow="5px 5px 0px 0px  #4169E2"
			_hover={{
				color: "white",
				transform: "all 1s ease-in",
				bg: "#4169E2",
				borderColor: "transparent",
				boxShadow: "0px 0px 0px 0px  #4169E2",
			}}
			data-aos="fade-up"
		>
			{link ? <Link href={linkProps.path}>{linkProps.name}</Link> : text}
		</Button>
	);
};

export default CustomButton;
