import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {searchActions} from "../../redux/ActionCreators";
import PhotoList from "../components/Photos/PhotoList";
import {ContentContainer} from "../components/Layout/Layout.Styled";
import {useSelector} from "react-redux";
import InfiniteScroll from "../components/InfiniteScroll";

function SearchPhotoListContainer({match}){
    const query = match.params.query;
    const {searchResults, isLoading} = useSelector(state => state.search);
    const [page, setPage] = useState(1);

    const searchPhotos = () => {
        searchActions.searchPhotos({
            query,
            per_page: 5,
            page,
        });
    }

    useEffect(() => {
        searchActions.deleteHistory();
    }, [query]);

    useEffect(() => {
        searchPhotos();
    }, [query, page]);


    const getMoreItems = () => {
        if(8 <= page) return;
        setPage(prevPage => prevPage + 1);
    }

    return(
        <Container>
            <ContentContainer>
                <InfiniteScroll
                    getMoreItems={getMoreItems}
                    isLoading={isLoading}>
                    <PhotoList data={searchResults.results}/>
                </InfiniteScroll>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`

`

export default SearchPhotoListContainer;