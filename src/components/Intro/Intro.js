import React from 'react'
import { useMediaQuery } from 'react-responsive';
import IntroDesktop from './IntroDesktop';
import IntroMobile from './IntroMobile';
import IntroTablet from './IntroTablet';

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

export default function Intro() {
  return (
    <div>
      <Desktop>
        <IntroDesktop/>
      </Desktop>
      <Mobile>
        <IntroMobile/>
      </Mobile>
      <Tablet>
        <IntroTablet/>
      </Tablet>
    </div>
  )
}
