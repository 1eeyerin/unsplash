import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { IconTopicList } from "../../../../icons";

function TopicInfo({ data }) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const setDateTime = () => {
    const d = new Date(data?.ends_at);

    const set = {
      mon: monthNames[d.getMonth()],
      d: d.getDate(),
      y: d.getFullYear(),
      h: d.getHours(),
      m: d.getMinutes()
    };

    set.ap = set.h >= 12 ? "PM" : "AM";
    let h = set.h % 12;
    set.h = h || 12;
    if (set.m < 10) set.m = `0${set.m}`;

    return `${set.mon} ${set.d}, ${set.y} at ${set.h}:${set.m} ${set.ap}.`;
  };

  return (
    <Container>
      <InfoBox>
        <dl>
          <dt>
            <IconTopicList item={"Status"} />
            <span>Status</span>
          </dt>
          <dd>{data?.status}</dd>
          <dt>
            <IconTopicList item={"Curator"} />
            <span>Curator</span>
          </dt>
          <dd>
            <Profile_Image>
              <img src={data?.owners[0]?.profile_image?.small} alt="" />
            </Profile_Image>
          </dd>
          <dt>
            <IconTopicList item={"Contributions"} />
            <span>Contributions</span>
          </dt>
          <dd>
            <TotalNum>{data?.total_photos}</TotalNum>
          </dd>
        </dl>
      </InfoBox>
      <Button>
        Submit to <strong>{data?.title}</strong>
      </Button>
      <DateTime>
        {data?.ends_at && (
          <>
            <IconTopicList item={"Time"} />
            <span>Open to contributions until {data?.ends_at && setDateTime()}</span>
          </>
        )}
      </DateTime>
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
    }),
    ends_at: PropTypes.string
  })
};

const Container = styled.div`
  display: grid;
  row-gap: 16px;
`;

const InfoBox = styled.div`
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  padding: 24px;

  dl {
    display: grid;
    grid-template-columns: max-content 1fr [column-end];
    color: #111;

    > * {
      display: flex;
      align-items: center;
      min-height: 48px;
      border-bottom: 1px solid #eee;
      color: #111;

      &:nth-last-child(1),
      &:nth-last-child(2) {
        border-bottom: 0;
      }
    }

    dt {
      font-size: 14px;
      padding-right: 8px;

      svg {
        fill: #d1d1d1;
        width: 18px;
        height: 18px;
        margin-right: 14px;
      }
    }

    dd {
      justify-content: flex-end;
    }
  }
`;

const Profile_Image = styled.div`
  border-radius: 50%;
  overflow: hidden;
`;
const TotalNum = styled.div`
  font-weight: 500;
`;
const Button = styled.button`
  background: #111;
  color: #fff;
  padding: 0 16px;
  font-size: 15px;
  line-height: 42px;
  border: 0;
  display: block;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 4%);
  transition: all 0.1s ease-in-out;
  text-align: center;
  -webkit-user-select: none;
  user-select: none;
`;

const DateTime = styled.span`
  text-align: center;
  color: #767676;
  font-size: 12px;

  svg {
    fill: #767676;
    width: 14px;
    height: 14px;
    margin-top: -2px;
    vertical-align: middle;
    margin-right: 4px;
  }
`;

export default TopicInfo;
