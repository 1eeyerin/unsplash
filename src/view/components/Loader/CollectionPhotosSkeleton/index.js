import React from "react";
import styled from "styled-components";
import _ from "lodash";
import PropTypes from "prop-types";
import PhotoCard from "./PhotoCard";
import { media } from "../../../../styled/Responsive";

function CollectionPhotosSkeleton() {
  const arr = _.range(30);

  return (
    <Container>
      <List>
        {arr.map(i => (
          <li key={i}>
            <PhotoCard />
          </li>
        ))}
      </List>
    </Container>
  );
}

CollectionPhotosSkeleton.propTypes = {
  arr: PropTypes.array
};

const Container = styled.div`
  padding: 0 0 85px;
  overflow: hidden;
`;
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -48px -12px 0;

  > li {
    width: 33.3333%;
    padding: 48px 12px 0;
    box-sizing: border-box;
    overflow: hidden;

    ${media.lessThan("md")`
      width: 50%;
    `};

    ${media.lessThan("xs")`
      width: 100%;
    `};
  }
`;

export default CollectionPhotosSkeleton;
