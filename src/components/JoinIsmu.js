import {
    collection,
    addDoc
  } from 'firebase/firestore'
import {db} from "./firebase"

import { useRef } from 'react'
import { Store } from 'react-notifications-component';

import "../styles/joining.css"
import account from "../images/create_account.webp"

const JoinIsmu = () => {
    const name = useRef ()
    const tel = useRef ()
    const course = useRef ()
    const form = useRef()
    const colRef = collection(db,'members')
    

    const handleSubmitData = async(e) => {
        e.preventDefault()
        try {
            const data = await addDoc(colRef,{
                name:name.current.value,
                phone_number:tel.current.value,
                course:course.current.value
            })
            console.log(data);

        } catch (error) {
            console.log(error.message);
        }
        form.current.reset()

        Store.addNotification({
            title: "success!",
            message: "Registered successfully... you are now a member of ISMU",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 4000,
              onScreen: true
            }
        })
    }

    return ( 
        <div className="join-container">
            <div className="account-illustration">
            <img src={account} alt="account" />
            </div>
            <form 
                className='user-info' 
                onSubmit={handleSubmitData}
                ref = {form} >
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    placeholder="eg-Muhammad Ali" 
                    ref = {name}/>
                <label htmlFor="telephone">Phone:</label>
                <input 
                    type = "tel" 
                    placeholder = "+254 000 132 256"
                    ref = {tel}/>
                <label htmlFor="course">Course:</label>
                <input 
                    type="text" 
                    placeholder='eg-Procurement'
                    ref = {course} />
                <button>submit</button>

                <p>For information on how we process your data... be free to contact us.</p>
            </form>
        </div>
     );
}
 
export default JoinIsmu;