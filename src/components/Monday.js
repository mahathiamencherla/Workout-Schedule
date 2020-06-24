import React from 'react';
import moment from 'moment';

const day = moment().day()

class Monday extends React.Component {
    constructor(props) {
        super(props);
        if(day === 1) {
            this.state = {
                visibility: true
            }
        } else {
            this.state = {
                visibility: false
            } 
        } 
    }
    mondayToggle = () => {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render () {
        return (
            <div className="monday">
            <button onClick={this.mondayToggle}>Monday</button>
            {this.state.visibility && 
            <div>
            <h3>Arms and Upper Body</h3>
            <p>7 min - Warm Up</p>
            <a target="_blank" href="https://www.youtube.com/watch?v=-p0PA9Zt8zk"><img src="http://img.youtube.com/vi/-p0PA9Zt8zk/0.jpg"
             width="200" height="150"/>
             </a>
             <p>15 min - HIIT</p>
            <a target="_blank" href="https://www.youtube.com/watch?v=2MoGxae-zyo"><img src="http://img.youtube.com/vi/2MoGxae-zyo/0.jpg"
             width="200" height="150"/>
             </a> 
             <p>10 min - Upper Body</p>
            <a target="_blank" href="https://www.youtube.com/watch?v=7L-Td_p0bXE"><img src="http://img.youtube.com/vi/7L-Td_p0bXE/0.jpg"
             width="200" height="150"/>
            </a>
            <p>10 min - Toned Arms</p>
            <a target="_blank" href="https://www.youtube.com/watch?v=CaQO5Fd4PEA"><img src="http://img.youtube.com/vi/CaQO5Fd4PEA/0.jpg"
             width="200" height="150"/>
            </a>
            <p>15 min - Cool Down</p>
            <a target="_blank" href="https://www.youtube.com/watch?v=cO2RqgslEjk&t=630s"><img src="http://img.youtube.com/vi/cO2RqgslEjk/0.jpg"
             width="200" height="150"/>
            </a>
            </div>}
            
            
        </div>
        )
    }
    
}


export default Monday;


