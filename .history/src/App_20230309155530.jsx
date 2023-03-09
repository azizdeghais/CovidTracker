import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



function App() {

  const [latest,setLatest]=useState("")

  useEffect(()=>{
    axios
    .get('https://corona.lmao.ninja/v3/covid-19/all')
    .then(res=>{
           setLatest(res.data)    
    })
    .catch(err=>{
      console.log(err)
    })
  },[])


  return (
    <Container>
      <Row >
        <Col>
          <Card className='text-center' bg='secondary' text='white' style={{margin:'10px'}} >
            <Card.Body>
              <Card.Title>Cases</Card.Title>
              <Card.Text>
                {latest.cases}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              test
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className='text-center' bg='danger' text='white' style={{margin:'10px'}}>
            <Card.Body>
              <Card.Title>Deaths</Card.Title>
              <Card.Text>
                0
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              test
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className='text-center' bg='success' style={{margin:'10px'}} >
            <Card.Body>
              <Card.Title>Recovered</Card.Title>
              <Card.Text>
               99
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              test
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default App
