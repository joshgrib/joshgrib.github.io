import React from 'react';

import Home from './main/Home.jsx';
import About from './main/About.jsx';
import Projects from './main/Projects.jsx';
import Musings from './main/Musings.jsx';
import Personal from './main/Personal.jsx';

export default class AppMain extends React.Component {
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
                content = (<Projects/>);
                break;
            case "Musings":
                content = (<Musings/>);
                break;
            case "Personal":
                content = (<Personal/>);
                break;
            default:
                content = (<p>content switch error at main</p>);
        }
        return(
            <div>{content}</div>
        );
    }
}
AppMain.propTypes = {
    page: React.PropTypes.string.isRequired
}
