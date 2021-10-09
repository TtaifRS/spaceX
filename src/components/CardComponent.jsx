import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import ArticleIcon from '@mui/icons-material/Article';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';

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

export default function cardComponent({
  missonName,
  date,
  site,
  image,
  wikipedia,
  article,
  video,
  info,
  launchSuccess,
  rocketName,
  rocketType,
  nationality,
  manufacturer,
  payloadType,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: '#e3f2fd' }}>
      {/* Card Header */}
      <CardHeader
        title={missonName}
        subheader={date}
      />

      {/* Card Media */}
      {image
      && (
      <CardMedia
        component="img"
        height="auto"
        image={image}
        alt={rocketName}
      />
      )}

      {/* Card Content */}
      <CardContent>
        <Typography sx={{ fontSize: 14 }} variant="caption" color="text.secondary">
          Rocket Details
        </Typography>
        <Typography gutterBottom sx={{ fontSize: 32 }} variant="h1" component="div">
          {rocketName}
        </Typography>
        {info && (
        <Typography variant="body2" color="text.secondary">
          {info}
        </Typography>
        )}
      </CardContent>

      {/* Card Action */}
      <CardActions disableSpacing>
        {/* Icons */}
        <Link href={article} sx={{ ml: '5px' }} color="inherit">
          <ArticleIcon style={{ color: '#1e88e5' }} />
        </Link>
        <Link href={video} sx={{ ml: '5px' }} color="inherit">
          <YouTubeIcon style={{ color: 'red' }} />
        </Link>
        <Link href={wikipedia} sx={{ ml: '5px' }} color="inherit">
          <LanguageIcon style={{ color: '#6B6B6B' }} />
        </Link>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      {/* Details Content */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h5" gutterBottom>Details</Typography>
          <Typography variant="caption">
            Rocket Type
          </Typography>
          <Typography variant="h6">
            {rocketType}
          </Typography>
          <Typography variant="caption">
            Nationality
          </Typography>
          <Typography variant="h6">
            {nationality}
          </Typography>
          <Typography variant="caption">
            Manufacturer
          </Typography>
          <Typography variant="h6">
            {manufacturer}
          </Typography>
          <Typography variant="caption">
            Payload Type
          </Typography>
          <Typography variant="h6">
            {payloadType}
          </Typography>
          <Typography variant="caption">
            Launch Site
          </Typography>
          <Typography variant="h6">
            {site}
          </Typography>
          <Typography variant="subtitle1">
            Launch Success
          </Typography>
          {launchSuccess === true
            ? (
              <Typography>
                <CheckCircleIcon style={{ color: '#4caf50' }} />
              </Typography>
            )
            : (
              <Typography>
                <CancelIcon style={{ color: '#f44336' }} />
              </Typography>
            )}

        </CardContent>
      </Collapse>
    </Card>
  );
}

// import React from 'react';

// const CardComponent = () => (
//   <div>
//     Hi
//   </div>
// );

// export default CardComponent;
