import { breakPoint } from "../styled/Responsive";

export const recomposePhotos = (items, windowWidth) => {
  let count = windowWidth >= breakPoint.MD ? 3 : windowWidth >= breakPoint.SM ? 2 : 1;
  let photoGroup = Array.from({ length: count }, () => []);
  let groupHeight = new Array(count).fill(0);

  if (items) {
    for (let i = 0; i < items.length; i++) {
      const width = items[i].width;
      const height = items[i].height;
      const ratioHeight = height / width;

      // 가장 작은 <height>를 가지고 있는 그룹 <idx>에 <item>도 넣고
      // <item>의 <ratioHeight>도 <groupHeight>와 더해주어야 한다.
      const minHeightIndex = groupHeight.indexOf(Math.min(...groupHeight));
      photoGroup[minHeightIndex].push(items[i]);
      groupHeight[minHeightIndex] = groupHeight[minHeightIndex] + ratioHeight;
    }
  }

  return photoGroup;
};

export const scrollMenu = ({
  slideRef,
  scrollLeft,
  setScrollLeft,
  setClassName,
  maxScroll,
  setMaxScroll
}) => {
  const onScroll = e => {
    setScrollLeft(e.target.scrollLeft);
    setMaxScroll(e.target.scrollWidth - e.target.clientWidth);
  };

  const onClickLeft = () => {
    slideRef.current.scrollLeft = Math.max(scrollLeft - 300, 0);
  };

  const onClickRight = () => {
    slideRef.current.scrollLeft = Math.min(scrollLeft + 300, maxScroll);
  };

  const handleClassName = () => {
    setClassName("");
    scrollLeft <= 10 && setClassName("prev");
    scrollLeft >= maxScroll - 10 && setClassName("next");
  };

  return { onScroll, onClickLeft, onClickRight, handleClassName };
};

export const imagePreload = (images = []) => {
  for (let i = 0; i < images.length; i++) {
    let img = new Image();
    img.src = images[i];
  }
};
