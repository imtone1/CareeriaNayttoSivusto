
import './App.css';
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Proggis from './components/Proggis';
import Self from './components/Self';
import Data from './components/Data';

function App() {
  return (
    <>
    <header className="bgimg w3-display-container w3-grayscale-min" id="home">
  <Router>
<Navbar className="w3-top" >
    
          <Nav className="w3-row w3-padding w3-black">
          <div className="w3-col w3-padding">
            <Nav.Link href='/' className="w3-button w3-block w3-black">Kotisivu</Nav.Link>
           </div>
           <div className="w3-col w3-padding">
            <Nav.Link href='/Data'className="w3-button w3-block w3-black">Data-analyysi</Nav.Link>
            </div>
           <div className="w3-col w3-padding">
            <Nav.Link href='/Self'className="w3-button w3-block w3-black">Kuka olen</Nav.Link>
            </div>
          </Nav>
    </Navbar>
     <Routes>
     <Route path="/" element={<Proggis/>} />
      <Route path="/Self" element={<Self/>}/>
      <Route path="/Proggis" element={<Proggis/>}/>
      <Route path="/Data" element={<Data/>}/>

     </Routes>
    </Router>
    </header>
    {/* <Proggis/> */}
    </>
  );
}

export default App;
