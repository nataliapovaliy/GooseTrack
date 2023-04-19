import { CalendarGrid } from "./CalendarGrid/CalendarGrid"
import { HeaderCalendar } from "../CalendarToolbar/CalendarToolbar"
import { Monitor } from "./Monitor"

import moment from 'moment'
import { useState } from "react"
import { useEffect } from "react"
import { tasksData } from "components/ChoosedDay/taskData"

// window.moment = moment;

export const ChoosedMonth = () => {
    const [displayMode, setDisplayMode] = useState('month')
    const [today, setToday] = useState(moment())
    const [tasks, setTasks] = useState([])

    const totalDays = 42;


    moment.updateLocale( 'en', {week: {dow: 1}})
    const startDay = today.clone().startOf('month').startOf('week');

    const startDateQuery = startDay.clone().format('X')
    const endDateQuery = startDay.clone().add(totalDays).format('X')

    const URL = tasksData



    useEffect(() => {
        fetch(`${URL}/${startDateQuery}&${endDateQuery}`)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setTasks(res);
        });
    }, [today])

    
   
   

    const prevHandler = () => {
        setToday(prev => prev.clone().subtract(1, 'month'))
    }
    const nextHandler = () => {
        setToday(next => next.clone().add(1, 'month'))
    }






    return(
        <>
        <HeaderCalendar today={today} prevHandler={prevHandler} nextHandler={nextHandler} setDisplayMode={setDisplayMode}/>
        <Monitor />
        {displayMode === 'month' ? ( <CalendarGrid startDay={startDay} today={today} totalDays={totalDays} tasks={tasks}/> ) : null}
        
        </>
    )
}