import React, { useEffect } from 'react'
import axios from 'axios'
import Cards from './components/Cards/Cards'
import CountryPicker from './components/CountryPicker/CountryPicker'
import Chart from './components/Chart/Chart'
import { fetchData } from './api'


import styles from './App.module.css'



function App() {

  useEffect(async()=>{
      const data = await fetchData();
      console.log(data)
  },[])


  return (
    <div className={styles.container}>
      <Cards />
      <CountryPicker/>
      <Chart/>
    </div>
  )
}

export default App
