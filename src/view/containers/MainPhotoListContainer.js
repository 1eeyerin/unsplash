import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { photosActions } from "../../redux/ActionCreators";
import { useSelector } from "react-redux";
import { ContentContainer } from "../../styled/Layout";
import InfiniteScroll from "../components/InfiniteScroll";
import PropTypes from "prop-types";
import MasonryPhotos from "../components/Photos/MasonryPhotos";

function MainPhotoListContainer() {
  const [page, setPage] = useState(1);
  const { list, isLoading } = useSelector(state => state.photos);

  useEffect(() => {
    photosActions.getPhotos({
      per_page: 30,
      page
    });
  }, [page]);

  const getMoreItems = () => {
    if (3 <= page) return;
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Container>
      <ContentContainer>
        <InfiniteScroll getMoreItems={getMoreItems} isLoading={isLoading}>
          <MasonryPhotos data={list} />
        </InfiniteScroll>
      </ContentContainer>
    </Container>
  );
}

MainPhotoListContainer.propTypes = {
  list: PropTypes.array,
  page: PropTypes.number,
  isLoading: PropTypes.bool,
  getMoreItems: PropTypes.func
};

const Container = styled.div`
  padding: 48px 0 85px;
`;

export default MainPhotoListContainer;
