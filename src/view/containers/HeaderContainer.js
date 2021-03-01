import React, {useEffect} from "react";
import styled from "styled-components";
import Header from "../components/Header";
import {topicsActions} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";
import Lnb from "../components/Lnb";
import {URL} from "../../constants/Consts";

function HeaderContainer() {
    const {topics} = useSelector(state => state);

    useEffect(() => {
        topicsActions.getTopicList({
            client_id: URL.API_CLIENT_ID,
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

`

export default HeaderContainer;