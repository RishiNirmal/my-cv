import logo from './logo.svg';
import './App.css';
import { Link, withRouter } from "react-router-dom";
import Header from './header/Index';
import Nav from './nav/index';
import Modal from './modal/index';
import Main from './mainContent/index';
import smoothscroll from 'smoothscroll-polyfill';
import './Style/preview.css';
// import './Style/yellow-black.css';
import './Style/black-white.css';
// import './Style/blue-black.css';
// import './Style/pink-black.css';

// kick off the polyfill!
smoothscroll.polyfill();

function App() {
  return (
    <>
    
{/* <Modal/> */}
<Header/>
    <Nav/>
    <Main/>

< Modal/>


    </>
   
  );
}

export default App;
