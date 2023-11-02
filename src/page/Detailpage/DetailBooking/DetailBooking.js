import React, { Component } from 'react'
import DetailBookingDesktop from './DetailBookingDesktop';
import DetailBookingMobile from './DetailBookingMobile';
import DetailBookingTablet from './DetailBookingTablet';
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

export default class DetailBooking extends Component {
  render() {
    return (
      <div>
        <Desktop>
            <DetailBookingDesktop/>
        </Desktop>
        <Mobile>
            <DetailBookingMobile/>
        </Mobile>
        <Tablet>
            <DetailBookingTablet/>
        </Tablet>
      </div>
    )
  }
}
