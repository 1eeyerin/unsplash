import React, {useEffect} from "react";
import styled from "styled-components";
import Header from "../components/Header";
import {topicsActions} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";
import Lnb from "../components/Lnb";

function HeaderContainer() {
    const {topics} = useSelector(state => state);

    useEffect(() => {
        topicsActions.getTopicList({
            per_page: 20
        })
    }, [])

    return (
        <Container>
            <Header/>
            <Lnb topicNav={topics.list}/>
        </Container>
    )
}

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`

export default HeaderContainer;