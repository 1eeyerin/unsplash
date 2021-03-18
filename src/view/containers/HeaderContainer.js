import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { topicsActions } from "../../redux/ActionCreators";
import { useSelector } from "react-redux";
import Lnb from "../components/Lnb";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { isActivePath } from "../../lib/Common";

function HeaderContainer() {
  const { topics } = useSelector(state => state);
  const { pathname } = useLocation();

  const activeLnb = isActivePath({
    exact: ["/"],
    startsWidth: ["/t/"],
    pathname
  });
  const activeSearchBar = isActivePath({
    startsWidth: ["/search/photos/"],
    pathname
  });

  useEffect(() => {
    topicsActions.getTopicList({
      per_page: 20
    });
  }, []);

  return (
    <Container>
      <Header />
      {activeLnb && <Lnb topicNav={topics.list} pathname={pathname} />}
      {activeSearchBar && <SearchBar />}
    </Container>
  );
}

HeaderContainer.propTypes = {
  topics: PropTypes.shape({
    list: PropTypes.object
  })
};

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;

export default HeaderContainer;
