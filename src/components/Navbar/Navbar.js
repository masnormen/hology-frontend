import React, {useState} from "react";
import {Header, Box, Image, Heading} from "grommet";
import NavbarButton from "./NavbarButton";
import NavbarDropButton from "./NavbarDropButton";

import {Link} from "react-router-dom";

function Navbar() {
	const [isOpened, setIsOpened] = useState(false);
	
	return (
		<Header
			animation="fadeIn"
			id="navbar"
			direction="row-responsive"
			fill="horizontal"
			pad={{horizontal: "xlarge"}}
			background="acc-10"
			align="center"
			alignContent="center"
			justify="center"
			gap="small"
		>
			<Box
				direction="row" width={{min: "xsmall"}} height="xxsmall" align="center" alignContent="center"
				alignSelf="center" className="navbar-logo"
			>
				<Link to="/">
					<Image
						className="navbar-image"
						fit="contain"
						src="/assets/logo.png"
						margin={{"right": "small"}}
					/>
				</Link>
				<Link to="/" style={{"textDecorationLine":"none"}}>
					<Heading className="headingPop navbar-title" style={{"lineHeight":"25px"}} alignSelf="center" color="white">
						BEM FILKOM
					</Heading>
				</Link>
				<NavbarButton
					margin="medium" className="navbar-home-mobile" text={isOpened ? "MENU▲" : "MENU▼"}
					onClick={() => setIsOpened(!isOpened)} isMenu
				/>
			</Box>
			
			<Box
				direction="row-responsive" gap="small" align="center" alignContent="center" alignSelf="center"
				pad="none" margin={{left: "small"}} justify="center"
				className={isOpened ? "navbar-menu opened" : "navbar-menu"}
			>
				<NavbarButton path="/visimisi/" text="Visi & Misi"/>
				<NavbarDropButton highlight text="Kabinet">
					<NavbarButton highlight path="/kabinet/" text="Struktur"/>
					<hr/>
					<NavbarButton path="/kabinet/presiden" text="Presiden"/>
					<NavbarButton path="/kabinet/wakilpresiden" text="Wakil Presiden"/>
					<NavbarButton path="/kabinet/sekpim" text="Sekretaris Pimpinan"/>
					<NavbarButton path="/kabinet/supervisor" text="Supervisor"/>
					<NavbarButton path="/kabinet/psdi" text="PSDI"/>
					<hr/>
					<NavbarButton path="/kabinet/psdm" text="PSDM"/>
					<NavbarButton path="/kabinet/k2p" text="K2P"/>
					<NavbarButton path="/kabinet/perhub" text="Perhub"/>
					<NavbarButton path="/kabinet/sosling" text="Sosling"/>
					<NavbarButton path="/kabinet/kastrat" text="Kastrat"/>
					<NavbarButton path="/kabinet/advokesma" text="Advokesma"/>
					<hr/>
					<NavbarButton path="/kabinet/bismit" text="Bismit"/>
					<NavbarButton path="/kabinet/pit" text="PIT"/>
					<NavbarButton path="/kabinet/adkeu" text="Adkeu"/>
					<NavbarButton path="/kabinet/medinkraf" text="Medinkraf"/>
				</NavbarDropButton>
			</Box>
			<Box
				direction="row-responsive" gap="small" align="center" alignContent="center" alignSelf="center"
				className={isOpened ? "navbar-menu opened" : "navbar-menu"} pad="none" margin="none"
			>
				<NavbarButton extern disabled text="Coming Soon"/>
				<NavbarDropButton disabled text="Coming Soon"/>
			</Box>
		</Header>
	);
}

export default Navbar;