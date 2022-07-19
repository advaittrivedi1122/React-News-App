import * as React from 'react';
import {memo} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../Styles/NewsItem.css';
// import { a } from 'react-router-dom';

function MultiActionAreaCard(props) {
  return (
    <Card className='NewsItem'>
      <CardActionArea>
        <CardMedia
          className="image"
          component="img"
          height="140"
          image= {props.image}
          style={{objectFit:"contain"}}
          alt="Image"
        />
        {/* <img src={props.image} alt="" /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.content}
          </Typography>
          <br />
          <Typography>
            {/* Source: {props.source} */}
          </Typography>
          <br />
          <Typography>
            {/* Date: {props.date} */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='btn'>
        <a className="link" href={props.readMore} target="blank">
          <Button size="small" variant="contained" color="primary">
            Read More
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}

export default memo(MultiActionAreaCard);