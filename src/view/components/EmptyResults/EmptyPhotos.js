import React from "react";
import styled from "styled-components";
import { ImageEmptyPhotos } from "../../../images";

function EmptyPhotos() {
  return (
    <Container>
      <ImageEmptyPhotos />
    </Container>
  );
}

const Container = styled.div`
  img {
    display: block;
    max-width: 300px;
    min-height: 225px;
    margin: 0 auto;
  }
`;

export default EmptyPhotos;
