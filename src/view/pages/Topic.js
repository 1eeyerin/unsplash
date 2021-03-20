import React from "react";
import styled from "styled-components";
import TopicContainer from "../containers/TopicContainer";
import PropTypes from "prop-types";

function Topic(props) {
  return (
    <Container>
      <TopicContainer {...props} />
    </Container>
  );
}

Topic.propTypes = {
  query: PropTypes.string
};

const Container = styled.div`
  padding-bottom: 85px;
`;

export default Topic;
