import React from 'react';

//Components
import OurServices from './home/OurServices';
import TopFooter from './home/TopFooter';
import BottomFooter from './home/BottomFooter';

const Footer = () => {
    return (
        <footer>
            <OurServices />
            <TopFooter />
            <BottomFooter />
        </footer>
    );
};

export default Footer;