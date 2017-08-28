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
              <p>Welcome to my website! This is a work in progress particularly at the moment but also in general, as this is primarily a project I will be using to further my web development knowledge.</p>
              <hr/>
              <p>I'm currently a computer science major at Stevens Institute of Technology, as part of a 5-year coop program, during which I'm also getting my Masters in computer science(CS). I find many CS concepts to be great mental models for the world in general.</p>
              <hr/>
            </section>
        );
    }
}
Home.propTypes = {}
