import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Card, CardActions, Grid, CardActionArea, CircularProgress, Paper } from '@mui/material';
import { ImageData } from '../helpers/ImageData';


export default function Projects() {
  return (
    <Grid container spacing={2} sx={{ width: '100%', mt: 3 , justifyContent: 'center'}}>
        {ImageData ? ImageData.map((item, index) => (                
        <Grid item component={Paper} elevation={0} sx={{ backgroundColor: 'transparent' }}>
            <CardActionArea >        
                    <img key={index}
                        src={`${item.img}?w=350&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=350&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        style={{ width: '20vw', height: '25vh',  borderRadius: '20px', objectFit: 'cover'}}
                        
                    />
            </CardActionArea>
            <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                position="below"
                sx={{ textAlign: 'left', paddingLeft: '5px' }}
            />
                
            
        </Grid>)) : <CircularProgress color="secondary" />}
    </Grid>
  );
}

