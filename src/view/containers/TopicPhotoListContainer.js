import React, {useEffect} from "react";
import styled from "styled-components";
import {topicsActions} from "../../redux/ActionCreators";
import {URL} from "../../constants/Consts";
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
        topicsActions.getTopicPhoto({
            client_id: URL.API_CLIENT_ID,
            per_page:20,
            query,
        });
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