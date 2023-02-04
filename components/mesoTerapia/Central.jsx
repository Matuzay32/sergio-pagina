import {
	Image,
	Box,
	Center,
	Heading,
	Text,
	Stack,
	Avatar,
	useColorModeValue,
} from "@chakra-ui/react";

export default function Central({ image }) {
	return (
		<Center py={6}>
			<Box
				maxW={"445px"}
				w={"full"}
				bg={useColorModeValue("white", "gray.900")}
				boxShadow={"2xl"}
				rounded={"md"}
				p={6}
				overflow={"hidden"}>
				<Box
					h={"210px"}
					bg={"gray.100"}
					mt={-6}
					mx={-6}
					mb={6}
					pos={"relative"}>
					<Image
						alt={image.image}
						rounded={"lg"}
						height={210}
						width={"full"}
						objectFit={"cover"}
						src={image.image}
						_hover={{
							transform: "  scale(1.1);",
							transition: "all 3s",
						}}
					/>
				</Box>
				<Stack>
					<Heading
						color={useColorModeValue(
							"linkHeader.400",
							"white"
						)}
						fontSize={"2xl"}
						fontFamily={"body"}>
						{image.title}
					</Heading>
					<Text color={"gray.500"}>
						{image.description}
					</Text>
				</Stack>
			</Box>
		</Center>
	);
}
