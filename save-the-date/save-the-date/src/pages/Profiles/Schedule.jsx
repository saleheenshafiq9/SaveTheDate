import React from "react";
import {ScheduleComponent, Day, Week, Month, WorkWeek, Agenda, Inject} from '@syncfusion/ej2-react-schedule';

const ScheduleAppoint = () => {
    return(
        <div>
            <ScheduleComponent currentView="Month">
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>
        </div>
    )
}

export default ScheduleAppoint;