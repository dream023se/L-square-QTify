import React, { useEffect, useState } from 'react'
import styles from './Section.module.css'
import Cards from '../Card/Cards'
import Carausel from '../Carausel/Carausel'
import { Grid } from '@mui/material'
import Filters from '../filters/Filters'
const Section = ({data, title,type}) => {
    const[isCarausel, setIsCarausel] = useState(true)
const[allData, setAllData] = useState([])
   const getFilterData = (key) =>{
    if(key !== 'All'){
        const filteredData = data.filter(elem => elem.genre.key === key);
        setAllData(filteredData)
    }else{
        setAllData(data)
    }
   }
  useEffect(() =>{
    setAllData(data)
  },[data])
    
    console.log('Data',data)
  return (
    <div className={styles.topAlbumContainer}>
        <div className={styles.buttonContainer}>

         <h2>{title}</h2> 
         {type === 'album' ? (<button onClick={() => setIsCarausel(!isCarausel)}>{isCarausel ? 'Show All' : 'Collapse'}</button> ) : ('')}
         
 
        </div>
        {type === 'song' ? (<Filters applyFilter={getFilterData}/>) : ('')}
            {/* {data.length>0?(data.map((items)=><Cards data={items}/>)):("No Data Available")} */}
{isCarausel ? (<Carausel type={type} data={allData}/>) : ( <div className={styles.row}>{data.length && (data.map((items)=><Cards data={items} type={type}/>))}</div>)}

            {/* {isCarausel ? (<Carausel data={data}/>) : (data.length>0 && (data.map((items)=><Cards data={items}/>)):("No Data Available"))} */}
            
            
         {/* </div> */}
    {/* <Grid container spacing={2}>(data.length>0?{data.map((items)=>{return (Grid item md={2} key={items.id}><Cards data={items}/>)}</Grid> */}

    
</div>
  )
}

export default Section
