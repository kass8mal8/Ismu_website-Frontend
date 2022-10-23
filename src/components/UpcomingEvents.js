import {
    collection,
    getDocs,
  } from 'firebase/firestore'
import { db } from './firebase';
import {useEffect,useState} from 'react'
import event_illustration from "../images/event_illustration.png"


const UpcomingEvents = () => {
    const colRef = collection(db,'activities')
    
    const [events,setEvents] = useState ([])
    useEffect (() => {
        const fetchData = async () =>{
            try {
                const snapshots = await getDocs(colRef)

                setEvents(snapshots.docs.map(doc => (
                    {...doc.data(),id:doc.id}
                )))
                console.log(events);

            } catch (error) {
                console.log(error.message);
            }
        }
        
        fetchData ()
    },[colRef,events])
    return ( 
        <div className = 'upcoming'>
            {events === " " ? 
                <p>
                Posts about upcoming activities and events will appear here
               </p>
             :events.map(event => ( 
             <div>
                <img src={event_illustration} alt = "event-illustrator" />
                <h3>{event.title}</h3>
                <p>Venue: {event.venue} </p>
                <p>Date: {event.date} </p>
                <button>attend {event.title}</button>
            </div>
            ))
            }
        </div>
     );
}
 
export default UpcomingEvents;