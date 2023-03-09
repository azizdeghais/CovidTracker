import React, { useEffect } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



function App() {




  return (
    <Container>
      <Row >
        <Col>
          <Card bg='secondary' text='white' >
            <Card.Body>
              <Card.Title>Cases</Card.Title>
              <Card.Text>
                100
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              test
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card bg='danger' text='white' >
            <Card.Body>
              <Card.Title>Deaths</Card.Title>
              <Card.Text>
                0
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card >
            <Card.Body>
              <Card.Title>Recovered</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default App
