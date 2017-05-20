import React from 'react';

export default class AppNav extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        this.changePage = this.changePage.bind(this);
    }
    changePage(e){
      this.props.changeNavPage(e.target.innerHTML);
    }
    render(){
        return(
            <ul className="nav nav-pills">
                {this.props.pages.map((pageName) => {
                    let isActive = this.props.currPage === pageName;
                    return(
                        <li key={pageName}
                            className={isActive?"active":""}
                            value={pageName}
                            onClick={this.changePage}>
                            <a>{pageName}</a>
                        </li>
                    )
                })}
            </ul>
        );
    }
}
AppNav.propTypes = {
    pages: React.PropTypes.array.isRequired,
    currPage: React.PropTypes.string.isRequired,
    changeNavPage: React.PropTypes.func.isRequired
}
