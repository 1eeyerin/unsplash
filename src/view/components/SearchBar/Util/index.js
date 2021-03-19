import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import Orientation from "./Orientation";
import Color from "./Color";
import Sort from "./Sort";
import qs from "qs";
import { navigate } from "../../../../lib/History";

function SearchControl({ location, search }) {
  const [useOrientation, setUseOrientation] = useState("");
  const [useColor, setUseColor] = useState("");
  const [useSort, setUseSort] = useState("");

  useEffect(() => {
    const parsed = qs.parse(search, { ignoreQueryPrefix: true });

    useSort ? (parsed.order_by = useSort) : delete parsed.order_by;
    useOrientation ? (parsed.orientation = useOrientation) : delete parsed.orientation;
    useColor ? (parsed.color = useColor) : delete parsed.color;

    location.search = qs.stringify(parsed);
    navigate(`${location.pathname}?${location.search}`);
  }, [useSort, useOrientation, useColor]);

  const handleClear = () => {
    setUseOrientation("");
    setUseColor("");
    setUseSort("");
  };

  return (
    <Container>
      <Ul>
        {(useOrientation || useColor || useSort) && (
          <Li>
            <StyledMenu>
              <button className="selectBtn" onClick={handleClear}>
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
            useOrientation={useOrientation}
            setUseOrientation={setUseOrientation}
          />
        </Li>
        <Li>
          <Color
            ControlMenu={ControlMenu}
            StyledMenu={StyledMenu}
            Item={Item}
            useColor={useColor}
            setUseColor={setUseColor}
          />
        </Li>
        <Li>
          <Sort
            ControlMenu={ControlMenu}
            StyledMenu={StyledMenu}
            Item={Item}
            useSort={useSort}
            setUseSort={setUseSort}
          />
        </Li>
      </Ul>
    </Container>
  );
}

SearchControl.propTypes = {
  a: PropTypes.shape({
    b: PropTypes.string
  })
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

    &:hover {
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
