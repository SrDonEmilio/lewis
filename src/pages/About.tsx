import { Box, Container } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const About = () => {
	return (
		<Container>
			<Box>Acerca de</Box>
			<Box>
				"La Química Formal" es un proyecto estudiantil de la Universidad Nacional Autónoma
				de México que busca facilitar la comprensión de temas relacionados con la Química.
			</Box>
			<Box>
				Lewis es la primera App de este proyecto y su objetivo es ayudar al estudiante a calcular
				y comprender de una mejor manera las estructuras de Lewis, así como la geometría
				molecular.
			</Box>
		</Container>
	);
};

export default About;

const styles = StyleSheet.create({});
