import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IconSearchFilterActive } from "../../../../icons";

function Color({ Styled, activeMenu, handleClick, handleActiveMenu, parsed, popup }) {
  const [title, setTitle] = useState("Any Color");
  const [ControlContents, ControlMenu, ControlItem] = Styled;
  const Item = [
    {
      name: "",
      text: "Any Color"
    },
    {
      name: "black_and_white",
      text: "Black and white"
    }
  ];

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
    if (popup) {
      setTitle("Color");
    } else {
      switch (parsed.color) {
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
    }
  }, [parsed.color]);

  return (
    <ControlContents>
      <button className="selectBtn" name="color" onClick={handleActiveMenu}>
        {title}
      </button>
      {(activeMenu.color || popup) && (
        <ControlMenu style={{ minWidth: "168px" }}>
          <ul>
            {Item.map((item, idx) => (
              <li
                key={idx}
                className={
                  parsed.color === item.name || (!parsed.color && item.name === "") ? "active" : ""
                }
              >
                <ControlItem onClick={e => handleClick(e, "color")} name={item.name}>
                  {(parsed.color === item.name || (!parsed.color && item.name === "")) && (
                    <IconSearchFilterActive />
                  )}
                  <span>{item.text}</span>
                </ControlItem>
              </li>
            ))}
            <li>
              <ControlItem as="div">Tones</ControlItem>
              <ColorBox>
                {colors.map((item, idx) => (
                  <ColorItem
                    onClick={e => handleClick(e, "color")}
                    className={item}
                    name={item}
                    key={idx}
                  >
                    {parsed.color === item ? <IconSearchFilterActive /> : ""}
                  </ColorItem>
                ))}
              </ColorBox>
            </li>
          </ul>
        </ControlMenu>
      )}
    </ControlContents>
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
  padding: 0;

  svg {
    width: 100%;
    height: 100%;
  }

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

    svg {
      fill: #fff;
    }
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

    svg {
      fill: #fff;
    }
  }

  &.magenta {
    background-color: #ab149e;

    svg {
      fill: #fff;
    }
  }

  &.green {
    background-color: #a4dc03;
  }

  &.teal {
    background-color: #67ccca;
  }

  &.blue {
    background-color: #009ce0;

    svg {
      fill: #fff;
    }
  }
`;

export default Color;
