import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';

const Swimlane = () =>{

return (
    <>

    <Card className="w3-container">    
        <Card.Body className="w3-content" style={{maxWidth: 700 }}>
        <Card.Title className="w3-center w3-padding-64"><span className="w3-tag w3-wide">Swimlane</span></Card.Title>
          <Card.Text>
          Kuvassa näkyy tilojen eteneminen projektissa.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={require('../assents/img/Swimlane.PNG')} style={{ alignSelf: 'center'}}/>
    </Card>

    </>
        )

}
export default Swimlane
