import "../styles/donate.css"
import donate from "../images/donor.jpg"

const Donate = () => {
    return ( 
        <div className="donation">
            <div>
                <img 
                    src = {donate} 
                    alt = "donation illustration"/>
                <p>
                And whatever ye spend in charity or devotion, be sure Allah knows it all. <br/>But the wrong-doers have no helpers. <br/> [al-Baqarah 2:270] 
                </p>
                <p>Send Money to 0712345678</p>

                <h2>This page is still under construction</h2>
            </div>
            
        </div>
     );
}
 
export default Donate;