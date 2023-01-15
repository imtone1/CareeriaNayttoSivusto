import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';

const Stakki = () =>{

return (
    <>

<Card className="w3-container">    
        <Card.Body className="w3-content" style={{maxWidth: 700 }}>
        <Card.Title className="w3-center w3-padding-64"><span className="w3-tag w3-wide">Stäkki</span></Card.Title>
          <Card.Text>
          C#, Asp.net mvc, Azure, SQL Server, HTML, CSS, Bootstap 5
          Autentikaatio ja autorisaatio toteutettu Microsoftin Identityn kautta, tietokannat integroitu sovelluksen tietokantaa.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={require('../assents/img/Stäkki.PNG')} style={{maxWidth: 700 , alignSelf: 'center'}}/>
      </Card>

    </>
        )

}
export default Stakki
