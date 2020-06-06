import React, { useEffect, useRef } from "react";

export function EndlessScroll({
  onReachBottom = () => { },
  isLoading = false,
  hasMore = false,
  children = null,
  threshold = 0.2,
  wrapperClassName = "endless-scroll-wrapper",
  loaderWrapperClassName = "endless-scroll-loader-wrapper",
  loaderClassName = "endless-scroll-loader",
}) {
  const loader = useRef(null);

  useEffect(() => {
    const loadMore = (entries) => {
      const [first] = entries;

      if (!isLoading && hasMore && first.isIntersecting) {
        onReachBottom();
      }
    }

    const options = { threshold: [threshold] };
    const observer = new IntersectionObserver(loadMore, options);

    const loaderCurrent = loader.current;
    if (loaderCurrent) {
      observer.observe(loaderCurrent);
    }

    return () => observer.unobserve(loaderCurrent);
  }, [hasMore, isLoading, onReachBottom, threshold]);

  return (
    <div className={wrapperClassName}>
      {children}
      <div
        className={loaderWrapperClassName}
        style={{ position: "relative" }}
      >
        <div
          ref={loader}
          className={loaderClassName}
          style={{
            bottom: "0px",
            height: "100px",
            left: 0,
            position: "absolute",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
}

export default EndlessScroll;
