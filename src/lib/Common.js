import { breakPoint } from "../styled/Responsive";

export const recomposePhotos = (items, windowWidth) => {
  let count = windowWidth >= breakPoint.MD ? 3 : 2;
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

export const imagePreload = (images = []) => {
  for (let i = 0; i < images.length; i++) {
    let img = new Image();
    img.src = images[i];
  }
};

export const isActivePath = ({ exact, startsWith, pathname }) => {
  const length = [];
  if (exact) {
    length[0] = exact.some(i => pathname === i);
  }
  if (startsWith) {
    length[1] = startsWith.some(i => pathname.startsWith(i));
  }

  return length[0] || length[1];
};

export const splitLastPath = (startsWith, pathname) => {
  return pathname.startsWith(startsWith) ? pathname.split("/").pop() : "";
};
