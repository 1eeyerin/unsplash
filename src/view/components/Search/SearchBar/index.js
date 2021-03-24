import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { font } from "../../../../styled/Font";
import SearchMenu from "./SearchMenu";
import { useWindowDimensions } from "../../../../hooks/useWindowDimensions";
import { breakPoint } from "../../../../styled/Responsive";
import { IconSearchFilterMenu } from "../../../../icons";
import SearchControl from "../SearchControl";

function SearchBar({ location, total, handleFilterPopup }) {
  const { width: windowWidth } = useWindowDimensions();

  return (
    <Container>
      <SearchMenu location={location} total={total} />
      {windowWidth >= breakPoint.MD ? (
        <SearchControl location={location} />
      ) : (
        <FilterButton onClick={handleFilterPopup}>
          <IconSearchFilterMenu />
        </FilterButton>
      )}
    </Container>
  );
}

SearchBar.propTypes = {
  location: PropTypes.object,
  total: PropTypes.number,
  handleFilterPopup: PropTypes.func
};

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

const FilterButton = styled.button`
  border: 0;
  background: 0;
  outline: 0;

  svg {
    width: 18px;
    height: 18px;
    fill: #767676;
  }
`;

export default SearchBar;
