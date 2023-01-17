import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Self = () =>{

    return (
        <>
  
  <Card className="w3-container">  
        <Card.Body className="w3-content" style={{maxWidth: 700 }}>
        <Card.Title className="w3-center w3-padding-64"><span className="w3-tag w3-wide">Irina Tatti</span></Card.Title>
        <p>Toimin työterveyshoitajana 50% työajalla. Lisäksi opiskelen.</p>
            <h5>Opinnot kevät 2023</h5>
          <ListGroup>
      <ListGroup.Item>Tradenomi (YAMK) projektijohtaminen 20 op (kokonaisuudessaan 90 op)</ListGroup.Item>
      <ListGroup.Item>kyberturvallisuuden opinnot 15 op (syventävät opinnot)</ListGroup.Item>
      <ListGroup.Item>ICT-insinööri matematiikkaopinnot 6op</ListGroup.Item>
      <ListGroup.Item> </ListGroup.Item>
      <ListGroup.Item><b> Syksyllä 2023 suoritettavia opintoja yhteensä 41 op</b></ListGroup.Item>
    </ListGroup>
           
       <a href="https://www.linkedin.com/in/irina-tatti/">Linkedin</a>
       <br/>
       <a href="https://irinatatti.azurewebsites.net/">Oma sivusto</a>
         
        </Card.Body>
        <Card.Img variant="bottom" src={require('../assents/img/Irina.png')} style={{ alignSelf: 'center'}}/>
      </Card>
    
        </>
    )
    
    }
    export default Self