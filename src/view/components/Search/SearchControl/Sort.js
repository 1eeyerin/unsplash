import React, { useEffect, useState } from "react";
import { IconSearchFilterActive } from "../../../../icons";

function Sort({ Styled, activeMenu, handleClick, handleActiveMenu, parsed, popup }) {
  const [title, setTitle] = useState("Relevance");
  const [ControlContents, ControlMenu, ControlItem] = Styled;
  const Item = [
    {
      name: "",
      text: "Relevance"
    },
    {
      name: "latest",
      text: "Newest"
    }
  ];

  useEffect(() => {
    switch (parsed.sort) {
      case "latest":
        setTitle("Newest");
        break;
      default:
        setTitle("Relevance");
    }
  }, [parsed.sort]);

  return (
    <ControlContents>
      <button className="selectBtn" name="sort" onClick={handleActiveMenu}>
        Sort by {title}
      </button>
      {(activeMenu.sort || popup) && (
        <ControlMenu>
          <ul>
            {Item.map((item, idx) => (
              <li
                key={idx}
                className={
                  parsed.sort === item.name || (!parsed.sort && item.name === "") ? "active" : ""
                }
              >
                <ControlItem onClick={e => handleClick(e, "sort")} name={item.name}>
                  {(parsed.sort === item.name || (!parsed.sort && item.name === "")) && (
                    <IconSearchFilterActive />
                  )}
                  <span>{item.text}</span>
                </ControlItem>
              </li>
            ))}
          </ul>
        </ControlMenu>
      )}
    </ControlContents>
  );
}

export default Sort;
