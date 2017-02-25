import React from 'react';
import {Container, Row, Col} from 'reactstrap';

import Home from './main/Home.jsx';
import About from './main/About.jsx';

export default class JoshMain extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        var content;
        switch(this.props.page){
            case "Home":
                content = (<Home/>);
                break;
            case "About":
                content = (<About/>);
                break;
            case "Projects":
                content = (<p>Not made yet</p>);
                break;
            case "Writing":
                content = (<p>Not made yet</p>);
                break;
            case "Personal":
                content = (<p>Not made yet</p>);
                break;
            default:
                content = (<p>content switch error at main</p>);
        }
        return(
            <div>{content}</div>
        );
    }
}
JoshMain.propTypes = {
    page: React.PropTypes.string.isRequired
}
