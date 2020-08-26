import React from "react";
import { makeStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PlayArrowSharpIcon from "@material-ui/icons/PlayArrowSharp";
import PauseSharpIcon from "@material-ui/icons/PauseSharp";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function List({key, artist, title, image, duration}) {

    const classes = useStyles();
    return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={5}>
          <Paper className={classes.paper}>{artist}</Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}>{title}</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>{duration}</Paper>
        </Grid>
      </Grid>
    </div>
    )

      {/* Simone implementation - we can merge it but let's talk about it first
function List({ key, artist, title, image, duration, del }) {
  const [toggledRowPlay, setTogglerRowPlay] = React.useState(false);
  return (
    <div>
      <div onClick={() => setTogglerRowPlay(!toggledRowPlay)}>{toggledRowPlay ? <PauseSharpIcon /> : <PlayArrowSharpIcon />}</div>
      <p>{artist}</p>
      <p>{title}</p>
      <img src={image} width='150px' alt='Album Cover' />
      <p>{duration}</p>
    </div>
  );*/}
}

export default List;
