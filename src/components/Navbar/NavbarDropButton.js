import React from "react";
import {Box, Text, DropButton} from "grommet";

function NavbarDropButton(props) {
	return (
		<DropButton {...props} plain dropAlign={{"top": "top"}} dropContent={
			<Box
				background="acc-10" overflow={{"vertical": "auto"}}
				height={{"max": "medium"}} gap="xsmall"
				pad="small" className="navbar-dropmenu" align="center"
				border={{"side":"bottom", "color":"acc-3", "size":"medium"}}
			>
				{props.children}
			</Box>
		}>
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
					justify="center" align="center" alignContent="center"
				>
					<Text weight="bold" alignSelf="center" size="small">{props.text}&nbsp;<b>▼</b></Text>
				</Box>
			)}
		</DropButton>
	);
}

export default NavbarDropButton;