import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
});

export default function Good(props) {
  const classes = useStyles();
  const {
    mainId,
    displayName,
    displayAssets,
    displayDescription,
    price,
    addOrder = Function.prototype
   } = props
   const finalPrice = price.finalPrice

  return (
    <Card className='card'  >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={displayAssets[0].full_background}
          title={displayName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {displayName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {displayDescription ? displayDescription : 'some description'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='card-item'>
        <Button size="small" color="primary" onClick={() => addOrder({mainId, displayName, finalPrice})}>
          Buy
        </Button>
        <Typography gutterBottom variant="h5" component="h2">
            {finalPrice} руб.
          </Typography>
      </CardActions>
    </Card>
  );
}