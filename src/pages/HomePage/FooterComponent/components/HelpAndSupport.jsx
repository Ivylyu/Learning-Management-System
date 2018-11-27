import React from 'react';
import './style.css';

class HelpAndSupport extends React.Component {    
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

        const ContentWithTItle = ({
            title,
            children,
        }) => (
            <div>
                <span>{title}:</span>
                <><div className="content"> {children}</div></>
            </div>
        )

        return (
            <div className="help-and-support">
            <Section title="HELP AND SUPPORT">
              <p>For users experiencing difficulities using LMS,Please contact technical support.</p>
              <ContentWithTItle title="Administrator">Dawson Wang</ContentWithTItle>
              <ContentWithTItle title="Email"><a href="mailto:sdc009988@outlook.com">sdc009988@outlook.com</a></ContentWithTItle>
              <ContentWithTItle title="Phone">04512353</ContentWithTItle>
            </Section>
            </div>

        );
    }
}
export default HelpAndSupport;