import React from "react";
import styled from "styled-components";
import SearchBox from "../../SearchBox";

function Visual() {

    return (
        <Container>
            <Contents>
                <SearchBox shape="square"/>
            </Contents>
        </Container>
    )
}

const Container = styled.div`
  height: 560px;
  background: url("https://images.unsplash.com/photo-1607250032501-92e55440df4b?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&dpr=1&auto=format%2Ccompress&fit=crop&w=3799&h=594") no-repeat center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Contents = styled.div`
  max-width: 870px;
  width: 100%;
`

export default Visual;