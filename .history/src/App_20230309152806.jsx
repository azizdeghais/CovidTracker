import React from 'react'

// import Cards from './components/Cards/Cards'
// import CountryPicker from './components/CountryPicker/CountryPicker'
// import Charts from './components/Chart/Chart'

// WE CAN INSTEAD DO THIS FOR THE 3 LINES ABOVE


import styles from './App.module.css'


import {Cards,Chart,CountryPicker} from './components'
function App() {

  return (
    <div className="App">
      <Cards />
      <CountryPicker/>
      <Chart/>
    </div>
  )
}

export default App
