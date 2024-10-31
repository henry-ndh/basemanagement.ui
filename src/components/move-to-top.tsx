import { MoveTop } from '@/based/config/SVGIcon';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ScrollToTopBtn = styled.button<{ visible: boolean }>`
  position: fixed;
  bottom: 100px;
  right: 20px;
  width: 60px;
  height: 60px;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &:hover {
    background-color: #0056b3;
  }
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <ScrollToTopBtn className="bg-blueDark" onClick={scrollToTop} visible={isVisible}>
        <MoveTop />
      </ScrollToTopBtn>
    )
  );
};

export default ScrollToTop;
