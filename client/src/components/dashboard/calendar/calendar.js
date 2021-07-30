import "./calendar.css"
import FullCalendar, {EventInput} from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';




const data:EventInput[] = [
    {
      title:"Clean the hous on cope dr",
      start:"2021-07-01"
      
    },
    {
      title:"we have to code all day",
      start:"2021-07-29"
    },
    {
      title:"we have to code",
      start:"2021-07-29",
      
    },
    {
      title:"we have to code day",
      start:"2021-07-29"
    }
  ]

  const Calendar = () => {


    // const [date, setDate] = useState(new Date());
  
    // const onChange = date => {
    //   setDate(date);
    // } 
    return ( 
    
  <div>
        <FullCalendar className="calendar"
        events={data}
        plugins={[dayGridPlugin, timeGridPlugin]}
        />
      </div> 
    );
  }
  
  export default Calendar