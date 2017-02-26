import React from 'react';

import AppHeader from './AppHeader.jsx';
import AppNav from './AppNav.jsx';
import AppMain from './AppMain.jsx';
import AppFooter from './AppFooter.jsx';

export default class App extends React.Component {
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
            <div id="App">
                <AppHeader
                    mainText="Header"/>
                <AppNav
                    pages={this.state.navPages}
                    currPage={this.state.mainPage}/>
                <AppMain
                    page={this.state.mainPage}/>
                <AppFooter/>
            </div>
        );
    }
}
App.propTypes = {};
