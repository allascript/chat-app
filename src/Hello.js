import React from 'react';
class Hello extends React.Component {
    render(){
        return (
            <div>
                <p>Hello {this.props.name}</p>
                <p>Today I feel {this.props.how}</p>
            </div>
        );
    }
}
export default Hello;
