import React from 'react';

class Sunday extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
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