import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Orientation({
  ControlMenu,
  StyledMenu,
  Item,
  control,
  setControl,
  activeMenu,
  setActiveMenu,
  handleActiveMenu
}) {
  const [title, setTitle] = useState("Any orientation");

  useEffect(() => {
    switch (control.orientation) {
      case "landscape":
        setTitle("Landscape");
        break;
      case "portrait":
        setTitle("Portrait");
        break;
      case "squarish":
        setTitle("Square");
        break;
      default:
        setTitle("Any orientation");
    }
  }, [control.orientation]);

  const handleClick = e => {
    let newArr = { ...control };
    newArr.orientation = e.currentTarget.name;
    setControl(newArr);
    setActiveMenu();
  };

  return (
    <StyledMenu>
      <button className="selectBtn" name="orientation" onClick={handleActiveMenu}>
        {title}
      </button>
      {activeMenu.orientation && (
        <ControlMenu style={{ minWidth: "180px" }}>
          <List>
            <li>
              <Item onClick={handleClick} title="">
                Any orientation
              </Item>
            </li>
            <li>
              <Item onClick={handleClick} name="landscape">
                <Icon className="landscape" />
                <span>Landscape</span>
              </Item>
            </li>
            <li>
              <Item onClick={handleClick} name="portrait">
                <Icon className="icon portrait" />
                <span>Portrait</span>
              </Item>
            </li>
            <li>
              <Item onClick={handleClick} name="squarish">
                <Icon className="icon square" />
                <span>Square</span>
              </Item>
            </li>
          </List>
        </ControlMenu>
      )}
    </StyledMenu>
  );
}

const List = styled.ul`
  li {
    display: flex;
    align-items: center;

    button {
      display: flex;
      align-items: center;
      flex: 1;
    }
  }
`;

const Icon = styled.div`
  width: 18px;
  background: rgb(228, 228, 228);
  border: 1px solid rgb(177, 177, 177);
  box-sizing: border-box;

  &.landscape {
    height: 12px;
    margin: 0px 10px 0px 0px;
  }

  &.portrait {
    height: 12px;
    transform: rotate(90deg);
    margin: 0px 10px 0px 0px;
  }

  &.square {
    height: 18px;
    margin: 0px 10px 0px 0px;
  }
`;

export default Orientation;
