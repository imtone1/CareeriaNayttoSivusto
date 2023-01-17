import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CodeBlockk from '../Codeblock';

const Peruskomennot = () =>{

    return (
        <>
  
  <Card className="w3-container">  
        <Card.Body className="w3-content" style={{maxWidth: 700 }}>
        <Card.Title className="w3-center w3-padding-64"><span className="w3-tag w3-wide">Peruskomennot</span></Card.Title>
          <Card.Text>
          Pandas peruskomennot, joilla pääsee alkuun.
          </Card.Text> 
          <ListGroup>
      <ListGroup.Item><CodeBlockk code={`import pandas as pd`}/></ListGroup.Item>
      <ListGroup.Item><CodeBlockk code={`series1 = pd.Series([1,2,3,4]), index=['a', 'b', 'c', 'd'])`}/></ListGroup.Item>
      <ListGroup.Item><CodeBlockk code={`dict = [{"firstname":"Jennifer","lastname":"Davis","phone":"0613512441","email":"jennifer.davis@company.com"}, {"firstname":"Mike","lastname":"Johnson","phone":"0513643123","email":"mike.johnson@company.com"}, {"firstname":"Steve","lastname":"Mclaud","phone":"0561253343","email":"steve.mclaud@company.com"}, {"firstname":"Lucy","lastname":"Brown","phone":"0613412353","email":"lucy.brown@company.com"}, {"firstname":"Gary","lastname":"Stone","phone":"0612343521","email":"gary.stone@company.com"}]

employees = pd.DataFrame(dict)`} />
            </ListGroup.Item>
            <ListGroup.Item><CodeBlockk code={`dataesim = pd.read_csv("dataesim.csv",delimiter=";")`}/></ListGroup.Item>
            <ListGroup.Item><CodeBlockk code={`dataesim.head()`}/></ListGroup.Item>
            <ListGroup.Item><CodeBlockk code={`dataesim..tail(3)`}/></ListGroup.Item>
            <ListGroup.Item><CodeBlockk code={`# Näytetään rivit 3 - 8 (sisältyy)
dataesim[3:9]`}/></ListGroup.Item>
            <ListGroup.Item><CodeBlockk code={`# Valitaan tietyn sarakkeen rivin 13 tiedot
print(dataesim.loc[13,"esimsarake"])`}/></ListGroup.Item>
            <ListGroup.Item><CodeBlockk code={`dataesim.sort_values(["sortaussarake"], ascending=False)`}/></ListGroup.Item>
            <ListGroup.Item><CodeBlockk code={`dataesim.dtypes`}/></ListGroup.Item>
            <ListGroup.Item><CodeBlockk code={`dataesim = dataesim[(dataesim["numsarake"] <= 12.0) & (dataesim["esimsarake"].str.startswith("A"))]`}/></ListGroup.Item>
            <ListGroup.Item><CodeBlockk code={`dataesim.to_csv("filtteröitydata.csv")`}/></ListGroup.Item>

    </ListGroup>
        </Card.Body>
        {/* <Card.Img variant="bottom" src={require('../assents/img/Irina.png')} style={{ alignSelf: 'center'}}/> */}
 </Card>
    
        </>
    )
    
    }
    export default Peruskomennot