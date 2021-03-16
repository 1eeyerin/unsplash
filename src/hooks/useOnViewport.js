import { useEffect, useRef, useState } from "react";

export const useOnViewport = (options = {}, isLoading = false) => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (isLoading) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setInView(entry.isIntersecting);
      });
    }, options);

    ref?.current && observer.observe(ref?.current);

    return () => ref?.current && observer.unobserve(ref?.current);
  }, [ref, options, isLoading]);

  return [ref, inView];
};
