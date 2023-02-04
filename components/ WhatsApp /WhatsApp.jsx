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
			top={0}
			pos={"absolute"}
			bg={useColorModeValue(
				"linkHeader.400",
				"whiteAlpha.200"
			)}
			fontSize={"40px"}
			color={"white"}
			rounded={"full"}
			w={"3.5rem"}
			h={"3.5rem"}
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
				transform: "  scale(1.4);",
				transition: "all 1s",
			}}>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	);
}
