import React from "react";
import styled from "styled-components";
import InfiniteScroll from "../InfiniteScroll";
import EmptySearch from "../EmptyResults/EmptySearch";
import CollectionPhotos from "../Photos/CollectionPhotos";
import { media } from "../../../styled/Responsive";

function SearchCollections({ data, getMoreItems, isLoading }) {
  return (
    <Container>
      <InfiniteScroll getMoreItems={getMoreItems} isLoading={isLoading}>
        {data?.total ? (
          <CollectionPhotos data={data} />
        ) : (
          !isLoading && <EmptySearch category={"collections"} />
        )}
      </InfiniteScroll>
    </Container>
  );
}

const Container = styled.div`
  ${CollectionPhotos.selector} {
    ${media.lessThan("sm")`
      padding: 0 12px 85px;
    `};
  }
`;

export default SearchCollections;
