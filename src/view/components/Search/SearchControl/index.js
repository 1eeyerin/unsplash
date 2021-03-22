import React, { useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Orientation from "./Orientation";
import Color from "./Color";
import Sort from "./Sort";
import { useOutsideClick } from "../../../../hooks/useOutsideClick";
import { withRouter } from "react-router-dom";
import { useSearchControl } from "../../../../hooks/useSearchControl";
import { ControlContents, ControlItem, ControlMenu } from "../../../../styled/Search";

function SearchControl({ location, search }) {
  const ref = useRef();
  const {
    initValue,
    control,
    setControl,
    activeMenu,
    setActiveMenu,
    handleActiveMenu,
    handleClear
  } = useSearchControl({ location, search });

  useOutsideClick(ref, () => {
    setActiveMenu(initValue[1]);
  });

  return (
    <Container>
      <ul ref={ref}>
        {(control.orientation || control.color || control.sort) && (
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
            Control={[control, setControl]}
            ActiveMenu={[activeMenu, () => setActiveMenu(initValue[1])]}
            handleActiveMenu={handleActiveMenu}
            Styled={[ControlContents, ControlMenu, ControlItem]}
          />
        </li>
        <li>
          <Color
            Control={[control, setControl]}
            ActiveMenu={[activeMenu, () => setActiveMenu(initValue[1])]}
            handleActiveMenu={handleActiveMenu}
            Styled={[ControlContents, ControlMenu, ControlItem]}
          />
        </li>
        <li>
          <Sort
            Control={[control, setControl]}
            ActiveMenu={[activeMenu, () => setActiveMenu(initValue[1])]}
            handleActiveMenu={handleActiveMenu}
            Styled={[ControlContents, ControlMenu, ControlItem]}
          />
        </li>
      </ul>
    </Container>
  );
}

SearchControl.propTypes = {
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

export default withRouter(SearchControl);
