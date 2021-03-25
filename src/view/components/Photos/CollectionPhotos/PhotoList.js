import React from "react";
import styled from "styled-components";
import { media } from "../../../../styled/Responsive";
import PropTypes from "prop-types";
import PhotoCard from "./PhotoCard";
import { font } from "../../../../styled/Font";

function PhotoList({ data }) {
  return (
    <Container>
      <List>
        {data?.results.map((item, idx) => (
          <PhotoCard item={item} idx={idx} />
        ))}
      </List>
    </Container>
  );
}

PhotoList.propTypes = {
  data: PropTypes.shape({
    results: PropTypes.array
  })
};

const Container = styled.div`
  padding: 0 0 85px;
  overflow: hidden;
  font-family: ${font.en};
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -48px -12px 0;

  > li {
    width: 33.3333%;
    padding: 48px 12px 0px;
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

export default PhotoList;
