import React from 'react';
import moment from 'moment';

const day = moment().day()

class Sunday extends React.Component {
    constructor(props) {
        super(props);
        if(day === 0) {
            this.state = {
                visibility: true
            }
        } else {
            this.state = {
                visibility: false
            } 
        } 
    }
    SundayToggle = () => {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render() {
        return (
            <div className="sunday">
            <button onClick={this.SundayToggle}>Sunday</button>
            {this.state.visibility && 
         <div>
            <h3>Rest</h3>
            </div>
    }
        </div>
        )
    }
}


export default Sunday;