import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styles from './Filters.module.css'
import { getgenreData } from '../../api/service';
const Filters = ({applyFilter}) => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

const[tabData, setTabData]=useState([])

const genreData = async() =>{
    const resTab = await getgenreData();
    setTabData(resTab.data)
  }
     useEffect(() =>{
        genreData();
     },[])
const btnHandler = (key) =>{
applyFilter(key)
}

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label="Tabs where each tab needs to be selected manually"
        className={styles.filterContainer}
      >
        <Tab label="All" className={styles.customTab}/> 
        {tabData.length > 0 && tabData.map(item => <Tab label={item.label} className={styles.customTab}  onClick={() => btnHandler(item.key)}/>)}
      </Tabs>
    </Box>
  )
}

export default Filters
