import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Nav = () => {
  return (
    <>
    
    <Navbar bg="dark" variant="dark" className='mb-5'>
      <Container>
        <Navbar.Brand href="#home">
        <img src="https://img.icons8.com/color/48/null/coronavirus--v1.png"/>
          Covid-19 TRACKER
        </Navbar.Brand>
      </Container>
    </Navbar>
  </>
  )
}

export default Nav