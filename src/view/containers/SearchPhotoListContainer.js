import React, {useEffect} from "react";
import styled from "styled-components";
import {searchActions} from "../../redux/ActionCreators";
import {URL} from "../../constants/Consts";
import PhotoList from "../components/Photos/PhotoList";
import {ContentContainer} from "../components/Layout/Layout.Styled";
import {useSelector} from "react-redux";

function SearchPhotoListContainer({match}){
    const query = match.params.query;
    const {searchResults} = useSelector(state => state.search);

    useEffect(() => {
        searchPhotos();
    }, [query]);

    const searchPhotos = () => {
        searchActions.searchPhotos({
            query
        });
    }

    return(
        <Container>
            <ContentContainer>
                <PhotoList data={searchResults.results}/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`

`

export default SearchPhotoListContainer;