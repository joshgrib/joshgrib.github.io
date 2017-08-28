import React from 'react';

export default class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <section>
                <h2>Project</h2>
                <p>This will have links to different projects</p>
            </section>
        );
    }
}
Projects.propTypes = {}
