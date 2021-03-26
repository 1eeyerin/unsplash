import React from "react";
import styled from "styled-components";
import { IconCollections, IconPhotos } from "../../../../icons";
import { Link, matchPath } from "react-router-dom";
import PropTypes from "prop-types";
import qs from "qs";
import { media } from "../../../../styled/Responsive";
import cn from "classnames";

function SearchMenu({ location: { pathname, search }, total: [photosTotal, collectionsTotal] }) {
  const parsed = qs.parse(search, { ignoreQueryPrefix: true });
  const searchQueryString = qs.stringify(parsed);
  const {
    params: { query }
  } = matchPath(pathname, { path: "/s/:category/:query" });
  const Item = [
    {
      name: "photos",
      text: "Photos",
      icon: <IconPhotos />,
      total: photosTotal
    },
    {
      name: "collections",
      text: "Collections",
      icon: <IconCollections />,
      total: collectionsTotal
    }
  ];

  return (
    <Container>
      <Ul>
        {Item.map((item, idx) => (
          <Li className={cn({ active: pathname.startsWith(`/s/${item.name}/`) })} key={idx}>
            <Link to={`/s/${item.name}/${query}?${searchQueryString}`}>
              {item.icon}
              <span>
                {item.text} <em>{item.total ? item.total : ""}</em>
              </span>
            </Link>
          </Li>
        ))}
      </Ul>
    </Container>
  );
}

SearchMenu.propTypes = {
  pathname: PropTypes.string,
  location: PropTypes.object,
  photosTotal: PropTypes.number,
  collectionsTotal: PropTypes.number
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

  ${media.lessThan("sm")`
    padding-left: 24px;
  `};

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

    ${media.lessThan("sm")`
      display: none;
    `};
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

      ${media.lessThan("sm")`
        display: none;
      `};
    }
  }
`;
export default SearchMenu;
