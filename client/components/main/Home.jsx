import React from 'react';

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <section>
              <h2>Home</h2>
              <p>Here's the home page, more to come soon!</p>
              <hr/>
            </section>
        );
    }
}
Home.propTypes = {}
