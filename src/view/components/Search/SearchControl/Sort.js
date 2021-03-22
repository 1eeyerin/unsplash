import React, { useEffect, useState } from "react";
import { IconSearchFilterActive } from "../../../../icons";

function Sort({ Control, ActiveMenu, handleActiveMenu, Styled, popup }) {
  const [title, setTitle] = useState("Relevance");
  const [control, setControl] = Control;
  const [activeMenu, setActiveMenu] = ActiveMenu;
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
    switch (control.sort) {
      case "latest":
        setTitle("Newest");
        break;
      default:
        setTitle("Relevance");
    }
  }, [control.sort]);

  const handleClick = e => {
    let newObj = { ...control };
    newObj.sort = e.currentTarget.name;
    setControl(newObj);
    setActiveMenu();
  };

  return (
    <ControlContents>
      <button className="selectBtn" name="sort" onClick={handleActiveMenu}>
        Sort by {title}
      </button>
      {(activeMenu.sort || popup) && (
        <ControlMenu>
          <ul>
            {Item.map((i, idx) => (
              <li key={idx}>
                <ControlItem onClick={handleClick} name={i.name}>
                  {control.sort === i.name ? <IconSearchFilterActive /> : ""}
                  <span>{i.text}</span>
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
