import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { topicsActions } from "../../redux/ActionCreators";
import { useSelector } from "react-redux";
import Lnb from "../components/Lnb";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { isActivePath } from "../../lib/Common";

function HeaderContainer({ location }) {
  const { topics } = useSelector(state => state);

  const activeLnb = isActivePath({
    exact: ["/"],
    startsWith: ["/t/"],
    pathname: location.pathname
  });
  const activeSearchBar = isActivePath({
    startsWith: ["/s/photos/"],
    pathname: location.pathname
  });

  useEffect(() => {
    topicsActions.getTopicList({
      per_page: 20
    });
  }, []);

  return (
    <Container>
      <Header />
      {activeLnb && <Lnb topicNav={topics.list} pathname={location?.pathname} />}
      {activeSearchBar && <SearchBar location={location} search={location?.search} />}
    </Container>
  );
}

HeaderContainer.propTypes = {
  topics: PropTypes.shape({
    list: PropTypes.object,
    location: PropTypes.shape({
      pathname: PropTypes.string
    })
  })
};

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;

export default withRouter(HeaderContainer);
