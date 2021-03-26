import React from "react";
import styled from "styled-components";
import _ from "lodash";
import PropTypes from "prop-types";
import { media } from "../../../styled/Responsive";
import Skeleton from "react-loading-skeleton";

function MasonryPhotosSkeleton() {
  const arr = _.range(30);

  return (
    <Container>
      <Row>
        {arr.map(i => (
          <Col key={i}>
            <Thumb />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

MasonryPhotosSkeleton.propTypes = {
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

  > span {
    height: 0;
    padding-bottom: 65%;
    position: relative;
    display: block;
  }
`;

const Thumb = styled(Skeleton)`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export default MasonryPhotosSkeleton;
