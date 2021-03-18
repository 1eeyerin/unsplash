import React from "react";
import styled from "styled-components";
import TopicAbout from "./TopicAbout";
import TopicInfo from "./TopicInfo";

function TopicInfoBox({ data, query }) {
  const [result] = data?.filter(i => i.slug === query);

  return (
    <Container>
      <TopicAbout data={result} />
      <TopicInfo data={result} />
    </Container>
  );
}

const Container = styled.div``;

export default TopicInfoBox;
