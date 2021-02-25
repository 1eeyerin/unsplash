import React, {useEffect} from "react";
import styled from "styled-components";
import {photosActions} from "../../redux/ActionCreators";
import PhotoList from "../components/Photos/PhotoList";
import {useSelector} from "react-redux";
import {ContentContainer} from "../components/Layout/Layout.Styled";

function MainPhotoListContainer() {

    const {list} = useSelector(state => state.photos);

    useEffect(() => {
        getPhotos();
    }, []);

    const getPhotos = () => {
        photosActions.getPhotos({
            client_id: process.env.REACT_APP_CLIENT_ID,
            per_page: 20,
        });
    }

    return (
        <Container>
            <ContentContainer>
                <PhotoList data={list}/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`

`

export default MainPhotoListContainer;