import React from 'react';

export default class Musings extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <section>
                <h2>Musings</h2>
                <p>A place for random writing or whatever</p>
            </section>
        );
    }
}
Musings.propTypes = {}
