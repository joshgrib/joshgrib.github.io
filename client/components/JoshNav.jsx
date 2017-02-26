import React from 'react';

export default class JoshNav extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
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
        );
    }
}
JoshNav.propTypes = {
    pages: React.PropTypes.array.isRequired,
    currPage: React.PropTypes.string.isRequired
}
