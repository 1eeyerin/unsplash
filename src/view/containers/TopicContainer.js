import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { topicsActions } from "../../redux/ActionCreators";
import PhotoList from "../components/Photos/PhotoList";
import { ContentContainer } from "../../styled/Layout";
import { useSelector } from "react-redux";
import InfiniteScroll from "../components/InfiniteScroll";
import PropTypes from "prop-types";
import TopicInfoBox from "../components/Topic/InfoBox";

function TopicContainer({ match }) {
  const query = match.params.query;
  const { topicData, isLoading, list } = useSelector(state => state.topics);
  const [page, setPage] = useState(1);

  useEffect(() => {
    topicsActions.deleteHistory();
  }, [query]);

  useEffect(() => {
    topicsActions.getTopicPhoto([
      {
        per_page: 5,
        page
      },
      query
    ]);
  }, [query, page]);

  const getMoreItems = () => {
    if (8 <= page) return;
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Container>
      <ContentContainer>
        <TopicInfoBox data={list} query={query} />
        <InfiniteScroll getMoreItems={getMoreItems} isLoading={isLoading}>
          <PhotoList data={topicData} />
        </InfiniteScroll>
      </ContentContainer>
    </Container>
  );
}

TopicContainer.propTypes = {
  match: PropTypes.object,
  query: PropTypes.string,
  page: PropTypes.number,
  getMoreItems: PropTypes.func,
  isLoading: PropTypes.bool,
  topicData: PropTypes.array
};

const Container = styled.div``;

export default TopicContainer;