import React from "react";
import styled from "styled-components";
import SearchContainer from "../containers/SearchContainer";

function Search(props) {
  return (
    <Container>
      <SearchContainer {...props} />
    </Container>
  );
}

const Container = styled.div`
  padding-bottom: 85px;
`;

export default Search;
