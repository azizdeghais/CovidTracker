import React, { useEffect,useState } from 'react'

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from './components/PieChart';
import { Data } from './utils/Data';


import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';



import './App.css'
import Nav from './components/Nav';

function App() {

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#50AF95",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  })
  const [latest,setLatest]=useState([])
  const [results,setResults]=useState([])
  const [searchCountries,setSearchCountries]=useState('')


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

  const filterCountries=results.filter(item=>{
    return searchCountries !== ''
     ? item.country.includes(searchCountries)
     : item
   })

   const countries = filterCountries.map((data,i)=>{
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
    <>
    <Nav/>
    <Container>
      <PieChart chartData={Data}/>


      <Row className='mb-3'>
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
      <Form className='mb-3'>
      <Form.Group >
        <Form.Control
         type='text' 
         placeholder='Search any country'
         onChange={e=> setSearchCountries(e.target.value)} />
      </Form.Group>
      </Form>
      <div className='countries-list'>
      {countries}
      </div>


    </Container>
    </>
  )
}

export default App
