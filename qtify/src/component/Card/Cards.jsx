import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Tooltip } from '@mui/material';
import styles from './Card.module.css'
import Chip from '@mui/material/Chip';

const Cards = ({data,type}) => {
  const followText = data.follows+" Follows";
  const likeText = data.likes+" Likes"
  return (
    <Tooltip title={type==='album'?(data.songs.length+" songs"):("")} placement={type==='album' ? ("top") : ("")} arrow>
    <Box className={styles.cardContainer}>
      <Card className={styles.customCard}>
      <CardActionArea>
        <CardMedia
        className={styles.cardImage}
          component="img"
          height="170"
          image={data.image}
          alt={data.title}
        />
        <CardContent style={{padding:"8px"}}>
         <Chip className={styles.chipTest}  label={type==='album'?(followText):(likeText)}/>
          
        </CardContent>
      </CardActionArea>
    </Card>
     <Typography className={styles.cardText} gutterBottom variant="h5" component="div">
     {data.title}
   </Typography>
   
   </Box>
   </Tooltip>
  )
}

export default Cards
