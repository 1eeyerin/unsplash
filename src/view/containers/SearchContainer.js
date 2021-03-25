import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { searchActions } from "../../redux/ActionCreators";
import PhotoList from "../components/Photos/PhotoList";
import { ContentContainer } from "../../styled/Layout";
import { useSelector } from "react-redux";
import InfiniteScroll from "../components/InfiniteScroll";
import PropTypes from "prop-types";
import qs from "qs";
import EmptyPhotos from "../components/EmptyResults/EmptyPhotos";
import SearchKeyword from "../components/Search/SearchKeyword";
import SearchScrollMenu from "../components/Search/SearchScrollMenu";
import { media } from "../../styled/Responsive";

function SearchContainer({
  match: {
    params: { query }
  },
  location
}) {
  const parsed = qs.parse(location.search, { ignoreQueryPrefix: true });
  const {
    searchResults: { photos, related_searches },
    isLoading
  } = useSelector(state => state.search);
  const [page, setPage] = useState(1);

  useEffect(() => {
    searchActions.deleteHistory();
    setPage(1);
  }, [query, location.search]);

  useEffect(() => {
    searchActions.searchPhotos({
      query,
      per_page: 10,
      page,
      ...parsed
    });
  }, [query, page, location.search]);

  const getMoreItems = () => {
    if (4 <= page) return;
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Container>
      <ContentContainer>
        <SearchInfo>
          <SearchKeyword query={query} />
          {related_searches && <SearchScrollMenu data={related_searches} parsed={parsed} />}
        </SearchInfo>
        <InfiniteScroll getMoreItems={getMoreItems} isLoading={isLoading}>
          {photos?.total ? <PhotoList data={photos.results} /> : !isLoading && <EmptyPhotos />}
        </InfiniteScroll>
      </ContentContainer>
    </Container>
  );
}

SearchContainer.propTypes = {
  query: PropTypes.string,
  page: PropTypes.number,
  getMoreItems: PropTypes.func,
  isLoading: PropTypes.bool,
  searchResults: PropTypes.shape({
    photos: PropTypes.shape({
      results: PropTypes.array,
      total: PropTypes.number
    }),
    related_searches: PropTypes.array
  })
};

const Container = styled.div``;
const SearchInfo = styled.div`
  padding: 60px 0 72px;

  ${media.lessThan("sm")`
    padding: 48px 12px;
  `};
`;

export default SearchContainer;
