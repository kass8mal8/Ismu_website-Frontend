import "../styles/home.css"
import Introduction from "./Introduction"

const Home = () => {
    return ( 
        <div className = "home">
             <div className="home-header-intro">
                <h3>But Allah is your protector,and He is the best of helpers.</h3>
                <blockquote>Surah Al Imran, 3:150</blockquote>
            </div>
            <Introduction />
        </div>
     );
}
 
export default Home;