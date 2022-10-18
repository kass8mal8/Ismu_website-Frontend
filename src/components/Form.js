import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Store } from 'react-notifications-component';



const Form = () => {

    const form = useRef()
    const handleFormSubmit= (e) => {
        e.preventDefault()

        emailjs.sendForm('service_4mxkiw9','template_r7sdjd5',form.current,'l7EWM6JH8x-9ql4oa')
            .then(result => {
                console.log(result.text);
            },error => {
                console.log(error.text)
            })
        form.current.reset()
        
        
    }

    const handleNotification = () => {
        Store.addNotification({
            title: "success!",
            message: "message sent successfully",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          })
    }
    

    return ( 
        
        <form ref={form} onSubmit = {handleFormSubmit}>
                <label>Name</label>
                <input 
                    type="text" 
                    name = "user_name"
                    placeholder="eg-Muhammad"/>

                <label>Email</label>
                <input 
                    type = "email" 
                    name="user_email"
                    placeholder="eg-muhammad@example.com"/>
                <label>Subject</label>
                <input 
                    type = "text" 
                    name = "subject" 
                    placeholder="message subject"/>

                <label>Message</label>
                <textarea 
                    name="message" 
                    cols="7" 
                    rows = "5" 
                    placeholder="Enter message to send..."/>
                    <button onClick={handleNotification}>send</button>
                
        </form>
     );
}
 
export default Form;