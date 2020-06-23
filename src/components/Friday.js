import React from 'react';

class Friday extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        } 
    }
    fridayToggle = () => {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.fridayToggle}>Friday</button>
            {this.state.visibility && 
         <div>
                <h3>Intense Cardio/ HIIT</h3>
                <p>35 min - 500 Calories</p>
                <a target="_blank" href="https://www.youtube.com/watch?v=LeOHID-EDA0k"><img src="http://img.youtube.com/vi/LeOHID-EDA0/0.jpg"
                 width="250" height="150"/>
                 </a>
                 </div>
    }
            </div>
        )
    }
}

export default Friday;