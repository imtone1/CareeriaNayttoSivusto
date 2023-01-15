import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const UserStory = () =>{

return (
    <>

<Card className="w3-container">    
        <Card.Body className="w3-content" style={{maxWidth: 700 }}>
        <Card.Title className="w3-center w3-padding-64"><span className="w3-tag w3-wide">User stories</span></Card.Title>
          <Card.Text>
        Käyttäjinä Ei kirjautuneet, Tilaajat, Opettajat, Opiskelijat
          </Card.Text>
        </Card.Body>
        <Table striped bordered hover style={{maxWidth: 700 , alignSelf: 'center'}}>
      <thead>
        <tr>
          <th>User</th>
          <th>User Story</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={2}>Kaikki</td>
          <td>katsoo aiemmat julkaistut opiskelijatyöt</td>
        </tr>
        <tr>
          <td>lähettää yhteydenottopyynnön yhteydenottolomakkeen kautta</td>
        </tr>
        <tr>
          <td rowSpan={2}>Kaikki kirjautuneet</td>
          <td>katsoo omat tiedot</td>
        </tr>
        <tr>
          <td>muuttaa omat tiedot</td>
        </tr>
        <tr>
          <td rowSpan={4}>Tilaaja</td>
          <td>ilmoittaa tilauksensa</td>
        </tr>
        <tr>
          <td>näkee omat tilaukset (aktiiviset/ei aktiiviset). Tilaukset muuttuvat aktiiviseksi, kun max.opiskelijamäärä on saavutettu</td>
        </tr>
        <tr>
          <td>pystyy viestittelemään tilaukseen liittyen</td>
        </tr>
        <tr>
          <td>näkee pelkästään omat tilauksensa</td>
        </tr>
        <tr>
          <td rowSpan={5}>Opettaja</td>
          <td>katsoo aiemmat julkaistut opiskelijatyöt</td>
        </tr>
        <tr>
          <td>määrittelee maksimi- ja minimiopiskelijamäärää projektiin</td>
        </tr>
        <tr>
          <td>näkee kaikki tilaukset</td>
        </tr>
        <tr>
          <td>pystyy viestittelemään tilauksiin liittyen</td>
        </tr>
        <tr>
          <td>luo palautekoodin, jonka kautta tilaaja jättää palautteensa valmiista projektista</td>
        </tr>
        <tr>
          <td rowSpan={3}>Opiskelija</td>
          <td>voi ilmoittautua projekteihin</td>
        </tr>
        <tr>
          <td>pystyy viestittelemään tilauksiin liittyen</td>
        </tr>
        <tr>
          <td>näkee tilauksensa ja viestinsä dashboardissa, johon on ilmoittautunut</td>
        </tr>
        <tr>
          <td>Tietosuoja</td>
          <td>poistetaan käyttäjä, jos on yli 6kk ei ole kirjautunut</td>
        </tr>
      </tbody>
    </Table>
      </Card>

    </>
        )

}
export default UserStory
