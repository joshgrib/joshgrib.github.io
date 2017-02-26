import React from 'react';

export default class AppHeader extends React.Component {
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
AppHeader.propTypes = {
    mainText: React.PropTypes.string.isRequired
}
