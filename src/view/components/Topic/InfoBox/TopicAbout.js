import React from "react";
import styled from "styled-components";
import { font } from "../../../../styled/Font";
import PropTypes from "prop-types";

function TopicAbout({ data }) {
  return (
    <Container>
      <Title>{data?.title}</Title>
      <p>{data?.description}</p>
      <a href="/" target="_blank">
        Check out the color palette here
      </a>
    </Container>
  );
}

TopicAbout.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  })
};

const Container = styled.div``;

const Title = styled.h1`
  padding-top: 60px;
  padding-bottom: 84px;
  font-family: ${font.en};
  font-size: 46px;
  line-height: 1.2;
  font-weight: 700;
`;

export default TopicAbout;
