import React, { useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Orientation from "./Orientation";
import Color from "./Color";
import Sort from "./Sort";
import { useOutsideClick } from "../../../../hooks/useOutsideClick";
import { useSearchControl } from "../../../../hooks/useSearchControl";
import { ControlContents, ControlItem, ControlMenu } from "../../../../styled/Search";
import qs from "qs";

function SearchControl({ location: { pathname, search } }) {
  const parsed = qs.parse(search, { ignoreQueryPrefix: true });
  const ref = useRef();
  const {
    initValue,
    activeMenu,
    setActiveMenu,
    handleClick,
    handleClear,
    handleActiveMenu
  } = useSearchControl({ pathname, search, parsed });

  useOutsideClick(ref, () => {
    setActiveMenu(initValue);
  });

  return (
    <Container>
      <ul ref={ref}>
        {(parsed.order_by || parsed.color || parsed.sort) && (
          <li>
            <ControlContents>
              <button className="selectBtn clear" onClick={handleClear}>
                Clear
              </button>
            </ControlContents>
          </li>
        )}
        <li>
          <Orientation
            Styled={[ControlContents, ControlMenu, ControlItem]}
            activeMenu={activeMenu}
            handleClick={handleClick}
            handleActiveMenu={handleActiveMenu}
            parsed={parsed}
          />
        </li>
        <li>
          <Color
            Styled={[ControlContents, ControlMenu, ControlItem]}
            activeMenu={activeMenu}
            handleClick={handleClick}
            handleActiveMenu={handleActiveMenu}
            parsed={parsed}
          />
        </li>
        <li>
          <Sort
            Styled={[ControlContents, ControlMenu, ControlItem]}
            activeMenu={activeMenu}
            handleClick={handleClick}
            handleActiveMenu={handleActiveMenu}
            parsed={parsed}
          />
        </li>
      </ul>
    </Container>
  );
}

SearchControl.propTypes = {
  pathname: PropTypes.string,
  search: PropTypes.string
};

const Container = styled.div`
  display: flex;
  align-items: center;

  > ul {
    display: flex;
    align-items: center;

    > li {
      position: relative;
      z-index: 0;

      + li {
        margin-left: 8px;
      }
    }
  }
`;

export default SearchControl;
