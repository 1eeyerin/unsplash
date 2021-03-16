import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

export const useOnViewport = (options = {}, isLoading = false) => {
  const ref = useRef(null);
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

useOnViewport.propTypes = {
  options: PropTypes.object,
  isLoading: PropTypes.bool
};
