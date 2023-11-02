import React from 'react'
import { useMediaQuery } from 'react-responsive';
import TabMovieDesktop from './TabMovieDesktop';
import TabMovieTablet from './TabMovieTablet';
import TabMovieMobile from './TabMovieMobile';

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
};

export default function TabMovie() {
  return (
    <div>
      <Desktop>
        <TabMovieDesktop/>
      </Desktop>
      <Tablet>
        <TabMovieTablet/>
      </Tablet>
      <Mobile>
        <TabMovieMobile/>
      </Mobile>
    </div>
  )
}
