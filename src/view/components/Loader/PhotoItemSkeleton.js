import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

function PhotoItemSkeleton() {
  return (
    <Container>
      <Thumb />
    </Container>
  );
}

const Container = styled.div`
  height: 0;
  padding-bottom: 65%;
  position: relative;

  > span {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    width: 100%;
  }
`;
const Thumb = styled(Skeleton)`
  height: 100%;
`;

export default PhotoItemSkeleton;
