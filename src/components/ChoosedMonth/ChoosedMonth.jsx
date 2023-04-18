import { CalendarGrid } from "./CalendarGrid"
import { HeaderCalendar } from "./HeaderCalendar"
import { Monitor } from "./Monitor"

import moment from 'moment'

window.moment = moment;


export const ChoosedMonth = () => {
    moment.updateLocale( 'en', {week: {dow: 1}})
    const startDay = moment().startOf('month').startOf('week');
    
    return(
        <>
        <HeaderCalendar />
        <Monitor />
        <CalendarGrid startDay={startDay}/>
        </>
    )
}