import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CollectionPhotos from "../Photos/CollectionPhotos";

function RelatedCollections({ data, Title }) {
  return (
    <Container>
      <Title>Related collections</Title>
      <CollectionPhotos data={data} />
    </Container>
  );
}

RelatedCollections.propTypes = {
  Title: PropTypes.object
};

const Container = styled.div`
  padding: 0 12px;
`;

export default RelatedCollections;
