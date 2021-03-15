import styled from "styled-components";
import { pxToRem } from "./Util";
import { breakPoint, media } from "./Responsive";

export const ContentContainer = styled.div`
  position: relative;
  max-width: ${pxToRem(1170)};
  margin: 0 auto;
  padding: 0 ${pxToRem(15)};
  ${props =>
    props.full &&
    `
        max-width: 100%;    
    `};

  ${media.lessThan("lg")`
        max-width: ${pxToRem(breakPoint.MD)};   
    `};

  ${media.lessThan("md")`
        max-width: ${pxToRem(breakPoint.SM)};
    `};

  ${media.lessThan("sm")`
        max-width: ${pxToRem(breakPoint.XS)};
    `};

  ${media.lessThan("xs")`
        max-width: 100%;    
    `};
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  cursor: pointer;
  background-color: rgba(0, 0, 0, ${props => props.alpha || 0.6});
`;
