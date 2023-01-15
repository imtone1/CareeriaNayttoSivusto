import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';

const Jatkot = () =>{

return (
    <>

<Card className="w3-container">
        <Card.Body className="w3-content" style={{maxWidth: 700 }}>
        <Card.Title className="w3-center w3-padding-64"><span className="w3-tag w3-wide">Jatkosuunnitelmat</span></Card.Title>
          <Card.Text>
         Käyttäjätutkimus mistä tarkalleen käyttäjät hyötyisivät. <br/>
         Jos selviää, että opettajilla on vaikeutta etsiä projekteja &gt; esim. keksintösäätiöllä on projektiaihioita saatavilla
        <br/>
        Opiskelijoiden kirjautuminen niin, ettei näkyisi mahdollisimman vähän tietoja. 
          </Card.Text>
        </Card.Body>
      </Card>

    </>
        )

}
export default Jatkot