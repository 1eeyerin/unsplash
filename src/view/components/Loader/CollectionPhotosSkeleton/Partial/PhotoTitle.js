import React from "react";
import styled from "styled-components";

function PhotoTitle({ Thumb }) {
  return (
    <Title>
      <Thumb />
    </Title>
  );
}

const Title = styled.div`
  width: 120px;
  height: 24px;
  margin-bottom: 12px;
`;

export default PhotoTitle;
