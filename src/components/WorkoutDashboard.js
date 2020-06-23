// MON TUE WED THURS FRI SAT SUN
// click on day to get drop down of workouts 
// click on link to go to youtube workout

import React from 'react';
import Monday from './Monday';
import Tuesday from './Tuesday';
import Wednesday from './Wednesday';
import Thursday from './Thursday';
import Friday from './Friday';
import Saturday from './Saturday';
import Sunday from './Sunday';
const WorkoutDashboard = () => (
    <div className="schedule">
        <Monday/>
        <Tuesday/>
        <Wednesday/>
        <Thursday/>
        <Friday/>
        <Saturday/>
        <Sunday/>
    </div>
);

export default WorkoutDashboard;