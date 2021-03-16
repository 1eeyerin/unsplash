import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { photosActions } from "../../redux/ActionCreators";
import PhotoList from "../components/Photos/PhotoList";
import { useSelector } from "react-redux";
import { ContentContainer } from "../../styled/Layout";
import InfiniteScroll from "../components/InfiniteScroll";
import PropTypes from "prop-types";

function MainPhotoListContainer() {
  const [page, setPage] = useState(1);
  const { list, isLoading } = useSelector(state => state.photos);
  const getPhotos = () => {
    photosActions.getPhotos({
      per_page: 5,
      page
    });
  };

  useEffect(() => {
    getPhotos();
  }, [page]);

  const getMoreItems = () => {
    if (8 <= page) return;
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Container>
      <ContentContainer>
        <InfiniteScroll getMoreItems={getMoreItems} isLoading={isLoading}>
          <PhotoList data={list} />
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
