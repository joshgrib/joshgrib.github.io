import React from 'react';

export default class AppFooter extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        let rLink = "https://facebook.github.io/react/",
            wLink = "https://webpack.js.org/",
            bLink = "https://babeljs.io/";
        return(
            <footer>
                Made with <a href={rLink}>React</a>, <a href={wLink}>webpack</a>, and <a href={bLink}>Babel</a>.
            </footer>
        );
    }
}
AppFooter.propTypes = {}
