import React from "react";
import styled from "styled-components";
import PhotoList from "../Photos/PhotoList";

function RelatedPhotos({ data, Title }) {
  return (
    <Container>
      <Title>Related photos</Title>
      <PhotoList data={data} />
    </Container>
  );
}

const Container = styled.div`
  padding: 0 12px;
`;

export default RelatedPhotos;
