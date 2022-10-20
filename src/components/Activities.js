import '../styles/activities.css'
import ActivitiesCarousel from './ActivitiesCarousel';
import UpcomingEvents from './UpcomingEvents';

const Activities = () => {
    return ( 
        <div className="activities">
            <nav >
                <h3>Upcoming activities...</h3>
                <aside className='upcoming'>
                    <UpcomingEvents />
                </aside>
            </nav>
            <nav>
                <h3>Activities in a wrap...</h3>
                <ActivitiesCarousel />
            </nav>
        </div>
     );
}
 
export default Activities;