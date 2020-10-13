import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: '1rem',
    marginBottom: '3rem',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.1)',
      background: '#f6f6f6',
      transition: 'ease 0.5s'
    }
  },
  media: {
    height: '140px',
  },
});

const CardComponent = ({ title, text, image }) => {
  const classes = useStyles();

  return (
    <Card data-aos='flip-left' className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title='banner post'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardComponent;