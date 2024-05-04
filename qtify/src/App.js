//import logo from './logo.svg';
import './App.css';
import Hero from './component/Hero/Hero';
import Navbar from './component/Navbar/Navbar';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Section from './component/Section/Section';
import { useEffect, useState } from 'react';
import { getTopAlbumData } from './api/service';
import { getNewAlbumData } from './api/service';
import { getSongData } from './api/service';

function App() {
   const[topAlbum,setTopAlbum] = useState([])
   const[NewAlbum,setNewAlbum] = useState([])
   const[SongAlbum,setSongAlbum] = useState([])

   const topAlbumData = async() =>{
      const res = await getTopAlbumData();
      setTopAlbum(res)
   }
   const NewAlbumData = async() =>{
    const resData = await getNewAlbumData();
    setNewAlbum(resData)
 }
 const songData = async() =>{
  const resSong = await getSongData();
  setSongAlbum(resSong)
}
   useEffect(() =>{
    topAlbumData();
    NewAlbumData();
    songData();
   },[])

   
  return (
  <>

   <Navbar/>
   <Hero/>
   <Section data={topAlbum} title="Top Album" type="album"/>
   <Section data={NewAlbum} title="New Album" type="album"/>
   <Section data={SongAlbum} title="Songs" type="song"/>
   
    </>
  );
}

export default App;
