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

export default function relaxingMassage() {
	const [estadoImagen, setFirstEstadoImagen] = useState([
		{
			image: "1.JPG",
			title: "Image 1",
			description: "Description for image 1",
		},
		{
			image: "2.JPG",
			title: "Image 2",
			description: "Description for image 2",
		},
		{
			image: "3.JPG",
			title: "Image 3",
			description: "Description for image 3",
		},
		{
			image: "4.JPG",
			title: "Image 4",
			description: "Description for image 4",
		},
		{
			image: "5.JPG",
			title: "Image 5",
			description: "Description for image 5",
		},
		{
			image: "6.JPG",
			title: "Image 6",
			description: "Description for image 6",
		},
		{
			image: "7.JPG",
			title: "Image 7",
			description: "Description for image 7",
		},
		{
			image: "8.JPG",
			title: "Image 8",
			description: "Description for image 8",
		},
		{
			image: "9.JPG",
			title: "Image 9",
			description: "Description for image 9",
		},
		{
			image: "10.JPG",
			title: "Image 10",
			description: "Description for image 10",
		},
		{
			image: "11.JPG",
			title: "Image 11",
			description: "Description for image 11",
		},
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
						{estadoImagen?.map((e, i) => (
							<Central key={`${e}${i}`} image={e} />
						))}
					</SimpleGrid>
				</Container>
			</Contenedor>
		</>
	);
}
