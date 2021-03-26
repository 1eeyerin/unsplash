import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IconSearchFilterActive } from "../../../../icons";
import PropTypes from "prop-types";
import cn from "classnames";

function Orientation({ Styled, activeMenu, handleClick, handleActiveMenu, parsed, popup }) {
  const [title, setTitle] = useState("Any orientation");
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
      switch (parsed.order_by) {
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
  }, [parsed.order_by]);

  return (
    <ControlContents>
      <button className="selectBtn" name="orientation" onClick={handleActiveMenu}>
        {title}
      </button>
      {(activeMenu.orientation || popup) && (
        <ControlMenu style={{ minWidth: "180px" }}>
          <List>
            {Item.map((item, idx) => (
              <li
                key={idx}
                className={cn({
                  active: parsed.order_by === item.name || (!parsed.order_by && item.name === "")
                })}
              >
                <ControlItem onClick={e => handleClick(e, "order_by")} name={item.name}>
                  {(parsed.order_by === item.name || (!parsed.order_by && item.name === "")) && (
                    <IconSearchFilterActive />
                  )}
                  {item.name !== "" ? <Icon className={cn("icon", item.name)} /> : ""}
                  <span>{item.text}</span>
                </ControlItem>
              </li>
            ))}
          </List>
        </ControlMenu>
      )}
    </ControlContents>
  );
}

Orientation.propTypes = {
  parsed: PropTypes.shape({
    order_by: PropTypes.string
  })
};

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
