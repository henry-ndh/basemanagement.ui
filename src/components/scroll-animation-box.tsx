import styled from 'styled-components';
import { useEffect } from 'react';

interface ScrollAnimationBoxProps {
  className?: string;
  children?: React.ReactNode;
}

const ScrollAnimationBox = ({ children, className }: ScrollAnimationBoxProps) => {
  useEffect(() => {
    const handleScroll = () => {
      const boxScale = document.querySelectorAll('.box_scale');
      const boxTranslateXRightToLeft = document.querySelectorAll('.box_translateX_RightToLeft');
      const boxTranslateXByIndex = document.querySelectorAll('.box_translateX_ByIndex');
      const triggerBottom = (window.innerHeight / 5) * 4;

      boxScale.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          box.classList.add('show');
        } else {
          box.classList.remove('show');
        }
      });

      boxTranslateXRightToLeft.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          box.classList.add('show');
        } else {
          box.classList.remove('show');
        }
      });

      boxTranslateXByIndex.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          box.classList.add('show');
        } else {
          box.classList.remove('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <ScrollAnimationBoxWrapper className={className}>{children}</ScrollAnimationBoxWrapper>;
};

export default ScrollAnimationBox;

const ScrollAnimationBoxWrapper = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;

  // animation scale
  .box_scale {
    transform: scale(0);
    transition: transform 0.7s ease;
  }

  .box_scale.show {
    transform: scale(1);
  }

  // animation translateX RightToLeft

  .box_translateX_RightToLeft {
    transform: translateX(400%);
    transition: transform 0.7s ease;
  }

  .box_translateX_RightToLeft.show {
    transform: translateX(0);
  }

  .box_translateX_ByIndex {
    transform: translateX(400%);
    transition: transform 0.7s ease;
  }

  .box_translateX_ByIndex:nth-of-type(even) {
    transform: translateX(-400%);
  }

  .box_translateX_ByIndex.show {
    transform: translateX(0);
  }
`;
