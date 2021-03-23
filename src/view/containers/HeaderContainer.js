import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { searchActions, topicsActions } from "../../redux/ActionCreators";
import { useSelector } from "react-redux";
import Lnb from "../components/Lnb";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import SearchBar from "../components/Search/SearchBar";
import { isActivePath } from "../../lib/Common";

function HeaderContainer({ location }) {
  const {
    topics,
    search: {
      searchResults: {
        photos: { total }
      }
    }
  } = useSelector(state => state);

  useEffect(() => {
    topicsActions.getTopicList({
      per_page: 20
    });
  }, []);

  const activeLnb = isActivePath({
    exact: ["/"],
    startsWith: ["/t/"],
    pathname: location.pathname
  });
  const activeSearchBar = isActivePath({
    startsWith: ["/s/photos/"],
    pathname: location.pathname
  });

  const handleFilterPopup = () => {
    searchActions.updateState({
      popupControl: true
    });
  };

  return (
    <Container>
      <Header />
      {activeLnb && <Lnb topicNav={topics.list} pathname={location?.pathname} />}
      {activeSearchBar && (
        <SearchBar
          location={location}
          search={location?.search}
          total={total}
          handleFilterPopup={handleFilterPopup}
        />
      )}
    </Container>
  );
}

HeaderContainer.propTypes = {
  topics: PropTypes.shape({
    list: PropTypes.object
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string
  }),
  total: PropTypes.number
};

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;

export default withRouter(HeaderContainer);
