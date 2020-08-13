import React from "react";
import {Box, Text} from "grommet";
import RoutedButton from "../RoutedButton";

function NavbarButton(props) {
	return (
		<RoutedButton plain {...props}>
			{({hover}) => (
				<Box
					className="shadowNav"
					pad={{vertical: "small", horizontal: "medium"}}
					round="medium"
					background={
						props.highlight ?
							hover ? "acc-1" : "acc-5"
							: hover ? "acc-1" : "acc-3"
					} margin="none"
					justify="center" align="center" alignContent="center" alignSelf="center"
				>
					<Text weight="bold" alignSelf="center" textAlign="center" size="small">{props.text}</Text>
				</Box>
			)}
		</RoutedButton>
	);
}

export default NavbarButton;