import "./list.css"
import FullCalendar, {EventInput} from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';




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
    
  <div className="daylist">
        <FullCalendar className="dayList"
      events={data}
      plugins={[listPlugin]}
      initialView = 'listDay'
      />
    </div>
    );
  }
  
  export default Calendar