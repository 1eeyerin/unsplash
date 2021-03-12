import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

function FixMenu({location}) {

    return (
        <Container>
            <List>
                <li className={location.pathname === "/"? "active" : ""}><Link to="/"><span>Editorial</span></Link></li>
                <li><Link to="/"><span>Following</span></Link></li>
            </List>
        </Container>
    )
}

const Container = styled.div`
  padding: 0 20px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0px;
    width: 1px;
    height: 32px;
    margin-top: -16px;
    background: #d1d1d1;
  }
`
const List = styled.ul`
  height: 56px;
  display: flex;
  font-size: 14px;
  margin-left: -32px;

  li {
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 32px;
    
    &.active a {
      box-shadow: inset 0 -2px #111;
    }

    a {
      text-decoration: none;
      color: #727272;
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
`

export default FixMenu;