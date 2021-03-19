import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { font } from "../../../styled/Font";
import SearchMenu from "./SearchMenu";
import SearchControl from "./Util";
import { splitLastPath } from "../../../lib/Common";

function SearchBar({ location, search }) {
  const splitPath = splitLastPath("/s/", location?.pathname);

  return (
    <Container>
      <SearchMenu pathname={splitPath} location={location} />
      <SearchControl location={location} search={search} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 15px;
  flex: 1;
  box-shadow: inset 0 -1px #d1d1d1;
  font-family: ${font.en};
`;

SearchBar.propTypes = {
  pathname: PropTypes.string
};

export default SearchBar;
