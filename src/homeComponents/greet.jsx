import React, {Component} from 'react';
import "./style.css"
class Greet extends Component {
    render() {
        return (
            <div className="greet">
                <h1 className="display-3" style={{fontFamily:"cursive"}}>
                    Algorithm Visualizer
                </h1>
                <hr className="dropdown-divider"/>
                <h2 className="display-5">
                    Visualize data structures algorithms
                </h2>
            </div>
        );
    }
}

export default Greet;