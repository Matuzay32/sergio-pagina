import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";

const colors = {
	brand: {
		900: "#1a365d",
		800: "#153e75",
		700: "#2a69ac",
	},
	//Lo uso para los links y el color de los botones
	//De esta forma al cambiar el color aqui cambia en el resto
	linkHeader: {
		800: "#4A5568",
		50: "#F0FFF4",
		400: "#48BB78",
		500: "#38A169",
	},
};

export const tema = extendTheme({ colors });
