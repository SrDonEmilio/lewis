import React from "react";
import { Text } from "native-base";

const Title = ({ children }: any) => {
	return (
		<Text textAlign="center" fontSize={20} fontWeight="bold" marginTop={3}>
			{children}
		</Text>
	);
};

export default Title;
