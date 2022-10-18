import {
    collection,
    getDocs,
    addDoc
  } from 'firebase/firestore'
import {db} from "./firebase"
import { useRef } from 'react'

import "../styles/joining.css"
import account from "../images/create_account.webp"

const JoinIsmu = () => {
    const colRef = collection(db,'members')
    const name = useRef ()
    const tel = useRef ()
    const course = useRef ()
    const form = useRef()

    getDocs(colRef).then(snapshot=> {
        let members = []
        snapshot.docs.forEach(doc => {
            members.push({...doc.data(),id:doc.id})
        })
        console.log(members);
    })

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