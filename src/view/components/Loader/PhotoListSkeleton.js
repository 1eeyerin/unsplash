import React from "react";
import styled from "styled-components";
import _ from "lodash";
import PhotoItemSkeleton from "./PhotoItemSkeleton";
import PropTypes from "prop-types";
import { media } from "../../../styled/Responsive";

function PhotoListSkeleton() {
  const arr = _.range(30);

  return (
    <Container>
      <Row>
        {arr.map(i => (
          <Col key={i}>
            <PhotoItemSkeleton />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

PhotoListSkeleton.propTypes = {
  arr: PropTypes.array
};

const Container = styled.div``;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px;

  ${media.lessThan("xs")`
    margin: -12px -5px;
  `};
`;
const Col = styled.div`
  padding: 12px;
  width: 33.3333%;

  ${media.lessThan("md")`
    width: 50%;
  `};

  ${media.lessThan("xs")`
    padding: 5px;
  `};
`;

export default PhotoListSkeleton;
