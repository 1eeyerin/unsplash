import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { searchActions } from "../../redux/ActionCreators";
import PhotoList from "../components/Photos/PhotoList";
import { ContentContainer } from "../../styled/Layout";
import { useSelector } from "react-redux";
import InfiniteScroll from "../components/InfiniteScroll";
import PropTypes from "prop-types";

function SearchPhotoListContainer({ match }) {
  const query = match.params.query;
  const { searchResults, isLoading } = useSelector(state => state.search);
  const [page, setPage] = useState(1);

  const searchPhotos = () => {
    searchActions.searchPhotos({
      query,
      per_page: 5,
      page
    });
  };

  useEffect(() => {
    searchActions.deleteHistory();
  }, [query]);

  useEffect(() => {
    searchPhotos();
  }, [query, page]);

  const getMoreItems = () => {
    if (8 <= page) return;
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Container>
      <ContentContainer>
        <InfiniteScroll getMoreItems={getMoreItems} isLoading={isLoading}>
          <PhotoList data={searchResults.results} />
        </InfiniteScroll>
      </ContentContainer>
    </Container>
  );
}

SearchPhotoListContainer.propTypes = {
  query: PropTypes.string,
  page: PropTypes.number,
  getMoreItems: PropTypes.func,
  isLoading: PropTypes.bool,
  searchResults: PropTypes.shape({
    results: PropTypes.array
  })
};

const Container = styled.div``;

export default SearchPhotoListContainer;
