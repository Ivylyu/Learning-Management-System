import React from 'react';

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
            <Section title="QUICK LINK">
                <a href="">JR Academy</a>
            </Section>
        );
    }
}
export default QuickLink;