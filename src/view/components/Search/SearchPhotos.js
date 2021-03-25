import React from "react";
import InfiniteScroll from "../InfiniteScroll";
import EmptySearch from "../EmptyResults/EmptySearch";
import MasonryPhotos from "../Photos/MasonryPhotos";

function SearchPhotos({ data, getMoreItems, isLoading }) {
  return (
    <InfiniteScroll getMoreItems={getMoreItems} isLoading={isLoading}>
      {data?.total ? (
        <MasonryPhotos data={data.results} />
      ) : (
        !isLoading && <EmptySearch category={"photos"} />
      )}
    </InfiniteScroll>
  );
}

export default SearchPhotos;
