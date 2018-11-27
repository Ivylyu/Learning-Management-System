import React from 'react';
import HelpAndSupport from './components/HelpAndSupport';
import QuickLink from './components/QuickLink';
import 'typeface-roboto';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
            <HelpAndSupport />
            <QuickLink />
            </div>
        );
    }
}
export default Footer;