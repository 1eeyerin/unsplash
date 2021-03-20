import React from "react";
import styled from "styled-components";
import PhotoList from "../Photos/PhotoList";
import PropTypes from "prop-types";
import { media } from "../../../styled/Responsive";

function RelatedPhotos({ data, Title }) {
  return (
    <Container>
      <Title>Related photos</Title>
      <PhotoList data={data} />
    </Container>
  );
}

RelatedPhotos.propTypes = {
  data: PropTypes.array,
  Title: PropTypes.object
};

const Container = styled.div`
  padding: 0 12px;

  .PhotoCard:nth-child(n + 6) {
    ${media.lessThan("sm")`
      display: none;
    `};
  }
`;

export default RelatedPhotos;
