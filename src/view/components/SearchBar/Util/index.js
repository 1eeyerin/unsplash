import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import Orientation from "./Orientation";
import Color from "./Color";
import Sort from "./Sort";
import qs from "qs";
import { navigate } from "../../../../lib/History";
import { useOutsideClick } from "../../../../hooks/useOutsideClick";

function SearchControl({ location, search }) {
  const ref = useRef();
  const initValue = [
    { orientation: "", color: "", sort: "" },
    { orientation: false, color: false, sort: false }
  ];
  const [control, setControl] = useState(initValue[0]);
  const [activeMenu, setActiveMenu] = useState(initValue[1]);

  useEffect(() => {
    const parsed = qs.parse(search, { ignoreQueryPrefix: true });
    control.orientation ? (parsed.orientation = control.orientation) : delete parsed.orientation;
    control.color ? (parsed.color = control.color) : delete parsed.color;
    control.sort ? (parsed.order_by = control.sort) : delete parsed.order_by;
    location.search = qs.stringify(parsed);
    navigate(`${location.pathname}?${location.search}`);
  }, [control.orientation, control.color, control.sort]);

  const handleClear = () => {
    setControl(initValue[0]);
    setActiveMenu(initValue[1]);
  };

  useOutsideClick(ref, () => {
    setActiveMenu(initValue[1]);
  });

  const handleActiveMenu = e => {
    let newObj = { ...activeMenu };
    const name = e.currentTarget.name;

    for (const key in newObj) {
      if (key !== name) {
        newObj[key] = false;
      } else {
        newObj[name] = !newObj[name];
      }
    }
    setActiveMenu(newObj);
  };

  return (
    <Container>
      <Ul ref={ref}>
        {(control.orientation || control.color || control.sort) && (
          <Li>
            <StyledMenu>
              <button className="selectBtn clear" onClick={handleClear}>
                Clear
              </button>
            </StyledMenu>
          </Li>
        )}
        <Li>
          <Orientation
            ControlMenu={ControlMenu}
            StyledMenu={StyledMenu}
            Item={Item}
            control={control}
            setControl={setControl}
            activeMenu={activeMenu}
            setActiveMenu={() => setActiveMenu(initValue[1])}
            handleActiveMenu={handleActiveMenu}
          />
        </Li>
        <Li>
          <Color
            ControlMenu={ControlMenu}
            StyledMenu={StyledMenu}
            Item={Item}
            control={control}
            setControl={setControl}
            activeMenu={activeMenu}
            setActiveMenu={() => setActiveMenu(initValue[1])}
            handleActiveMenu={handleActiveMenu}
          />
        </Li>
        <Li>
          <Sort
            ControlMenu={ControlMenu}
            StyledMenu={StyledMenu}
            Item={Item}
            control={control}
            setControl={setControl}
            activeMenu={activeMenu}
            setActiveMenu={() => setActiveMenu(initValue[1])}
            handleActiveMenu={handleActiveMenu}
          />
        </Li>
      </Ul>
    </Container>
  );
}

SearchControl.propTypes = {
  search: PropTypes.string
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
`;

const Li = styled.li`
  position: relative;
  z-index: 0;

  + li {
    margin-left: 8px;
  }
`;

const StyledMenu = styled.div`
  .selectBtn {
    border: 0;
    cursor: pointer;
    text-align: left;
    background-color: #fff;
    -webkit-user-select: none;
    user-select: none;
    padding: 10px;
    font-size: 14px;
    color: #767676;
    white-space: nowrap;
    transition: color 0.1s ease-in-out;

    ¬ &:hover {
      color: #111;

      &:after {
        border-color: #767676 transparent transparent;
      }
    }

    &:after {
      content: "";
      display: inline-block;
      margin-left: 8px;
      position: relative;
      top: 3px;
      border: 5px solid transparent;
      border-top-color: #d1d1d1;
      transition: border 0.1s ease-in-out;
    }

    &.clear:after {
      display: none;
    }
  }
`;

const ControlMenu = styled.div`
  margin-top: 4px;
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 135px;
  box-shadow: 0 8px 16px rgb(0 0 0 / 16%);

  ul {
    padding: 8px 0;

    li {
      color: #767676;
      font-size: 14px;
      text-align: left;
      overflow: hidden;

      button {
        outline: 0;
      }
    }
  }
`;

const Item = styled.button`
  border: 0;
  cursor: pointer;
  background: 0;
  color: inherit;
  font-size: inherit;
  text-align: left;
  outline: 0;
  display: flex;
  width: 100%;
  padding: 8px 24px;

  &:hover:not(div) {
    color: #111;
    background: #f5f5f5;
  }
`;

export default withRouter(SearchControl);
