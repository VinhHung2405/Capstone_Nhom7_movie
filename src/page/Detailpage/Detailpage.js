import React from 'react'
import DetailPageDestop from './DetailPageDestop';
import DetailPageTablet from './DetailPageTablet';
import DetailPageMobile from './DetailPageMobile';
import DetailBooking from "./DetailBooking/DetailBooking";
import { useMediaQuery } from "react-responsive";

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
export default function Detailpage() {
  return (
    <div className='list-movie'>
      <Desktop>
        <DetailPageDestop/>
      </Desktop>
      <Tablet>
        <DetailPageTablet/>
      </Tablet>
      <Mobile>
        <DetailPageMobile/>
      </Mobile>
      <DetailBooking/>
    </div>
  )
}
