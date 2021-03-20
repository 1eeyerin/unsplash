import React from "react";
import styled from "styled-components";
import TopicAbout from "./TopicAbout";
import TopicInfo from "./TopicInfo";
import { font } from "../../../../styled/Font";

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
`;

export default TopicInfoBox;
