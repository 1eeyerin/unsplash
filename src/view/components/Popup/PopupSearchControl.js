import React from "react";
import styled from "styled-components";
import Orientation from "../Search/SearchControl/Orientation";
import Sort from "../Search/SearchControl/Sort";
import Color from "../Search/SearchControl/Color";
import { useSearchControl } from "../../../hooks/useSearchControl";
import { withRouter } from "react-router-dom";
import { ControlContents, ControlItem, ControlMenu } from "../../../styled/Search";

function PopupSearchControl({ location, search, onClose }) {
  const {
    initValue,
    control,
    setControl,
    activeMenu,
    setActiveMenu,
    handleActiveMenu,
    handleClear
  } = useSearchControl({ location, search });

  const handlePopupClear = async () => {
    await handleClear();
    await onClose();
  };

  return (
    <Container>
      <h3>Filters</h3>
      <ul>
        <li>
          <Sort
            Control={[control, setControl]}
            ActiveMenu={[activeMenu, () => setActiveMenu(initValue[1])]}
            handleActiveMenu={handleActiveMenu}
            Styled={[Contents, Menu, Item]}
            popup={true}
          />
        </li>
        <li>
          <Color
            Control={[control, setControl]}
            ActiveMenu={[activeMenu, () => setActiveMenu(initValue[1])]}
            handleActiveMenu={handleActiveMenu}
            Styled={[Contents, Menu, Item]}
            popup={true}
          />
        </li>
        <li>
          <Orientation
            Control={[control, setControl]}
            ActiveMenu={[activeMenu, () => setActiveMenu(initValue[1])]}
            handleActiveMenu={handleActiveMenu}
            Styled={[Contents, Menu, Item]}
            popup={true}
          />
        </li>
      </ul>
      <ButtonGroup>
        <Button onClick={handlePopupClear}>Clear</Button>
        <Button black onClick={onClose}>
          Close
        </Button>
      </ButtonGroup>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;

  h3 {
    padding: 8px 16px 10px;
    min-height: 48px;
    border-bottom: 1px solid #d1d1d1;
    display: flex;
    align-items: center;
  }

  > ul {
    overflow-y: auto;
    height: calc(100% - 125px);

    > li {
      padding: 8px 4px 16px;

      & + li {
        border-top: 1px solid #d1d1d1;
      }
    }
`;

const Contents = styled(ControlContents)`
  .selectBtn {
    display: block;
    pointer-events: none;
    width: 100%;
    padding: 8px 16px;

    &:after {
      display: none;
    }
  }
`;
const Menu = styled(ControlMenu)`
  position: relative;
  top: 0;
  left: 0;
  right: auto;
  box-shadow: none;
  border-radius: 0;
  border: 0;
  margin-top: 0;

  > ul {
    padding: 0;
  }
`;
const Item = styled(ControlItem)`
  padding: 12px 24px;

  svg {
    top: 11px;
    left: 3px;
  }

  &:hover:not(div) {
    color: inherit;
    background: inherit;
  }
`;

const ButtonGroup = styled.div`
  text-align: center;
  padding: 16px;
  display: grid;
  grid-gap: 16px;
  grid-auto-flow: column;
  border-top: 1px solid #d1d1d1;
`;

const Button = styled.button`
  height: 44px;
  padding: 0 16px;
  font-size: 15px;
  line-height: 42px;
  border: 0;
  border-radius: 4px;
  ${props =>
    props.black
      ? `
    color: #fff;
    background-color: #111;
    `
      : `
    color: #767676;
    background-color: #eee;
    `}
`;

export default withRouter(PopupSearchControl);
