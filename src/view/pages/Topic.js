import React from "react";
import styled from "styled-components";
import TopicPhotoListContainer from "../containers/TopicPhotoListContainer";
import { ContentContainer } from "../../styled/Layout";
import { font } from "../../styled/Font";
import PropTypes from "prop-types";

function Topic(props) {
  const query = props.match.params.query;
  return (
    <Container>
      <ContentContainer>
        <Title>{query}</Title>
      </ContentContainer>
      <TopicPhotoListContainer {...props} />
    </Container>
  );
}

Topic.propTypes = {
  query: PropTypes.string
};

const Container = styled.div`
  padding-bottom: 85px;
`;
const Title = styled.h1`
  padding-top: 60px;
  padding-bottom: 84px;
  font-family: ${font.en};
  font-size: 46px;
  line-height: 1.2;
  font-weight: 700;
`;

export default Topic;
