import React from 'react';
import moment from 'moment';

const day = moment().day()

class Thursday extends React.Component {
    constructor(props) {
        super(props);
        if(day === 4) {
            this.state = {
                visibility: true
            }
        } else {
            this.state = {
                visibility: false
            } 
        } 
    }
    thursdayToggle = () => {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render() {
        return (
            <div className="thursday">
            <button onClick={this.thursdayToggle}>Thursday</button>
            {this.state.visibility && 
         <div>
            <h3>Rest</h3>
            </div>
    }
        </div>
        )
    }
}


export default Thursday;