import {Anchor, Box, Text} from "grommet";
import {Instagram, Link, LinkNext, Map, Twitter, UserAdd, Youtube} from "grommet-icons";
import React from "react";

const Footer = () => {
	return (
		<Box
			id="footer"
			direction="row-responsive"
			fill="horizontal"
			pad="xlarge"
			background="acc-8"
			justify="center"
			alignContent="center"
			gap="large"
			border={{
				"color": "acc-5",
				"size": "large",
				"side": "top"
			}}
		>
			<Box width="small">
				<Text className="footer-title" color="acc-6" size="large">
					&copy; 2020<br/><br/>BEM FILKOM UB
				</Text>
				<Text color="acc-6" size="small">Elaborasi Makna</Text>
				<br/>
				<Text color="acc-6" size="small">
					Made with <Text color="acc-6">&#x2764;&#xFE0F;</Text> by Biro Pengembangan Informasi & Teknologi
				</Text>
			</Box>
			<Box
				justify="start"
				align="start"
				width="small"
			>
				<Text className="footer-title" color="acc-6" size="large"><Link/> Tautan</Text><br/>
				<Anchor
					href="http://filkom.ub.ac.id/" label="FILKOM UB"
					icon={<LinkNext/>} target="_blank"
				/>
				{/*<Anchor*/}
				{/*	color="light-6" href="https://bemfilkom.ub.ac.id/filkompedia" label="Filkompedia" icon={<Globe/>}*/}
				{/*	target="_blank"*/}
				{/*/>*/}
				{/*<Anchor*/}
				{/*	color="light-6" href="https://bemfilkom.ub.ac.id/apps/siperat" label="SIPERAT" icon={<Globe/>}*/}
				{/*	target="_blank"*/}
				{/*/>*/}
			</Box>
			<Box
				justify="start"
				align="start"
				width="small"
			>
				<Text className="footer-title" color="acc-6" size="large"><UserAdd/> Ikuti kami</Text><br/>
				<Anchor
					href="https://www.instagram.com/bemfilkomub/" label="@bemfilkomub"
					icon={<Instagram/>} target="_blank"
				/>
				<Anchor
					href="line://ti/p/@bemfilkomub" label="@bemfilkomub" target="_blank"
					icon={<img src="/assets/linelogo.png" className="acc-6 whitify" style={{"width": 24}} alt="LINE"/>}
				/>
				<Anchor
					href="https://twitter.com/BEMFILKOMUB" label="@BEMFILKOMUB" icon={<Twitter/>}
					target="_blank"
				/>
				<Anchor
					href="https://www.youtube.com/channel/UCLAmrHwP0hvOjPGHacMThZQ"
					label="BEM FILKOM UB" icon={<Youtube/>} target="_blank"
				/>
			</Box>
			<Box width="small">
				<Text className="footer-title" color="acc-6" size="large"><Map/> Sekretariat</Text><br/>
				<Text color="acc-6" size="small">
					Gedung C1.2 Fakultas Ilmu
					Komputer Universitas Brawijaya<br/><br/>
					Jalan Veteran Nomor 8, Lowokwaru,
					Malang, Jawa Timur 65145
				</Text>
			</Box>
		</Box>
	);
};

export default Footer;