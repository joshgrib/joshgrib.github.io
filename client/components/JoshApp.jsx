import React from 'react';
import {Container, Row, Col} from 'reactstrap';

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
    changePage(pageName){
        if(this.state.navPages.includes(pageName)){
            this.setState({mainPage:pageName});
        }
    }
    render(){
        return(
            <Container id="JoshApp">
                <Row>
                    <Col>
                        <JoshHeader
                            mainText="Header"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <JoshNav
                            pages={this.state.navPages}
                            changePage={this.changePage}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <JoshMain
                            page={this.state.mainPage}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <JoshFooter/>
                    </Col>
                </Row>
            </Container>
        );
    }
}
