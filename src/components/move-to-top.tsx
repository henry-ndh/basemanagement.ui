import { MoveTop } from '@/based/config/SVGIcon';
import React, { useState, useEffect } from 'react';
type Props = React.ComponentPropsWithoutRef<'button'> & {
  top?: number;
  smooth?: boolean;
  svgPath?: string;
  viewBox?: string;
  component?: any;
  width?: string;
  height?: string;
};

function scrollToTop(smooth: boolean = false) {
  if (smooth) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } else {
    document.documentElement.scrollTop = 0;
  }
}

const ScrollToTop = ({ top = 20, className = '', color = 'black', smooth = false, component = '', ...props }: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(document.documentElement.scrollTop >= top);
    };
    onScroll();
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [top]);

  return (
    <>
      {visible && (
        <button
          className={`scroll-to-top ${className} flex justify-center items-center rounded-full`}
          onClick={() => scrollToTop}
          aria-label="Scroll to top"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        >
          {component || <MoveTop />}
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
