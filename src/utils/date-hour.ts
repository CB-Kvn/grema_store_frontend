import dayjs from "dayjs";
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"


export const DateHour = () =>  {


    dayjs.extend(utc);
    dayjs.extend(timezone);
    
 
    dayjs.tz.setDefault('America/Mexico_City'); 
    
   
    const currentDateTime = dayjs().format('YYYY-MM-DD HH:mm:ss');

    return currentDateTime
}