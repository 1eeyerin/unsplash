import React from "react";
import styled from "styled-components";

function PhotoImage({ Thumb }) {
  return (
    <Photo>
      <Box>
        <Image>
          <Thumb />
        </Image>
        <Image>
          <Thumb />
          <Thumb />
        </Image>
      </Box>
    </Photo>
  );
}

const Photo = styled.div`
  height: 0;
  padding-bottom: 70%;
  overflow: hidden;
  position: relative;
  border-radius: 6px;
  margin-bottom: 18px;
`;
const Box = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  > div:nth-child(1) {
    width: 70%;
    position: relative;
  }

  > div:nth-child(2) {
    width: 30%;
    margin-left: 2px;

    > span {
      height: 50%;
    }
  }
`;
const Image = styled.div`
  > span {
    display: block;
    height: 100%;

    + span {
      margin-top: 2px;
    }
  }
`;

export default PhotoImage;
