import React, { useEffect } from "react";
import styled from "styled-components";
import { useOnViewport } from "../../../hooks/useOnViewport";
import PropTypes from "prop-types";

function InfiniteScroll({ children, getMoreItems, isLoading }) {
  const [ref, inView] = useOnViewport(
    {
      rootMargin: "30%"
    },
    isLoading
  );

  useEffect(() => {
    inView && getMoreItems();
  }, [inView]);

  return (
    <>
      {children}
      <Sentinel ref={ref} />
    </>
  );
}

InfiniteScroll.propTypes = {
  children: PropTypes.element.isRequired,
  getMoreItems: PropTypes.func,
  isLoading: PropTypes.bool,
  inView: PropTypes.bool
};

const Sentinel = styled.div`
  position: absolute;
  bottom: 0;
  height: 50px;
`;

export default InfiniteScroll;
