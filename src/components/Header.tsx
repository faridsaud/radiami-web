import React, { useState } from "react";
import styled from "styled-components";
import BurgerIcon from "../assets/icons/burger.svg";
import FacebookIcon from "../assets/icons/facebook.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import Drawer, { MenuItem } from "./Drawer";

type HeaderProps = {};

const MENU_ITEMS: MenuItem[] = [
  {
    label: "Inicio",
    link: "/",
  },
  {
    label: "Nosotros",
    subMenuItems: [
      {
        label: "Quienes Somos",
        link: "/us",
      },
      {
        label: "Equipo",
        link: "/team",
      },
      {
        label: "Codigo Deontologico",
        link: "/ethics-code",
      },
      {
        label: "Rendicion de Cuentas",
        link: "/accountability",
      },
    ],
  },
  {
    label: "Noticias",
    link: "/news",
  },
  {
    label: "Contactanos",
    link: "/contact-us",
  },
];

const Header = (props: HeaderProps) => {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
  return (
    <>
      <Container>
        <Button
          onClick={() => setDrawerOpen((prevOpen) => setDrawerOpen(!prevOpen))}
        >
          <Icon src={BurgerIcon} alt={"Burger"} />
        </Button>
        <LinksContainer>
          <Link href={"/"} target={"_blank"}>
            <Icon src={FacebookIcon} alt={"Facebook"} />
          </Link>
          <Link href={"/"} target={"_blank"}>
            <Icon src={InstagramIcon} alt={"Instagram"} />
          </Link>
          <Link href={"/"} target={"_blank"}>
            <Icon src={TwitterIcon} alt={"Twitter"} />
          </Link>
        </LinksContainer>
      </Container>
      <Drawer
        menuItems={MENU_ITEMS}
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
};

const Container = styled.header`
  width: 100%;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  top: 0;
  @media (min-width: 768px) {
    padding: 25px 73px;
  }
`;

const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 20px;
  @media (min-width: 768px) {
    width: 30px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 27px;
  @media (min-width: 768px) {
    gap: 31px;
  }
`;

const Link = styled.a`
  text-decoration: none;
`;

export default Header;
