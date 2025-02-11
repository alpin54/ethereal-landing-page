// -- core
import { useEffect, useState } from 'react';

const useWindowScroll = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerOnScroll, setHeaderOnScroll] = useState(false);
  const [hideScrollIndicator, setHideScrollIndicator] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const headerHeight = 73;

      // Check if the window width is less than or equal to 992.98px
      if (window.innerWidth <= 992.98) {
        // Hide scroll indicator based on hero banner height
        const heroBanner = document.querySelector('.hero-banner') as HTMLElement;
        if (heroBanner) {
          const divisor = window.innerWidth <= 991.98 ? 3 : 2;
          if (scrollTop > heroBanner.clientHeight / divisor) {
            setHideScrollIndicator(true);
          } else {
            setHideScrollIndicator(false);
          }
        }

        // Scroll Down
        if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
          document.body.classList.add('scroll-down');
        } else {
          // Scroll Up
          if (scrollTop + window.innerHeight < document.body.scrollHeight) {
            document.body.classList.remove('scroll-down');
            if (scrollTop > headerHeight) {
              setHeaderOnScroll(true);
            } else {
              setHeaderOnScroll(false);
            }
          }
        }

        setLastScrollTop(scrollTop);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    if (hideScrollIndicator) {
      document.body.classList.add('body--hide-scroll-indicator');
    } else {
      document.body.classList.remove('body--hide-scroll-indicator');
    }

    if (headerOnScroll) {
      document.body.classList.add('header-on-scroll');
    } else {
      document.body.classList.remove('header-on-scroll');
    }
  }, [hideScrollIndicator, headerOnScroll]);

  return null;
};

export default useWindowScroll;