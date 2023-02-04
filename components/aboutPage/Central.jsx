import {
	Box,
	chakra,
	Container,
	Stack,
	Text,
	Image,
	Flex,
	VStack,
	Button,
	Heading,
	SimpleGrid,
	StackDivider,
	useColorModeValue,
	VisuallyHidden,
	List,
	ListItem,
} from "@chakra-ui/react";
import {
	FaInstagram,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

export default function Central() {
	return (
		<Container maxW={"7xl"}>
			<SimpleGrid
				columns={{ base: 1, lg: 2 }}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 18, md: 24 }}>
				<Flex>
					<Image
						rounded={"3xl"}
						boxShadow={"2x1"}
						alt={"product image"}
						src={"aboutImg.jpeg"}
						fit={"cover"}
						align={"center"}
						w={"100%"}
						h={{
							base: "100%",
							sm: "400px",
							lg: "500px",
						}}
					/>
				</Flex>
				<Stack spacing={{ base: 6, md: 10 }}>
					<Box as={"header"}>
						<Heading
							color={"linkHeader.400"}
							lineHeight={1.1}
							fontWeight={600}
							fontSize={{
								base: "2xl",
								sm: "4xl",
								lg: "5xl",
							}}>
							Mecual Massage
						</Heading>
					</Box>

					<Stack
						spacing={{ base: 4, sm: 6 }}
						direction={"column"}
						divider={
							<StackDivider
								borderColor={useColorModeValue(
									"gray.200",
									"gray.600"
								)}
							/>
						}>
						<VStack spacing={{ base: 4, sm: 6 }}>
							<Text
								color={useColorModeValue(
									"gray.500",
									"gray.400"
								)}
								fontSize={"2xl"}
								fontWeight={"300"}>
								Welcome to Mecual, a wellness space
								that provides relaxing,
								decontracting, sports, and lymphatic
								drainage massages. Here at Mecual,
								we offer a wide range of massages to
								meet the individual needs of each of
								our clients. In addition to
								massages, we have complementary
								elements that enhance the relaxation
								experience and help relieve muscle
								tension, such as the percussion gun,
								compression boots, hot stones, cold
								stones, cryosphere, tens, and
								infrared light. At Mecual, we use
								techniques inspired by yiatsu and
								Thai massages and always adopt a
								holistic approach to provide
								comprehensive care to our clients.
								We focus on providing a unique and
								personalized experience to help our
								clients reach a state of deep
								relaxation and rejuvenation. Don't
								wait any longer, visit us and
								experience the feeling of wellness
								and relaxation that only Mecual can
								offer.
							</Text>
						</VStack>
						<Box>
							<Text
								fontSize={{
									base: "16px",
									lg: "18px",
								}}
								color={useColorModeValue(
									"linkHeader.500",
									"linkHeader.400"
								)}
								fontWeight={"500"}
								textTransform={"uppercase"}
								mb={"4"}>
								Vision
							</Text>

							<SimpleGrid
								columns={{ base: 1, md: 2 }}
								spacing={10}>
								<List spacing={2}>
									<ListItem>
										To provide high-quality
										massage services to clients
										and improve their physical and
										mental well-being.
									</ListItem>
									<ListItem>
										To create a relaxing and
										welcoming environment that
										fosters a sense of comfort and
										healing.
									</ListItem>{" "}
									<ListItem>
										To continuously educate and
										train therapists on the latest
										techniques and best practices
										in massage therapy.
									</ListItem>
								</List>
								<List spacing={2}>
									<ListItem>
										To prioritize client safety
										and satisfaction, using only
										safe and effective massage
										techniques and products.
									</ListItem>
									<ListItem>
										To build strong relationships
										with clients and consistently
										exceed their expectations.
									</ListItem>
									<ListItem>
										To be an active and
										responsible member of the
										community, promoting healthy
										lifestyles and supporting
										local initiatives.{" "}
									</ListItem>
								</List>
							</SimpleGrid>
						</Box>
					</Stack>
				</Stack>
			</SimpleGrid>
		</Container>
	);
}
