import React from 'react';

import AppHeader from './AppHeader.jsx';
import AppNav from './AppNav.jsx';
import AppMain from './AppMain.jsx';
import AppFooter from './AppFooter.jsx';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            navPages: ["Home", "About"/*, "Projects", "Writing"*/],
            mainPage: "Home"
        };
        this.changePage = this.changePage.bind(this);
    }
    componentDidMount(){
        console.log('App.jsx mounted');
    }
    changePage(newPage){
      if(this.state.navPages.indexOf(newPage) > -1){
        this.setState({mainPage:newPage});
      }else{
        console.error(`App.jsx: changePage: Bad page change sent '${newPage}'.`)
      }
    }
    render(){
        return(
            <div id="App">
                <AppHeader
                    mainText="Header"/>
                <AppNav
                    pages={this.state.navPages}
                    currPage={this.state.mainPage}
                    changeNavPage={this.changePage}/>
                <AppMain
                    page={this.state.mainPage}/>
                  <AppFooter/>
            </div>
        );
    }
}
App.propTypes = {};
