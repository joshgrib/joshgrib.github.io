import React from 'react';

export default class AppHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <header className="col-xs-12 text-center">
              <p>{this.props.mainText}</p></header>
        );
    }
}
AppHeader.propTypes = {
    mainText: React.PropTypes.string.isRequired
}
