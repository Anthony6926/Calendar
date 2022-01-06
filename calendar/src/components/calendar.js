import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import "./Calendar.css";
export default function FullCalendarApp() {

  

    const events = [
        {
          id: 1,
          title: 'event 1',
          start: '2022-01-06T10:00:00',
          end: '2022-01-06T12:00:00',
        },
        {
          id: 2,
          title: 'event 2',
          start: '2021-06-16T13:00:00',
          end: '2021-06-16T18:00:00',
        },
        { 
          id: 3, 
          title: 'event 3', 
          start: '2021-06-17', 
          end: '2021-06-20' },
      ];
    return (
      <div className="App">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          customButtons={{
            search_appointment: {
              text: 'SEARCH APPOINTMENTS',
              click: () => console.log('search apointments working'),
            },  
             date: {
                text: 'title',
                click: () => console.log('search apointments working'),
              },
          }}
          headerToolbar = {{
            start: 'search_appointment',
            center: 'prev,date,next',   
            end: 'timeGridDay,timeGridWeek,dayGridMonth'
          }}
          events={events}
          eventColor="cyan"
        />
      </div>
    );
  }