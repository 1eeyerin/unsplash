import React from "react";
import styled from "styled-components";
import Visual from "../components/Home/Visual";
import MainPhotoListContainer from "../containers/MainPhotoListContainer";

function Home() {
  return (
    <Container>
      <Visual />
      <MainPhotoListContainer />
    </Container>
  );
}

const Container = styled.div``;

export default Home;
