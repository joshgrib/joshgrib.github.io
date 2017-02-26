import React from 'react';

export default class JoshHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <header>{this.props.mainText}</header>
        );
    }
}
JoshHeader.propTypes = {
    mainText: React.PropTypes.string.isRequired
}
