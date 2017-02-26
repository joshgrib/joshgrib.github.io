import React from 'react';

export default class JoshFooter extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <footer>
                Made with <a ref="https://facebook.github.io/react/">React</a>, <a href="https://reactstrap.github.io/">reactstrap</a>, <a href="https://webpack.js.org/">webpack</a>, and <a href="https://babeljs.io/">Babel</a>.
            </footer>
        );
    }
}
JoshFooter.propTypes = {}
