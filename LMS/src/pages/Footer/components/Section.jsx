import React from 'react';

class Section extends React.Component {  
    render() {
        return (
            <div>
                <h2>{this.props.title}:</h2>
                <>{this.props.children}</>
            </div>
        );
    }
}

export default Section;