import React from "react";
import styled from "styled-components";
import { ImageEmptyCollections, ImageEmptyPhotos } from "../../../images";

function EmptySearch({ category }) {
  return (
    <Container>
      {category === "photos" && <ImageEmptyPhotos />}
      {category === "collections" && <ImageEmptyCollections />}
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

export default EmptySearch;
