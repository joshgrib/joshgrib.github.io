import React from 'react';

export default class About extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <section>
              <h2>About</h2>
              <p>This is a personal site I made mostly to learn React.</p>
              <hr/>
            </section>
        );
    }
}
About.propTypes = {}
