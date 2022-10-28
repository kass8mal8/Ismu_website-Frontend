import {
    collection,
    getDocs,
    addDoc
  } from 'firebase/firestore'
import { db } from './firebase';
import {useEffect,useState,useRef} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons";
import event_illustration from "../images/event_illustration.png"
import "../styles/attendance.css"
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';


const UpcomingEvents = () => {
    
    
    const [events,setEvents] = useState ([])
    const form = useRef()
    const colRef = collection(db,'attendance')
    const name = useRef ()

    const handleSubmitData = async(e) => {
        e.preventDefault()
        try {
            const data = await addDoc(colRef,{
                name:name.current.value
            })
            console.log(data);

        } catch (error) {
            console.log(error.message);
        }
        form.current.reset()
    }

    useEffect (() => {
        const colRef = collection(db,'activities')
        const fetchData = async () =>{
            try {
                const snapshots = await getDocs(colRef)

                setEvents(snapshots.docs.map(doc => (
                    {...doc.data(),id:doc.id}
                )))

            } catch (error) {
                console.log(error.message);
            }
        }
        
        fetchData ()
    },[events])

    const popStyles = {
            background:'rgba(255, 255, 255)',
            width: '50%',
            padding: '5px',
    }

    return ( 
        <div className = 'upcoming'>
            {events === " " ? 
                <p>
                Posts about upcoming activities and events will appear here
               </p>
             :events.map(event => ( 
            <div>
                <div>
                    <img src={event_illustration} alt = "event-illustrator" />
                    <h3>{event.title}</h3>
                    <p>Venue: {event.venue} </p>
                    <p>Date: {event.date} </p>

                </div>
                
                <Popup
                    trigger={<button> attend {event.title}</button>} 
                    position="top center"
                    style = {popStyles}>
                    <form 
                        className="attendance"
                        ref = {form}
                        onSubmit = {handleSubmitData}>
                        <h3>{event.title} attendance</h3>
                        <FontAwesomeIcon 
                            icon = {faClose} 
                            className = 'attend-close'/>
                        <input 
                            type="text" 
                            placeholder="enter your name"
                            ref = {name}/>
                    </form>
                </Popup>

            </div>))
            }

            
            
        </div>
     );
}
 
export default UpcomingEvents;