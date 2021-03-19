import React from "react";
import styled from "styled-components";
import { IconPhotos } from "../../../icons";
import { Link } from "react-router-dom";

function SearchMenu({ pathname, location }) {
  return (
    <Container>
      <Ul>
        <Li className={pathname.startsWith("/s/photos/") ? "active" : ""}>
          <Link to={`/s/photos/${location}`}>
            <IconPhotos />
            <span>
              Photos <em>5</em>
            </span>
          </Link>
        </Li>
      </Ul>
    </Container>
  );
}

const Container = styled.div``;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  height: 56px;
  margin-left: -32px;
`;
const Li = styled.li`
  padding-left: 32px;
  height: 100%;

  a {
    display: flex;
    align-items: center;
    height: 100%;
    white-space: nowrap;
    text-decoration: none;
  }

  svg {
    width: 18px;
    height: 18px;
    margin-right: 8px;
    fill: #d1d1d1;
    transition: fill 0.1s ease-in-out;
  }

  &:hover svg {
    fill: #111;
  }

  &.active a {
    box-shadow: inset 0 -2px #111;

    svg {
      fill: #111;
    }
  }

  span {
    color: #555;
    font-weight: 500;

    em {
      font-weight: 400;
    }
  }
`;
export default SearchMenu;
