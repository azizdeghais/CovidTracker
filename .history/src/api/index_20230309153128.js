import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

const fetchData = async ()=>{

   try{
      const reponse = await axios.get(url)
      console.log(response)
   }catch{

   }

}