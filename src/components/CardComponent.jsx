import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  // const [accExpanded, setAccExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // const handleChange = (panel) => (event, isExpanded) => {
  //   setAccExpanded(isExpanded ? panel : false);
  // };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        // avatar={(
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     F
        //   </Avatar>
        // )}
        action={(
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        )}
        title="FalconSat"
        subheader="2006-03-24"
      />
      <CardMedia
        component="img"
        height="auto"
        image="https://images2.imgbox.com/40/e3/GypSkayF_o.png"
        alt="Paella dish"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} variant="caption" color="text.secondary">
          Rocket Details
        </Typography>
        <Typography gutterBottom sx={{ fontSize: 32 }} variant="h1" component="div">
          Falcon 1
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Engine failure at 33 seconds and loss of vehicle
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton li aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h5" gutterBottom>Details</Typography>
          <Typography variant="caption">
            Rocket Type
          </Typography>
          <Typography variant="h6"> Marlin A1 </Typography>
          <Typography variant="caption">
            Rocket Type
          </Typography>
          <Typography variant="h6"> Marlin A1 </Typography>
          <Typography variant="caption">
            Rocket Type
          </Typography>
          <Typography variant="h6"> Marlin A1 </Typography>
          <Typography variant="caption">
            Rocket Type
          </Typography>
          <Typography variant="h6"> Marlin A1 </Typography>
          <Typography variant="caption">
            Rocket Type
          </Typography>
          <Typography variant="h6"> Marlin A1 </Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}
