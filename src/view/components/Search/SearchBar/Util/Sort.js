import React, { useEffect, useState } from "react";

function Sort({
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
    <StyledMenu>
      <button className="selectBtn" name="sort" onClick={handleActiveMenu}>
        Sort by {title}
      </button>
      {activeMenu.sort && (
        <ControlMenu>
          <ul>
            <li>
              <Item onClick={handleClick} name="">
                <span>Relevance</span>
              </Item>
            </li>
            <li>
              <Item onClick={handleClick} name="latest">
                <span>Newest</span>
              </Item>
            </li>
          </ul>
        </ControlMenu>
      )}
    </StyledMenu>
  );
}

export default Sort;
