import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';

import './App.css'


function App() {

  const [latest,setLatest]=useState([])
  const [results,setResults]=useState([])


  useEffect(()=>{
    axios.all([
      axios.get('https://corona.lmao.ninja/v3/covid-19/all'),
      axios.get('https://corona.lmao.ninja/v3/covid-19/countries')
  ])
    
    .then(resArr=>{
           setLatest(resArr[0].data)    
           setResults(resArr[1].data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])

  const date=new Date(parseInt(latest.updated));
  const lastUpdated=date.toString();



   const countries = results.map((data,i)=>{
    return (
      <Card 
      key={i}
      bg='light'
      text='dark'
      className='text-center'
      style={{margin:'10px'}}
      >
        <Card.Img variant='top' src={data.countryInfo.flag} />
      <Card.Body>
        <Card.Title>{data.country}</Card.Title>
        <Card.Text>Cases: {data.cases}</Card.Text>
        <Card.Text>Deaths: {data.deaths}</Card.Text>
        <Card.Text>Recovered: {data.recovered}</Card.Text>
        <Card.Text>Today's cases: {data.todayCases}</Card.Text>
        <Card.Text>Today's deaths: {data.todayDeaths}</Card.Text>
        <Card.Text>Active {data.active}</Card.Text>
        

      </Card.Body>

      </Card>

    )
   })
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
              <small>Last updated {lastUpdated}</small>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className='text-center' bg='danger' text='white' style={{margin:'10px'}}>
            <Card.Body>
              <Card.Title>Deaths</Card.Title>
              <Card.Text>
                {latest.deaths}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small>Last updated {lastUpdated}</small>

            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className='text-center' bg='success' style={{margin:'10px'}} >
            <Card.Body>
              <Card.Title>Recovered</Card.Title>
              <Card.Text>
               {latest.recovered}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small>Last updated {lastUpdated}</small>

            </Card.Footer>
          </Card>
        </Col>
      </Row>
      <Form>
      <Form.Group>
        <Form.Control type='text' placeholder='Search any country' />
      </Form.Group>
      </Form>
      <div className='countries-list'>
      {countries}
      </div>


    </Container>
  )
}

export default App
