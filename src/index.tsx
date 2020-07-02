import * as React from "react";
import "./endless-scroll.scss";

export type Props = {
  children: React.ReactNode;
  className?: string;
  hasMore: boolean;
  isLoading: boolean;
  onReachBottom: Function;
  threshold?: number | Array<number>;
};

function EndlessScroll({
  children,
  className = "",
  hasMore,
  isLoading,
  onReachBottom,
  threshold = 0.0,
}: Props) {
  const loader = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const loadMore = (entries: Array<IntersectionObserverEntry>) => {
      const [first] = entries;

      if (!isLoading && hasMore && first.isIntersecting) {
        onReachBottom();
      }
    };

    const options = { threshold: threshold };
    const observer = new IntersectionObserver(loadMore, options);

    const loaderCurrent = loader.current;
    if (loaderCurrent) {
      observer.observe(loaderCurrent);
    }

    return () => {
      if (loaderCurrent) {
        observer.unobserve(loaderCurrent);
      }
    };
  }, [hasMore, isLoading, onReachBottom, threshold]);

  return (
    <div className={`endless-scroll-wrapper ${className}`}>
      {children}
      <div className="endless-scroll-loader-wrapper">
        <div ref={loader} className="endless-scroll-loader" />
      </div>
    </div>
  );
}

export default EndlessScroll;
