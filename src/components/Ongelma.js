import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';

const Ongelma = () =>{

return (
    <>

<Card className="w3-container">
        <Card.Body className="w3-content" style={{maxWidth: 700 }}>
        <Card.Title className="w3-center w3-padding-64"><span className="w3-tag w3-wide">Ongelma</span></Card.Title>
          <Card.Text>
          Oppilaitoksessa tehdään yhteisiä projekteja, mutta projekteja on vähän. Opiskelijoille olisi antoisampaa työskennellä todellisen maailman ongelmien kanssa. Ihmisille on myös vaikeaa ilmoittaa mahdollisista projekteista, joita voisi antaa opiskelijoille kehitettäväksi.

          </Card.Text>
        </Card.Body>
      </Card>

    </>
        )

}
export default Ongelma
