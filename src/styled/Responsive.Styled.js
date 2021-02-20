import {generateMedia} from "styled-media-query";

export const breakPoint = {
    LG: 1140,
    MD: 992,
    SM: 768,
    XS: 542,
}

export const media = generateMedia({
    lg: breakPoint.LG + 'px',
    md: breakPoint.MD + 'px',
    sm: breakPoint.SM + 'px',
    xs: breakPoint.XS + 'px',
});
