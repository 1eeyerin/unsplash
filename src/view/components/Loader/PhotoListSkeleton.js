import React from "react";
import styled from "styled-components";
import _ from "lodash";
import PhotoItemSkeleton from "./PhotoItemSkeleton";

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

const Container = styled.div``;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px;
`;
const Col = styled.div`
  padding: 12px;
  width: 33.3333%;
`;

export default PhotoListSkeleton;
