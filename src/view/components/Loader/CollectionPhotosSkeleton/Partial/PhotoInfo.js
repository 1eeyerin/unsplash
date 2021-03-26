import React from "react";
import styled from "styled-components";

function PhotoInfo({ Thumb }) {
  return (
    <Info>
      <Thumb />
      <Thumb />
    </Info>
  );
}

const Info = styled.div`
  display: flex;
  margin-bottom: 14px;

  > span {
    width: 50px;

    + span {
      width: calc(100% - 60px);
      margin-left: 10px;
    }
  }
`;

export default PhotoInfo;
