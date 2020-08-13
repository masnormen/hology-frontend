import React from "react";
import {Anchor, Button} from "grommet";
import {Link} from "react-router-dom";

function RoutedButton(props) {
	if (props.extern) {
		return (
			<Anchor href={props.path}><Button {...props}>{props.children}</Button></Anchor>
		);
	} else {
		if (props.isMenu)
			return (
				<Button {...props}>{props.children}</Button>
			);
		else
			return (
				<Link to={props.path}><Button {...props}>{props.children}</Button></Link>
			);
	}
}

export default RoutedButton;