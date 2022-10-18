import Form from "./Form"
import "../styles/contact.css"
import msg from "../images/message_illustration.webp"

const Contact = () => {

    return ( 
        <div id="contacts">
            <div>
                <img 
                    src={msg} 
                    alt="illustration" />
                <p>
                    Any clarrifications or issues... leave us a message and we surely will get back to you.
                </p>
            </div>
            <Form/>
        </div>
     );
}
 
export default Contact;