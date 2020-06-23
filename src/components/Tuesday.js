import React from 'react';

class Tuesday extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        } 
    }
    tuesdayToggle = () => {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render() {
        return (
            <div className="tuesday">
        <button onClick={this.tuesdayToggle}>Tuesday</button>
            {this.state.visibility && 
         <div>   
        <h3>Abs</h3>
        <p>7 min - Warm Up</p>
        <a target="_blank" href="https://www.youtube.com/watch?v=-p0PA9Zt8zk"><img src="http://img.youtube.com/vi/-p0PA9Zt8zk/0.jpg"
         width="250" height="150"/>
         </a>
        <p>12 min - HIIT</p>
        <a target="_blank" href="https://www.youtube.com/watch?v=OBSUUi0FAKo&t=13s"><img src="http://img.youtube.com/vi/OBSUUi0FAKo/0.jpg"
         width="250" height="150"/>
         </a>
        <p>10 min - Shredded Abs</p>
        <a target="_blank" href="https://www.youtube.com/watch?v=hAUIGLE8PEo"><img src="http://img.youtube.com/vi/hAUIGLE8PEo/0.jpg"
         width="250" height="150"/>
         </a>
         <p>10 min - Lower Abs</p>
        <a target="_blank" href="https://www.youtube.com/watch?v=JEEG0hBNk3E&t=1s"><img src="http://img.youtube.com/vi/JEEG0hBNk3E/0.jpg"
         width="250" height="150"/>
         </a>
         <p>10 min - Love Handles</p>
        <a target="_blank" href="https://www.youtube.com/watch?v=ywJgsm5mkkQ"><img src="http://img.youtube.com/vi/ywJgsm5mkkQ/0.jpg"
         width="250" height="150"/>
         </a>
        <p>15 min - Cool Down</p>
        <a target="_blank" href="https://www.youtube.com/watch?v=cO2RqgslEjk&t=630s"><img src="http://img.youtube.com/vi/cO2RqgslEjk/0.jpg"
         width="250" height="150"/>
        </a>
        </div>
    }
    </div>
        )
    }
}


export default Tuesday;