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
                {this.props.pages.map((page) => {
                    return (
                        <li
                            key={page}
                            onClick={this.props.changePage(page)}>{page}</li>
                    );
                })}
            </nav>
        );
    }
}
JoshNav.propTypes = {
    pages: React.PropTypes.array.isRequired
}
