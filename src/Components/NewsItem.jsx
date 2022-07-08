import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../Styles/NewsItem.css';
import { a } from 'react-router-dom';

export default function MultiActionAreaCard(props) {
  return (
    <Card className='NewsItem'>
      <CardActionArea>
        <CardMedia
          className="image"
          component="img"
          height="140"
          image= {props.image}
          alt="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.content}
          </Typography>
          <br />
          <Typography>
            Source: {props.source}
          </Typography>
          <br />
          {/* <Typography>
            Source: {props.date}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a className="link" href={props.readMore}>
          <Button size="small" variant="contained" color="primary">
            Read More
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
