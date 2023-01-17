import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';

const LisaMateriaali = () =>{

    return (
        <>
  
  <Card className="w3-container">  
        <Card.Body className="w3-content" style={{maxWidth: 700 }}>
        <Card.Title className="w3-center w3-padding-64"><span className="w3-tag w3-wide">Lisämateriaali</span></Card.Title>
          <Card.Text>
          Data-analyysisivusto <a href="https://www.kaggle.com/">Kaggle</a>. Ilmainen sivusto. Tarjoaa niin kurssit, datansettejä, kuten myös data-analyysikilpailuja, joista voi voittaa rahaa.
          </Card.Text>
      
        </Card.Body>
       
 </Card>
    
        </>
    )
    
    }
    export default LisaMateriaali