import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IconMenu } from "../../../icons";
import { media } from "../../../styled/Responsive";

function Nav() {
  return (
    <Container>
      <List>
        <li>
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>Brands</span>
          </Link>
        </li>
      </List>
      <Button type="button">
        <IconMenu />
      </Button>
    </Container>
  );
}

const Container = styled.div`
  margin-left: 50px;
  display: flex;
  align-items: center;

  ${media.lessThan("sm")`
    margin-left: 0;
  `};
`;
const Button = styled.button`
  padding-left: 32px;
  background: 0;
  border: 0;
  outline: 0;
  cursor: pointer;
`;
const List = styled.ul`
  display: flex;
  font-size: 14px;
  margin-left: -32px;

  ${media.lessThan("sm")`
    display: none;
  `};

  li {
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 32px;

    a {
      text-decoration: none;
      color: #727272;
    }
  }
`;

export default Nav;
