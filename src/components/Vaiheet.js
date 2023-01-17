import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';


const Vaiheet = () =>{

    return (
        <>
  
  <Card className="w3-container">  
        <Card.Body className="w3-content" style={{maxWidth: 700 }}>
        <Card.Title className="w3-center w3-padding-64"><span className="w3-tag w3-wide">Data-analyysin vaiheet</span></Card.Title>
          <Card.Text>
          Data-analyysi on syklinen prosessi. Yhtenä prosessiesimerkkinä voi mainita CRoss Industry Standard Process for Data Mining (CRISP-DM), joka koostuu kuudesta osasta.
          <br/>
          Lähde: <a href="https://www.datascience-pm.com/crisp-dm-2/">CRISP DM</a>
          </Card.Text>
        </Card.Body> 
        <Card.Img variant="bottom" src={require('../assents/img/crispDm.PNG')} style={{ alignSelf: 'center'}}/>
 </Card>
    
        </>
    )
    
    }
    export default Vaiheet