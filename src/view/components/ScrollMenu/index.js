import React, { useEffect, useRef } from "react";
import { useScrollMenu } from "../../../hooks/useScrollMenu";
import cn from "classnames";
import { SlideBtnNext, SlideBtnPrev } from "../../../icons";
import { SlideContainer, SlideList } from "../../../styled/SlideMenu";
import _ from "lodash";

function ScrollMenu({ data, children }) {
  const ref = useRef();

  const { onScroll, onClickLeft, onClickRight, className, scrollLeft, maxScroll } = useScrollMenu({
    ref
  });

  useEffect(() => {
    !_.isEmpty(data) && ref?.current.dispatchEvent(new Event("scroll"));
  }, [data, ref.current?.scrollWidth]);

  return (
    <SlideContainer className={cn(className)}>
      {scrollLeft > 0 && (
        <button type="button" className="btn prev" onClick={onClickLeft}>
          <SlideBtnPrev />
          <span>prev button</span>
        </button>
      )}

      <SlideList ref={ref} onScroll={onScroll}>
        {children}
      </SlideList>

      {scrollLeft < maxScroll && (
        <button type="button" className="btn next" onClick={onClickRight}>
          <SlideBtnNext />
          <span>next button</span>
        </button>
      )}
    </SlideContainer>
  );
}

export default ScrollMenu;
