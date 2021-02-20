import React from 'react'
import styled from 'styled-components';
import {IconLogo} from "../../../icons";
import SearchBox from "../SearchBox";
import Nav from "./Nav";

const Header = () => {

    return (
        <Container>
            <Logo><IconLogo/></Logo>
            <SearchBox/>
            <Nav/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  height: 62px;
  align-items: center;
  padding: 0 20px;s
`;
const Logo = styled.div`
    margin-right: 20px;
`

export default Header;