import React from 'react';
import moment from 'moment';

const day = moment().day()

class Wednesday extends React.Component {
    constructor(props) {
        super(props);
        if(day === 3) {
            this.state = {
                visibility: true
            }
        } else {
            this.state = {
                visibility: false
            } 
        }
        
    }
    wednesdayToggle = () => {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render() {
        return (
            <div className="wednesday">
                <button onClick={this.wednesdayToggle}>Wednesday</button>
            {this.state.visibility && 
         <div>
                <h3>Legs</h3>
                <p>7 min - Warm Up</p>
                <a target="_blank" href="https://www.youtube.com/watch?v=-p0PA9Zt8zk"><img src="http://img.youtube.com/vi/-p0PA9Zt8zk/0.jpg"
                 width="200" height="150"/>
                 </a>
                <p>15 min - HIIT</p>
                <a target="_blank" href="https://www.youtube.com/watch?v=fMPoCc78v0g"><img src="http://img.youtube.com/vi/fMPoCc78v0g/0.jpg"
                 width="200" height="150"/>
                 </a>
                <p>12 min - Legs</p>
                <a target="_blank" href="https://www.youtube.com/watch?v=Fu_oExrPX68"><img src="http://img.youtube.com/vi/Fu_oExrPX68/0.jpg"
                 width="200" height="150"/>
                 </a>
                <p>15 min - Thighs</p>
                <a target="_blank" href="https://www.youtube.com/watch?v=_sl7q03-0Mw"><img src="http://img.youtube.com/vi/_sl7q03-0Mw/0.jpg"
                 width="200" height="150"/>
                 </a>
                <p>10 min - Booty </p>
                <a target="_blank" href="https://www.youtube.com/watch?v=p-uUnrCdhR8"><img src="http://img.youtube.com/vi/p-uUnrCdhR8/0.jpg"
                 width="200" height="150"/>
                 </a>
                <p>15 min - Cool Down</p>
                <a target="_blank" href="https://www.youtube.com/watch?v=cO2RqgslEjk&t=630s"><img src="http://img.youtube.com/vi/cO2RqgslEjk/0.jpg"
                 width="200" height="150"/>
                </a>
                </div>
    }
            </div>

        )
    }
}


export default Wednesday;