import React from 'react';

class Thursday extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
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
            <div>
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