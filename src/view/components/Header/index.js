import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IconLogo } from "../../../icons";
import SearchBox from "../SearchBox";
import Nav from "./Nav";
import { media } from "../../../styled/Responsive";

function Header() {
  return (
    <Container>
      <h1>
        <Logo to={"/"}>
          <IconLogo />
        </Logo>
      </h1>
      <SearchBox shape="round" />
      <Nav />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 62px;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  position: relative;
  z-index: 2;
  background: #fff;

  ${media.lessThan("sm")`
    height: 56px;
    padding: 0 12px;
  `};
`;

const Logo = styled(Link)`
  margin-right: 18px;

  svg {
    width: 32px;
    height: auto;

    ${media.lessThan("sm")`
      width: 26px;
    `};
  }
`;

export default Header;
