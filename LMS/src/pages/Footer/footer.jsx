import React from 'react';
import HelpAndSupport from './components/HelpAndSupport';
import QuickLink from './components/QuickLink';


class Footer extends React.Component {
    render() {
        return (
            <>
            <HelpAndSupport />
            <QuickLink />
            </>
        );
    }
}
export default Footer;