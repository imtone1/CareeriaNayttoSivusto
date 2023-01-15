import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';

const Tehtavani = () =>{

return (
    <>

    <Card className="w3-container">    
        <Card.Body className="w3-content" style={{maxWidth: 700 }}>
        <Card.Title className="w3-center w3-padding-64"><span className="w3-tag w3-wide">Tehtäväni</span></Card.Title>
            <Card.Text>
            Osuuteni backend melko kokonaisuudessaan. Tietokantasuunnittelu ja luominen, konfiguraatio, julkaiseminen.
            </Card.Text>
        </Card.Body>
    </Card>

    </>
        )

}
export default Tehtavani
