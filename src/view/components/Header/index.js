import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {IconLogo} from "../../../icons";
import SearchBox from "../SearchBox";
import Nav from "./Nav";

const Header = () => {
    return (
        <Container>
            <Logo to={"/"}>
                <IconLogo/>
            </Logo>
            <SearchBox shape="round"/>
            <Nav/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  height: 62px;
  align-items: center;
  padding: 0 20px;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  background: #fff;
`;
const Logo = styled(Link)`
  margin-right: 18px;
  svg {
    width: 32px;
    height: auto;
  }
`

export default Header;