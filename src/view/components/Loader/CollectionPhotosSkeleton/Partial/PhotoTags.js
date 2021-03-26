import React from "react";
import styled from "styled-components";

function PhotoTags({ Thumb }) {
  return (
    <Tags>
      <Thumb />
      <Thumb />
      <Thumb />
    </Tags>
  );
}

const Tags = styled.div`
  display: flex;
  height: 22px;

  > span {
    width: 55px;

    + span {
      margin-left: 8px;
    }
  }
`;

export default PhotoTags;
