import React from "react";
import { Image } from "react-native";
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItem,
	DrawerItemList,
} from "@react-navigation/drawer";
import { Text, View } from "native-base";
import Home from "../pages/Home";
import LewisStructure from "../pages/LewisStructure";
import FormalCharge from "../pages/FormalCharge";
import MolecularGeometry from "../pages/MolecularGeometry";
import References from "../pages/References";
import About from "../pages/About";

const Drawer = createDrawerNavigator();

const DrawerHeader = (props: any) => (
	<DrawerContentScrollView contentContainerStyle={{ paddingTop: 0 }}>
		<View style={{ backgroundColor: "#84533f", height: 100 }}>
			<View style={{marginLeft: 10, marginTop: 40}}>
				<Image
					source={require("../assets/images/logo_white.png")}
					style={{ height: 60, width: 190 }}
				/>
			</View>
		</View>
		<DrawerItemList {...props}>
			<DrawerItem label="Inicio" {...props} />
		</DrawerItemList>
	</DrawerContentScrollView>
);

export default () => {
	return (
		<Drawer.Navigator initialRouteName="Home" drawerContent={DrawerHeader}>
			<Drawer.Screen name="Inicio" component={Home} />
			<Drawer.Screen name="Estructura de Lewis" component={LewisStructure} />
			<Drawer.Screen name="Carga Formal" component={FormalCharge} />
			<Drawer.Screen name="Geometría Molecular" component={MolecularGeometry} />
			<Drawer.Screen name="Sitios de Intéres" component={References} />
			<Drawer.Screen name="Acerca de" component={About} />
		</Drawer.Navigator>
	);
};
