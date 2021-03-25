import React from "react";
import InfiniteScroll from "../InfiniteScroll";
import PhotoList from "../Photos/PhotoList";
import EmptyPhotos from "../EmptyResults/EmptyPhotos";

function SearchPhotos({ getMoreItems, isLoading, photos }) {
  return (
    <InfiniteScroll getMoreItems={getMoreItems} isLoading={isLoading}>
      {photos?.total ? <PhotoList data={photos.results} /> : !isLoading && <EmptyPhotos />}
    </InfiniteScroll>
  );
}

export default SearchPhotos;
