import React from "react";
import styled from "styled-components";
import DetailInfo from "./DetailInfo";
import RelatedPhotos from "./RelatedPhotos";
import { font } from "../../../styled/Font";
import RelatedCollections from "./RelatedCollections";
import { pxToRem } from "../../../styled/Util";
import PropTypes from "prop-types";

function DetailPhoto({ data }) {
  return (
    <Container>
      <DetailInfo {...data} />
      <Contents>
        <RelatedPhotos data={data?.related_photos} Title={Title} />
        <RelatedCollections data={data?.related_collections} Title={Title} />
      </Contents>
    </Container>
  );
}

DetailInfo.propTypes = {
  data: PropTypes.shape({
    related_photos: PropTypes.object,
    related_collections: PropTypes.object
  })
};

const Container = styled.div``;
const Contents = styled.div`
  max-width: ${pxToRem(1320)};
  margin: 0 auto;
  font-family: ${font.en};
`;
const Title = styled.h2`
  padding-top: 60px;
  padding-bottom: 28px;
  font-size: 18px;
`;

export default DetailPhoto;
