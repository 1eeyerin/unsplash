import React, {useEffect} from "react";
import styled from "styled-components";
import {topicsActions} from "../../redux/ActionCreators";
import PhotoList from "../components/Photos/PhotoList";
import {ContentContainer} from "../components/Layout/Layout.Styled";
import {useSelector} from "react-redux";

function TopicPhotoListContainer({match}){
    const query = match.params.query;
    const {topics} = useSelector(state => state);

    useEffect(() => {
        getTopic();
    }, [query]);

    const getTopic = () => {
        topicsActions.getTopicPhoto([
            {
                per_page: 5,
            },
            query,
        ]);
    }

    return(
        <Container>
            <ContentContainer>
                <PhotoList data={topics.topicData}/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`

`

export default TopicPhotoListContainer;