import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';

const Ratkaisu = () =>{

return (
    <>

<Card className="w3-container">  
        <Card.Body className="w3-content" style={{maxWidth: 700 }}>
        <Card.Title className="w3-center w3-padding-64"><span className="w3-tag w3-wide">Ratkaisu</span></Card.Title>
          <Card.Text>
          Yhteistyössä opiskelijakaverini Jon Haatajan kanssa kehitetään sivuston, jonka kautta pystyisi helposti ja matalalla kynnyksellä kuka tahansa pystyisi rekisteröitymään ja ilmoittamaan omat projektit (sivusto, sovellus jne.).

Opiskelijat pystyisivät näitä selata ja ilmoittautua niihin. Opiskelijakiintiön täytettyä tilaaja ja opiskelijat voisivat aloittaa projektin työstön.

Aloitettu projekti 07/2022 työn ja opiskelun ohessa. 
<br/>
Github repositio on yksityinen, mutta tarvittaessa opettajat lisättävissä tutustukseen lähdekoodin.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={require('../assents/img/self.PNG')} style={{maxWidth: 700 , alignSelf: 'center'}}/>
      </Card>

    </>
        )

}
export default Ratkaisu
