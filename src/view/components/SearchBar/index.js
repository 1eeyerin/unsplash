import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { font } from "../../../styled/Font";
import SearchMenu from "./SearchMenu";
import SearchControl from "./Util";

function SearchBar({ location, search, total }) {
  return (
    <Container>
      <SearchMenu location={location} total={total} />
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
  location: PropTypes.object,
  search: PropTypes.string,
  total: PropTypes.number
};

export default SearchBar;
