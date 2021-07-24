import React, { memo } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import Collapsible from "react-collapsible";
import CloseIcon from "../assets/icons/close.svg";
import ArrowRight from "../assets/icons/arrow-right.svg";
import ArrowDown from "../assets/icons/arrow-down.svg";
import { toRem } from "../utils/style";

const clientSideWindow =
  typeof window !== "undefined"
    ? window
    : {
        innerWidth: 0,
      };

export type MenuItem = {
  label: string;
  link?: string;
  subMenuItems?: Array<MenuItem>;
};

type DrawerProps = {
  open: boolean;
  menuItems: Array<MenuItem>;
  onClose: () => void;
};

const Drawer = ({ open, menuItems, onClose }: DrawerProps) => {
  const styles = useSpring({
    transform: `translateX(${open ? 0 : -100}%)`,
  });
  return (
    <Container style={styles}>
      <Button onClick={onClose} aria-label={"close"}>
        <Icon src={CloseIcon} alt={"close"} />
      </Button>
      {menuItems?.map((menuItem) => (
        <Collapsible
          key={menuItem.label}
          easing={"ease-in"}
          transitionTime={300}
          triggerDisabled={!menuItem?.subMenuItems?.length}
          trigger={
            <DrawerMenuItem href={menuItem?.link || undefined}>
              {menuItem?.label}
              {menuItem?.subMenuItems?.length ? (
                <Arrow src={ArrowDown} />
              ) : (
                <span />
              )}
            </DrawerMenuItem>
          }
          triggerWhenOpen={
            <DrawerMenuItem style={{ color: "#FFD500" }}>
              {menuItem?.label}
              <Arrow src={ArrowRight} />
            </DrawerMenuItem>
          }
        >
          <DrawerSubMenuItemsContainer>
            {menuItem?.subMenuItems?.map((subMenuItem) => (
              <DrawerSubMenuItem
                key={subMenuItem.label}
                href={subMenuItem?.link || undefined}
              >
                {subMenuItem?.label}
              </DrawerSubMenuItem>
            ))}
          </DrawerSubMenuItemsContainer>
        </Collapsible>
      ))}
    </Container>
  );
};

const Container = styled(animated.div)`
  width: 100vw;
  background: #ffffff;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  z-index: 101;
  padding: 130px 30px;
  gap: 40px;
  overflow-y: auto;
  @media (min-width: 768px) {
    width: 500px;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  border: none;
  background: transparent;
  cursor: pointer;
  @media (min-width: 768px) {
    top: 30px;
    right: 30px;
  }
`;

const Icon = styled.img`
  width: 20px;
  @media (min-width: 768px) {
    width: 30px;
  }
`;

const DrawerMenuItem = styled.a`
  font-weight: 800;
  font-size: ${toRem(34)}rem;
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000000;
  &:hover {
    color: #ffd500;
  }
`;

const DrawerSubMenuItemsContainer = styled.div`
  width: 100%;
  gap: 40px;
  display: flex;
  flex-direction: column;
  padding: 30px 0 0 10px;
`;

const DrawerSubMenuItem = styled.a`
  font-weight: 600;
  font-size: ${toRem(28)}rem;
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  color: #000000;
  &:hover {
    color: #ffd500;
  }
`;

const Arrow = styled.img`
  width: 13px;
  height: 13px;
  object-fit: contain;
`;

export default memo(
  Drawer,
  (a, b) => a.open === b.open && a.menuItems?.length === b.menuItems?.length
);
