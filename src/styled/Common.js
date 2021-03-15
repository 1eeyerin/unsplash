import styled from "styled-components";
import { font } from "./Font";

export const UserInfo = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const UserBio = styled.div`
  text-align: left;

  .userName {
    font-family: ${font.en};
    color: #111;
    font-size: 15px;
    font-weight: 500;
    display: flex;
    flex: 1;
    line-height: 1.6;
  }

  .userBio {
    font-size: 11px;
    letter-spacing: 0.02em;
    color: #767676;
  }
`;

export const UserImage = styled.div`
  border-radius: 50%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.1);
  margin-right: 8px;
`;
