import React, { useState } from 'react'
import styles from './Section.module.css'
import Cards from '../Card/Cards'
import Carausel from '../Carausel/Carausel'
import { Grid } from '@mui/material'
const Section = ({data, title}) => {
    const[isCarausel, setIsCarausel] = useState(true)

   
  
    
    console.log('Data',data)
  return (
    <div className={styles.topAlbumContainer}>
        <div className={styles.buttonContainer}>

         <h2>{title}</h2> 
         <button onClick={() => setIsCarausel(!isCarausel)}>{isCarausel ? 'Show All' : 'Collapse'}</button> 
        </div>
       
            {/* {data.length>0?(data.map((items)=><Cards data={items}/>)):("No Data Available")} */}
{isCarausel ? (<Carausel data={data}/>) : ( <div className={styles.row}>{data.length && (data.map((items)=><Cards data={items}/>))}</div>)}

            {/* {isCarausel ? (<Carausel data={data}/>) : (data.length>0 && (data.map((items)=><Cards data={items}/>)):("No Data Available"))} */}
            
            
         {/* </div> */}
    {/* <Grid container spacing={2}>(data.length>0?{data.map((items)=>{return (Grid item md={2} key={items.id}><Cards data={items}/>)}</Grid> */}

    
</div>
  )
}

export default Section
