import React, { useState } from 'react'
import styles from './Section.module.css'
import Cards from '../Card/Cards'

const Section = ({data, title}) => {
    const[isCarausel, setIsCarausel] = useState(true)
    
    console.log('Data',data)
  return (
    <div className={styles.topAlbumContainer}>
        <div className={styles.buttonContainer}>

         <h2>{title}</h2> 
         <button onClick={() => setIsCarausel(!isCarausel)}>{isCarausel ? 'Show All' : 'Collapse'}</button>  
        </div>
        <div className={styles.row}>
            {data.length>0?(data.map((items)=><Cards data={items}/>)):("No Data Available")}
         </div>
    

    
</div>
  )
}

export default Section
