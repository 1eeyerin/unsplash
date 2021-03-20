import React from "react";
import styled from "styled-components";
import TopicAbout from "./TopicAbout";
import TopicInfo from "./TopicInfo";
import { font } from "../../../../styled/Font";
import { media } from "../../../../styled/Responsive";

function TopicInfoBox({ data, query }) {
  const [result] = data?.filter(i => i.slug === query);

  return (
    <Container>
      <TopicAbout data={result} />
      <TopicInfo data={result} />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(3, [col-start] 1fr);
  padding: 60px 0 72px;
  font-family: ${font.en};

  ${media.lessThan("sm")`
    display:block; 
    grid-gap: unset;
    grid-template-columns: unset;
    padding: 48px 12px;  
  `};
`;

export default TopicInfoBox;
