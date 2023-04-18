import { CalendarGrid } from "./CalendarGrid"
import { HeaderCalendar } from "./HeaderCalendar"
import { Monitor } from "./Monitor"

import moment from 'moment'
import { useState } from "react"

// window.moment = moment;

export const ChoosedMonth = () => {
    const [today, setToday] = useState(moment())
    moment.updateLocale( 'en', {week: {dow: 1}})
    // const today = moment()
    const startDay = today.clone().startOf('month').startOf('week');

    const prevHandler = () => {
        console.log('prev')
        setToday(prev => prev.clone().subtract(1, 'month'))
    }
    const nextHandler = () => {
        setToday(next => next.clone().add(1, 'month'))
    }
    return(
        <>
        <HeaderCalendar today={today} prevHandler={prevHandler} nextHandler={nextHandler}/>
        <Monitor />
        <CalendarGrid startDay={startDay} today={today}/>
        </>
    )
}