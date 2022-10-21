import '../styles/app.css';
import Header from './Header';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Footer from './Footer';
import Donate from './Donate';
import Activities from './Activities';
import About from './About'
import useFetch from './useFetch';
import JoinIsmu from './JoinIsmu';
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'react-notifications/lib/notifications.css';
import 'animate.css';



const App = () => {
  const url = 'https://ahadith-api.herokuapp.com/api/ahadith/all/en'
  useFetch(url)
  return (
      <div className='container'>
        <BrowserRouter>
          <ReactNotifications />
          <Header />
          <Routes>
            <Route 
                path='/' 
                element = {<Home/>} />
            <Route 
                path='/contacts' 
                element = { <Contact /> } />
            <Route 
                path='/donate' 
                element = { <Donate /> } />
            <Route 
                path='/about'
                element = {<About/>}/>
            <Route 
                path = '/activities'
                element = {<Activities />}/>
            <Route 
              path = '/ismu-joining'
              element = { <JoinIsmu/> }/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  )
}

export default App