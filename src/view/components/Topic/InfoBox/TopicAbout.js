import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { media } from "../../../../styled/Responsive";

function TopicAbout({ data }) {
  return (
    <Container>
      <Title>{data?.title}</Title>
      <Description dangerouslySetInnerHTML={{ __html: data?.description }} />
    </Container>
  );
}

TopicAbout.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  })
};

const Container = styled.div`
  grid-column: col-start 1 / span 2;
`;

const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 46px;
  line-height: 1.2;
  font-weight: 700;

  ${media.lessThan("sm")`
      margin-bottom: 16px;
      font-size: 28px;
      line-height: 1.25;
  `};
`;

const Description = styled.p`
  margin-bottom: 24px;
  max-width: 620px;
  font-size: 18px;
  line-height: 1.6;

  ${media.lessThan("sm")`
      margin-bottom: 24px;
      max-width: 620px;
      font-size: 15px;
  `};
`;

export default TopicAbout;
