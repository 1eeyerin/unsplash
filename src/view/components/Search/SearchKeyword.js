import React from "react";
import styled from "styled-components";
import { font } from "../../../styled/Font";
import { media } from "../../../styled/Responsive";

function SearchKeyword({ query }) {
  return (
    <Container>
      <h2>{query}</h2>
    </Container>
  );
}

const Container = styled.div`
  padding: 60px 0 72px;

  ${media.lessThan("sm")`
    padding: 48px 12px;
  `};

  h2 {
    font-size: 46px;
    line-height: 1.2;
    font-family: ${font.en};
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 16px;

    ${media.lessThan("sm")`
      margin-bottom: 16px;
      font-size: 28px;
      line-height: 1.25;
    `};
  }
`;

export default SearchKeyword;
