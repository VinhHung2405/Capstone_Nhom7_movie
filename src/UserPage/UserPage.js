import React from 'react'
import UserPageTablet from './UserPageTablet';
import UserPageMobile from './UserPageMobile';
import UserPageDesktop from './UserPageDesktop';
import { useMediaQuery } from 'react-responsive';

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
export default function UserPage() {
    return(
        <div>
            <Desktop>
                <UserPageDesktop/>
            </Desktop>
            <Tablet>
                <UserPageTablet/>
            </Tablet>
            <Mobile>
                <UserPageMobile/>
            </Mobile>
        </div>
    )
}
