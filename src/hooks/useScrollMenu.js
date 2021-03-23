import { useEffect, useState } from "react";

export const useScrollMenu = ({ ref }) => {
  const [className, setClassName] = useState("");
  const [scrollLeft, setScrollLeft] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    setClassName("");
    scrollLeft <= 10 && setClassName("prev");
    scrollLeft >= maxScroll - 10 && setClassName("next");
  }, [scrollLeft, maxScroll]);

  const onScroll = e => {
    setScrollLeft(e.target.scrollLeft);
    setMaxScroll(e.target.scrollWidth - e.target.clientWidth);
  };

  const onClickLeft = () => {
    ref.current.scrollLeft = Math.max(scrollLeft - 300, 0);
  };

  const onClickRight = () => {
    ref.current.scrollLeft = Math.min(scrollLeft + 300, maxScroll);
  };

  return { onScroll, onClickLeft, onClickRight, className, scrollLeft, maxScroll, ref };
};
