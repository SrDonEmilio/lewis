import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import LewisStructure from "../pages/LewisStructure";
import FormalCharge from "../pages/FormalCharge";
import MolecularGeometry from "../pages/MolecularGeometry";
import References from "../pages/References";
import About from "../pages/About";

const Stack = createNativeStackNavigator();

export default () => {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="LewisStructure" component={LewisStructure} />
            <Stack.Screen name="FormalCharge" component={FormalCharge} />
            <Stack.Screen name="MolecularGeometry" component={MolecularGeometry} />
            <Stack.Screen name="References" component={References} />
            <Stack.Screen name="About" component={About} />
		</Stack.Navigator>
	);
};

