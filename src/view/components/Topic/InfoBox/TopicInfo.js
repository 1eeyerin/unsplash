import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function TopicInfo({ data }) {
  return (
    <Container>
      <div>{data?.status}</div>
      <div>
        <img src={data?.owners[0]?.profile_image?.small} alt="" />
      </div>
      <div>{data?.total_photos}</div>
      <Button>
        Submit to <strong>{data?.title}</strong>
      </Button>
      <span>Open to contributions until</span>
    </Container>
  );
}

TopicInfo.propTypes = {
  data: PropTypes.shape({
    status: PropTypes.string,
    total_photos: PropTypes.number,
    owners: PropTypes.array,
    profile_image: PropTypes.shape({
      small: PropTypes.string
    })
  })
};

const Container = styled.div``;

const Button = styled.button``;

export default TopicInfo;
