import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';

const Sivustorakenne = () =>{

return (
    <>

<Card className="w3-container">    
        <Card.Body className="w3-content" style={{maxWidth: 700 }}>
        <Card.Title className="w3-center w3-padding-64"><span className="w3-tag w3-wide">Sivustorakenne</span></Card.Title>
          <Card.Text>
          Jokaisella kirjautuneella ryhmällä on omat dashboardinsa.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={require('../assents/img/sivustorakenne.PNG')} style={{ alignSelf: 'center'}}/>
      </Card>

    </>
        )

}
export default Sivustorakenne
