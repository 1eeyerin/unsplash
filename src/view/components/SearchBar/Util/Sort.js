import React, { useEffect, useState } from "react";

function Sort({ ControlMenu, StyledMenu, Item, useSort, setUseSort }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (useSort) {
      case "latest":
        setTitle("Newest");
        break;
      default:
        setTitle("Relevance");
    }
  }, [useSort]);
  return (
    <StyledMenu>
      <button className="selectBtn">Sort by {title}</button>
      <ControlMenu>
        <ul>
          <li>
            <Item onClick={() => setUseSort("")}>Relevance</Item>
          </li>
          <li>
            <Item>
              <span onClick={() => setUseSort("latest")}>Newest</span>
            </Item>
          </li>
        </ul>
      </ControlMenu>
    </StyledMenu>
  );
}

export default Sort;
