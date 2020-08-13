import React  from "react";
import {Box, Heading, Image} from "grommet";

const ComingSoon = () => {
	return (
		<>
			<Box
				direction="row-responsive"
				height={{"min": "small"}}
				alignContent="center"
				justify="center"
				fill
			>
				<Box basis="1/3" justify="center" align="center" background="accent-3" pad="medium">
					<Image style={{"maxWidth": "250px"}} fill fit="contain" src="/assets/logotext.png"/>
				</Box>
				<Box basis="2/3" justify="center" align="center" pad="large" background="accent-2">
					<Heading textAlign="center" level="1" margin="small">COMING SOON</Heading>
					<Heading size="small" level="2" margin="small">Website BEM FILKOM 2020</Heading>
				</Box>
			</Box>
		</>
	);
};
export default ComingSoon;
