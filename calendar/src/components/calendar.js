import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Calendar } from '@fullcalendar/core'
import "./Calendar.css";


export default function FullCalendarApp() {

  

    const events = [
        {
          id: 1,
          title: 'event 1',
          start: '2022-01-06T10:00:00',
          end: '2022-01-06T12:00:00',
          color: '#CECDF2'
        },
        {
          id: 2,
          title: 'event 2',
          start: '2022-01-06T10:00:00',
          end: '2022-01-06T12:00:00',
          color: '#D4E8D7'
        },
        { 
          id: 3, 
          title: 'event 3', 
          start: '2022-01-06T09:00:00', 
          end: '2022-01-06T10:00:00' ,
          color: '#F7E4F3'
        },
          
        
      ];
      
      
    return (
      <div className="App">
        <FullCalendar
        
          views={{
            day: {
                titleFormat: { month: 'short',day:'2-digit'  },
                
                dayHeaderFormat:{month:'long'  ,weekday: 'short',day:'2-digit' , omitCommas: true}
                ,

            },
             month:{
              titleFormat: {  month: 'long' },
             },
             week:{
              titleFormat: { day:'2-digit', month: 'short' },
              dayHeaderFormat:{ weekday: 'short', day:'2-digit', month:'short', omitCommas: true}
             },       
             timeGrid:  {
              slotMinTime: '08:00',
              slotMaxTime: '21:00'
          }
           }}
           
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"

          customButtons={{
            search_appointment: {
              text: 'SEARCH APPOINTMENTS',
              click: () => console.log('search apointments working'),
            },  
             date: {
                text:"fullcalendar",
                click: () => console.log('search apointments working'),
              },
          }}
          headerToolbar = {{
            start: 'search_appointment',
            center: 'prev,title,next',   
            end: 'timeGridDay,timeGridWeek,dayGridMonth'
          }}
          
          businessHours = {{

            startTime: '00:00', // a start time (10am in this example)
            endTime: '21:00',
            daysOfWeek: [ 1,2,3,4,5 ],

          }}

          scrollTime = {{
            default: '06:00:00'
          }}
         
                     

          
          events={events}
          eventColor={events.color}
        />
      </div>
    );
  }