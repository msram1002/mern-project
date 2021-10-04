import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import memories from './images/memories.png';
import MemoriesPosts from './components/MemoriesPosts/MemoriesPosts';
import MemoriesForm from './components/MemoriesForm/MemoriesForm';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar className={
      classes.appBar} position="static" color="inherit">
        <Typography className={
      classes.heading} variant="h3" align="center">
          Memories
        </Typography>
        <img src={memories} alt="memories" className={
      classes.img} height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <MemoriesPosts />
            </Grid>
            <Grid item xs={12} sm={7}>
              <MemoriesForm />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
};

export default App;