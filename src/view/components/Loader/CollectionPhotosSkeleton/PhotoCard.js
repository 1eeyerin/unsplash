import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import PhotoImage from "./Partial/PhotoImage";
import PhotoTags from "./Partial/PhotoTags";
import PhotoInfo from "./Partial/PhotoInfo";
import PhotoTitle from "./Partial/PhotoTitle";

function PhotoCard() {
  return (
    <Container>
      <PhotoImage Thumb={Thumb} />
      <PhotoTitle Thumb={Thumb} />
      <PhotoInfo Thumb={Thumb} />
      <PhotoTags Thumb={Thumb} />
    </Container>
  );
}

const Container = styled.div``;

const Thumb = styled(Skeleton)`
  height: 100%;
`;

export default PhotoCard;
