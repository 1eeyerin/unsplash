import React from "react";
import styled from "styled-components";
import { IconPhotos } from "../../../../icons";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import qs from "qs";

function SearchMenu({ location: { pathname, search }, total }) {
  const parsed = qs.parse(search, { ignoreQueryPrefix: true });
  const searchQueryString = qs.stringify(parsed);
  return (
    <Container>
      <Ul>
        <Li className={pathname.startsWith("/s/photos/") ? "active" : ""}>
          <Link to={`${pathname}?${searchQueryString}`}>
            <IconPhotos />
            <span>
              Photos <em>{total ? total : ""}</em>
            </span>
          </Link>
        </Li>
      </Ul>
    </Container>
  );
}

SearchMenu.propTypes = {
  pathname: PropTypes.string,
  location: PropTypes.object,
  total: PropTypes.number
};

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
    font-size: 14px;
    position: relative;
  }

  svg {
    width: 18px;
    height: 18px;
    margin-right: 8px;
    fill: #d1d1d1;
    transition: fill 0.1s ease-in-out;
  }

  &:hover svg,
  &.active svg {
    fill: #111;
  }

  &.active a:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: #111;

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
