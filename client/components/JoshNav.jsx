import React from 'react';
import {Container, Row, Col} from 'reactstrap';

export default class JoshNav extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <nav>
                <Container>
                    <Row>
                        <Col sm={2} xs={12}>
                            <p>Title</p>
                        </Col>
                        <Col sm={10} xs={12}>
                            <ul className="nav nav-pills">
                                {this.props.pages.map((pageName) => {
                                    let isActive = this.props.currPage === pageName;
                                    return(
                                        <li sm={2} xs={12} key={pageName}
                                            className={isActive?"active":""}>
                                            <a href="">{pageName}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </nav>
        );
    }
}
JoshNav.propTypes = {
    pages: React.PropTypes.array.isRequired,
    currPage: React.PropTypes.string.isRequired
}
