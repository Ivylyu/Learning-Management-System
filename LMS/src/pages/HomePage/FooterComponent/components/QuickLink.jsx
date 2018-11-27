import React from 'react';
import './style.css';

class QuickLink extends React.Component {
    render() {
        const Section = ({
            title,
            children,
        }) => (
            <div>
            <h2>{title}</h2>
            <>{children}</>
            </div>
        )

        return (
            <div className="quick-link">
            <Section title="QUICK LINK">
                <a href="">JR Academy</a>
            </Section>
            </div>
        );
    }
}
export default QuickLink;