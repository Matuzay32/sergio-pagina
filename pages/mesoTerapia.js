import {
	Container,
	List,
	ListItem,
	SimpleGrid,
	Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Central from "../components/mesoTerapia/Central";
import Contenedor from "../components/paginaInicial/Contenedor";

export default function mesoTerapia() {
	const [image, setImage] = useState([
		"1.JPG",
		"2.JPG",
		"3.JPG",
		"4.JPG",
		"5.JPG",
		"6.JPG",
		"7.JPG",
		"8.JPG",
		"9.JPG",
		"10.JPG",
		"11.JPG",
	]);
	return (
		<>
			<Contenedor>
				<Container
					maxW={"7xl"}
					py={16}
					as={Stack}
					spacing={12}>
					<SimpleGrid
						columns={{ base: 1, md: 3 }}
						spacing={10}>
						{image.map((e, i) => (
							<Central image={e} />
						))}
					</SimpleGrid>
				</Container>
			</Contenedor>
		</>
	);
}
