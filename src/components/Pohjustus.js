import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Pohjustus = () =>{

    return (
        <>
  
  <Card className="w3-container">  
        <Card.Body className="w3-content" style={{maxWidth: 700 }}>
        <Card.Title className="w3-center w3-padding-64"><span className="w3-tag w3-wide">Toteuttaminen</span></Card.Title>
          <Card.Text>
          Data-analyysin toteuttaminen Python ohjelmointikielellä Jupyter Notebook alustalla, käyttäen Pandas-, NumPy-, Seaborn-ohjelmistokirjastoja.
          </Card.Text>
          <p><b>Suoritin syksy 2022 Data-analytiikan ja tekoälyn erikoistumismoduuli 1 (16 op), Jamk</b></p>
          <p>Keskiarvo 5.0</p>
          <p><a href="https://www.jamk.fi/fi/Hae-opiskelemaan/laaja-opintokokonaisuus/opi-hyodyntamaan-data-analytiikkaa-ja-tekoalya">Kurssikuvaus</a></p>
          <ul>
  <li>Git-versionhallinta ja Gitlab-projektien hallintaympäristö, 1 op</li>
  <li>Johdatus data-analytiikkaan ja tekoälyyn, 3 op</li>
  <li>Data analytiikan ja koneoppimisen käytänteet, 4 op</li>
  <li>Datan esikäsittely, 4 op</li>
  <li>Datan analysointi ja visualisointi, 4 op</li>
</ul>  
          <ListGroup>
      <ListGroup.Item><a href="https://jupyter.org/">Jupyter Notebook</a></ListGroup.Item>
      <ListGroup.Item><a href="https://pandas.pydata.org/">Pandas</a></ListGroup.Item>
      <ListGroup.Item><a href="https://numpy.org/">NumPy</a></ListGroup.Item>
      <ListGroup.Item><a href="https://seaborn.pydata.org/api.html">Seaborn</a></ListGroup.Item>
    </ListGroup>
        </Card.Body>
        {/* <Card.Img variant="bottom" src={require('../assents/img/Irina.png')} style={{ alignSelf: 'center'}}/> */}
 </Card>
    
        </>
    )
    
    }
    export default Pohjustus