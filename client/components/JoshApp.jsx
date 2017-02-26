import React from 'react';

import JoshHeader from './JoshHeader.jsx';
import JoshNav from './JoshNav.jsx';
import JoshMain from './JoshMain.jsx';
import JoshFooter from './JoshFooter.jsx';

export default class JoshApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            navPages: ["Home", "About", "Projects", "Writing"],
            mainPage: "Home"
        };
    }
    componentDidMount(){
        console.log('App mounted');
    }
    render(){
        return(
            <div id="JoshApp">
                <JoshHeader
                    mainText="Header"/>
                <JoshNav
                    pages={this.state.navPages}
                    currPage={this.state.mainPage}/>
                <JoshMain
                    page={this.state.mainPage}/>
                <JoshFooter/>
            </div>
        );
    }
}
