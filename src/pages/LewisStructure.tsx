import React from "react";
import { Image, StyleSheet } from "react-native";
import { Container, Box, ScrollView, Text } from "native-base";
import Title from "../components/Title";

const LewisStructure = () => {
	return (
		<ScrollView contentContainerStyle={{ flex: 1, alignItems: "center" }}>
			<Container style={{ display: "flex", alignItems: "center" }}>
				<Title>Gilbert N. Lewis</Title>
				<Box marginY={5}>
					<Image
						source={require("../assets/images/Gilbert_N_Lewis.jpg")}
						style={{ width: 150, height: 200 }}
						resizeMode="contain"
					/>
				</Box>
				<Box>
					<Text textAlign="center">
						Nació el 23 de octubre de 1875 en Weymouth, Massachusetts , fue un
						fisicoquímico estadounidense reconocido por su trabajo en los denominados
						diagramas de punto o la llamada también estructura de Lewis y por la idea
						del concepto de enlace covalente y fotón.
					</Text>
					<Text textAlign="center">
						En el año 1916 realizó trabajos sobre modelos atómicos y formuló su propio
						modelo conocido como modelo del átomo cubico, proclamó la idea del enlace
						covalente que se trataba de un par de electrones compartidos en los
						elementos no metálicos que tienen de 4 a 7 electrones de valencia, en base a
						esa teoría inventó el término molécula impar que se daba cuando un electrón
						no era compartido, también formuló la regla del octeto.
					</Text>
				</Box>
			</Container>
		</ScrollView>
	);
};

export default LewisStructure;

const styles = StyleSheet.create({});
