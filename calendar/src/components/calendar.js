import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import momentPlugin from '@fullcalendar/moment';
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
      title: 'Bridal day 2022',
      start: '2022-01-06T09:00:00',
      end: '2022-01-06T09:30:00',
      color: '#F7E4F3'
    },
    {
      id: 4,
      title: 'event 4',
      start: '2022-01-12T10:00:00',
      end: '2022-01-12T11:00:00',
      color: '#F7E4F3'
    },
    {
      id: 5,
      title: 'Bridal Opening day 2022',
      start: '2022-01-12T12:00:00',
      end: '2022-01-12T12:30:00',
      color: '#D4E8D7'
    },
    {
      id: 6,
      title: 'event 6',
      start: '2022-01-12T12:30:00',
      end: '2022-01-12T13:00:00',
      color: '#F7E4F3'
    },
    {
      id: 7,
      title: 'event 7',
      start: '2022-01-12T10:00:00',
      end: '2022-01-12T11:00:00',
      color: '#F7E4F3'
    },
    {
      id: 8,
      title: 'event 7',
      start: '2022-01-12T11:00:00',
      end: '2022-01-12T11:10:00',
      color: '#D4E8D7'
    },
    {
      id: 9,
      title: 'event 8',
      start: '2022-01-12T11:10:00',
      end: '2022-01-12T11:20:00',
      color: '#D4E8D7'
    },
    {
      id: 10,
      title: 'Bride Look',
      start: '2022-01-12T11:21:00',
      end: '2022-01-12T11:29:00',
      color: '#D4E8D7'
    },


  ];


  return (
    <div className="App">
      <FullCalendar

        views={{
          handleWindowResize: false,
          day: {
            titleFormat: "DD MMM",
            dayHeaderFormat: "ddd DD MMM",
            // dayMaxEventRows: 3,
            slotLabelFormat: [
              {
                hour: 'numeric',
                // minute: '2-digit',
                meridiem: true,
                // hour12: false
              },

            ],
            eventTimeFormat: {
              hour: 'numeric',
              minute: '2-digit',
              meridiem: true,

            },

          },
          month: {
            titleFormat: { month: 'long' },
            // eventMaxStack: 3,
            dayMaxEventRows: 4,
            eventTimeFormat: {
              hour: 'numeric',
              minute: '2-digit',
              meridiem: true,


            },

            displayEventEnd: true
          },
          week: {
            // titleFormat: "DD MMM",
            titleFormat: {
              month: 'short',
              day: 'numeric',
              timeZone: 'UTC',
              locale: 'us'
            },
            dayHeaderFormat: 'ddd D MMM ',
            titleRangeSeparator: '-',
            slotLabelFormat: [
              {
                hour: 'numeric',
                // minute: '2-digit',
                meridiem: true,
                // hour12: false
              },

            ],
            eventTimeFormat: {
              hour: 'numeric',
              minute: '2-digit',
              meridiem: true,

            },
          },
          timeGrid: {
            slotMinTime: '08:00',
            slotMaxTime: '21:00',

          }
        }}

        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, momentPlugin]}
        initialView="dayGridMonth"
        firstDay='1'

        // columnFormat={{
        //   month: 'ddd',
        //   week: 'D/M ddd ',
        //   day: 'D/M ddd'
        // }}


        customButtons={{
          search_appointment: {
            text: 'SEARCH APPOINTMENTS',
            click: () => console.log('search apointments working'),
          },
          date: {
            text: "fullcalendar",
            click: () => console.log('search apointments working'),
          },
        }}
        headerToolbar={{
          start: 'search_appointment',
          center: 'prev,title,next',
          end: 'timeGridDay,timeGridWeek,dayGridMonth'
        }}

        businessHours={{

          startTime: '00:00', // a start time (10am in this example)
          endTime: '21:00',
          daysOfWeek: [1, 2, 3, 4, 5],

        }}

        scrollTime={{
          default: '06:00:00'
        }}

        events={events}
        eventColor={events.color}
      />
    </div>
  );
}