import React from 'react';

export default class AppHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <header className="col-xs-12 text-center">
              <h1>{this.props.mainText}</h1></header>
        );
    }
}
AppHeader.propTypes = {
    mainText: React.PropTypes.string.isRequired
}
