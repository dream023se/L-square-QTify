//import logo from './logo.svg';
import './App.css';
import Hero from './component/Hero/Hero';
import Navbar from './component/Navbar/Navbar';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Section from './component/Section/Section';
import { useEffect, useState } from 'react';
import { getTopAlbumData } from './api/service';
import { getNewAlbumData } from './api/service';


function App() {
   const[topAlbum,setTopAlbum] = useState([])
   const[NewAlbum,setNewAlbum] = useState([])

   const topAlbumData = async() =>{
      const res = await getTopAlbumData();
      setTopAlbum(res)
   }
   const NewAlbumData = async() =>{
    const resData = await getNewAlbumData();
    setNewAlbum(resData)
 }
   useEffect(() =>{
    topAlbumData();
    NewAlbumData();
   },[])

   
  return (
  <>

   <Navbar/>
   <Hero/>
   <Section data={topAlbum} title="Top Album"/>
   <Section data={NewAlbum} title="New Album"/>
   
    </>
  );
}

export default App;
