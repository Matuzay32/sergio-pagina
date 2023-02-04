import React from "react";
import {
	Box,
	chakra,
	Container,
	Stack,
	Text,
	useColorModeValue,
	VisuallyHidden,
} from "@chakra-ui/react";

export default function WhatsApp({
	children,
	label,
	href,
}) {
	return (
		<chakra.button
			bg={useColorModeValue(
				"linkHeader.50",
				"linkHeader.500"
			)}
			rounded={"full"}
			w={"3rem"}
			h={"3rem"}
			cursor={"pointer"}
			as={"a"}
			href={href}
			display={"inline-flex"}
			alignItems={"center"}
			justifyContent={"center"}
			transition={"background 0.3s ease"}
			_hover={{
				color: "white",
				bg: useColorModeValue(
					"linkHeader.400",
					"whiteAlpha.200"
				),
				transform: "  scale(1.7);",
				transition: "all 1s",
			}}>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	);
}
