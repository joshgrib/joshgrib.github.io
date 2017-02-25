import React from 'react';
import {Container, Row, Col} from 'reactstrap';

export default class JoshHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <h1>{this.props.mainText}</h1>
        );
    }
}
JoshHeader.propTypes = {
    mainText: React.PropTypes.string.isRequired
}
