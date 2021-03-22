import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IconSearchFilterActive } from "../../../../icons";

function Orientation({ Control, ActiveMenu, handleActiveMenu, Styled, popup }) {
  const [title, setTitle] = useState("Any orientation");
  const [control, setControl] = Control;
  const [activeMenu, setActiveMenu] = ActiveMenu;
  const [ControlContents, ControlMenu, ControlItem] = Styled;
  const Item = [
    {
      name: "",
      text: "Any orientation"
    },
    {
      name: "landscape",
      text: "Landscape"
    },
    {
      name: "portrait",
      text: "Portrait"
    },
    {
      name: "squarish",
      text: "Square"
    }
  ];

  useEffect(() => {
    if (popup) {
      setTitle("Orientation");
    } else {
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
    }
  }, [control.orientation]);

  const handleClick = e => {
    let newArr = { ...control };
    newArr.orientation = e.currentTarget.name;
    setControl(newArr);
    setActiveMenu();
  };

  return (
    <ControlContents>
      <button className="selectBtn" name="orientation" onClick={handleActiveMenu}>
        {title}
      </button>
      {(activeMenu.orientation || popup) && (
        <ControlMenu style={{ minWidth: "180px" }}>
          <List>
            {Item.map((i, idx) => (
              <li key={idx}>
                <ControlItem onClick={handleClick} name={i.name}>
                  {control.orientation === i.name ? <IconSearchFilterActive /> : ""}
                  {i.name !== "" ? <Icon className={`icon ${i.name}`} /> : ""}
                  <span>{i.text}</span>
                </ControlItem>
              </li>
            ))}
          </List>
        </ControlMenu>
      )}
    </ControlContents>
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

  &.squarish {
    height: 18px;
    margin: 0px 10px 0px 0px;
  }
`;

export default Orientation;
