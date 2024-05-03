//import logo from './logo.svg';
import './App.css';
import Hero from './component/Hero/Hero';
import Navbar from './component/Navbar/Navbar';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Section from './component/Section/Section';
import { useEffect, useState } from 'react';
import { getTopAlbumData } from './api/service';
function App() {
   const[topAlbum,setTopAlbum] = useState([])

   const topAlbumData = async() =>{
      const res = await getTopAlbumData();
      setTopAlbum(res)
   }
   useEffect(() =>{
    topAlbumData()
   },[])
  return (
  <>

   <Navbar/>
   <Hero/>
   <Section data={topAlbum}/>
   
    </>
  );
}

export default App;
