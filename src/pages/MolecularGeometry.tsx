import React from "react";
import { Image, StyleSheet } from "react-native";
import { Box, ScrollView, Container, Text } from "native-base";

import data from "../data/data.json";
import Title from "../components/Title";

const MolecularGeometry = () => {
	return (
		<ScrollView contentContainerStyle={{ flex: 1, alignItems: "center" }}>
			<Container style={{ display: "flex", alignItems: "center" }}>
				<Box>
					<Title>¿Qué es la Geometria Molecular?</Title>
				</Box>
				<Box marginTop={3}>
					<Text textAlign="center">
						La geometría molecular es la distribución espacial de los átomos alrededor
						de un átomo central. Los átomos representan regiones donde existe una alta
						densidad electrónica, y se consideran por tanto grupos electrónicos, sin
						importar los enlaces que formen que pueden ser: simples, dobles o triples.
					</Text>
				</Box>
				<Box marginTop={3}>
					<Box>
						<Text textAlign="center">
							Los tipos de estructuras que podemos encontrar son las siguientes
						</Text>
					</Box>

					{data.molecularGeometries.map(({ nElectrons, elements }) => (
						<Box display="flex" alignItems="center" marginTop={2}>
							<Box>
								<Text fontWeight="bold">{`Número de Electrones: ${nElectrons}`}</Text>
							</Box>
							<Box
								display="flex"
								flexDirection="row"
								flexWrap="wrap"
								justifyContent="center"
								alignItems="center"
							>
								{elements.map((element) => (
									<Box
										display="flex"
										justifyContent="center"
										alignItems="center"
										borderRadius={10}
										borderWidth="2px"
										borderColor="#000"
										width="150px"
										height="150px"
										margin={4}
									>
										<Box>
											<Text textAlign="center">{element.name}</Text>
										</Box>
										{/* <Image
											source={require(`../assets/images/geometries/${element.img}`)}
											style={{ width: 100, height: 100 }}
											resizeMode="contain"
										/> */}
									</Box>
								))}
							</Box>
						</Box>
					))}
				</Box>
			</Container>
		</ScrollView>
	);
};

export default MolecularGeometry;

const styles = StyleSheet.create({});
