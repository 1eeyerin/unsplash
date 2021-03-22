import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Color({
  ControlMenu,
  StyledMenu,
  Item,
  control,
  setControl,
  activeMenu,
  setActiveMenu,
  handleActiveMenu
}) {
  const [title, setTitle] = useState("");

  const colors = [
    "white",
    "black",
    "yellow",
    "orange",
    "red",
    "purple",
    "magenta",
    "green",
    "teal",
    "blue"
  ];

  useEffect(() => {
    switch (control.color) {
      case "black_and_white":
        setTitle("Black and white");
        break;
      case "white":
        setTitle("White");
        break;
      case "black":
        setTitle("Black");
        break;
      case "yellow":
        setTitle("Yellow");
        break;
      case "orange":
        setTitle("Orange");
        break;
      case "red":
        setTitle("Red");
        break;
      case "purple":
        setTitle("Purple");
        break;
      case "magenta":
        setTitle("Magenta");
        break;
      case "green":
        setTitle("Green");
        break;
      case "teal":
        setTitle("Teal");
        break;
      case "blue":
        setTitle("Blue");
        break;
      default:
        setTitle("Any Color");
    }
  }, [control.color]);

  const handleClick = e => {
    let newArr = { ...control };
    newArr.color = e.currentTarget.name;
    setControl(newArr);
    setActiveMenu();
  };

  return (
    <StyledMenu>
      <button className="selectBtn" name="color" onClick={handleActiveMenu}>
        {title}
      </button>
      {activeMenu.color && (
        <ControlMenu style={{ minWidth: "168px" }}>
          <ul>
            <li>
              <Item onClick={handleClick} name="">
                Any Color
              </Item>
            </li>
            <li>
              <Item onClick={handleClick} name="black_and_white">
                Black and white
              </Item>
            </li>
            <li>
              <Item as="div">Tones</Item>
              <ColorBox>
                {colors.map((i, idx) => {
                  return <ColorItem onClick={handleClick} className={i} name={i} key={idx} />;
                })}
              </ColorBox>
            </li>
          </ul>
        </ControlMenu>
      )}
    </StyledMenu>
  );
}

const ColorBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  padding: 0px 24px;
  margin: 0 -4px;
`;

const ColorItem = styled.button`
  cursor: pointer;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border-width: 0;
  position: relative;
  margin: 4px;

  &:before {
    opacity: 0;
    content: "";
    z-index: -1;
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background-color: #f5f5f5;
    border-radius: 50%;
    transition: all 0.1s ease-in-out;
  }

  &:hover {
    &:before {
      opacity: 1;
    }
  }

  &:after {
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
    pointer-events: none;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 50%;
  }

  &.white {
    background-color: #fff;
  }

  &.black {
    background-color: #4d4d4d;
  }

  &.yellow {
    background-color: #fcdc00;
  }

  &.orange {
    background-color: #fd9102;
  }

  &.red {
    background-color: #f44e3b;
  }

  &.purple {
    background-color: #7a64ff;
  }

  &.magenta {
    background-color: #ab149e;
  }

  &.green {
    background-color: #a4dc03;
  }

  &.teal {
    background-color: #67ccca;
  }

  &.blue {
    background-color: #009ce0;
  }
`;

export default Color;
