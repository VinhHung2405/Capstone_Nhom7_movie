import React from 'react'
import { useMediaQuery } from 'react-responsive';
import LoginDesktop from './LoginDesktop';
import LoginTablet from './LoginTablet';
import LoginMobile from './LoginMobile';
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
export default function LoginPage() {
  return (
    <div>
      <Desktop>
        <LoginDesktop/>
      </Desktop>
      <Tablet>
        <LoginTablet/>
      </Tablet>
      <Mobile>
        <LoginMobile/>
      </Mobile>
    </div>
  )
}
