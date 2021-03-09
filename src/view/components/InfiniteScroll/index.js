import React, {useEffect} from "react";
import styled from "styled-components";
import {useOnViewport} from "../../../hooks/useOnViewport";

function InfiniteScroll({children, getMoreItems = () => {}, isLoading}) {

    const [ref, inView] = useOnViewport({
        rootMargin: "300px",
    }, isLoading);

    useEffect(() => {
        inView && getMoreItems();
    }, [inView]);

    return (
        <>
            {children}
            <Sentinel ref={ref}/>
        </>
    )
}

const Sentinel = styled.div`
  position: absolute;
  bottom: 0;
  height: 50px;
`

export default InfiniteScroll;