
import './App.css';
// import{BrowserRouter as Router, Route, Routes, Outlet} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Proggis from './components/Proggis';

function App() {
  return (
    <>
    <header className="bgimg w3-display-container w3-grayscale-min" id="home">
  {/* <Router> */}
<Navbar className="w3-top" >
    
          <Nav className="w3-row w3-padding w3-black">
          <div className="w3-col s3">
            <Nav.Link href='/' className="w3-button w3-block w3-black">Kotisivu</Nav.Link>
           </div>
           {/* <div className="w3-col s3">
            <Nav.Link href='/Posts'className="w3-button w3-block w3-black">Postaukset</Nav.Link>
            </div> */}
          </Nav>
    </Navbar>
     {/* <Routes>
     <Route path="/" element={<Outlet />} />
      {/* <Route path="/Event" element={<Event/>}/> */}

     {/* </Routes>
    </Router> */}
    </header>
    <Proggis/>
    </>
  );
}

export default App;
