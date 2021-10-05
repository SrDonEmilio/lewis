import React from "react";
import { Box, Container, ScrollView, Text } from "native-base";
import { Image } from "react-native";

const Home = () => {
	return (
		<ScrollView contentContainerStyle={{ flex: 1, alignItems: "center" }}>
			<Container style={{ display: "flex", alignItems: "center" }}>
				<Box>
					<Image
						source={require("../assets/images/logo.png")}
						style={{ width: 200, height: 100 }}
						resizeMode="contain"
					/>
				</Box>
				<Box>
					<Text textAlign="center" fontSize={18}>
						En este pequeño rincón del conocimiento, encontrarás las herramientas
						necesarias para ponerte al dia en tu clase de quimica. Podreis encontrar
						desde contenido teorico en donde aclarar dudas que puedan surgir durante los
						calculos de "carga formal" o bien "Tipos de Estructruras". Tendreis la
						oportunidad de entender y ver la geometria molecular de una manera más
						didactica.
					</Text>
				</Box>
			</Container>
		</ScrollView>
	);
};

export default Home;
