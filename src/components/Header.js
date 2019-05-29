import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  button: {
    margin: 4
  }
});

class Header extends Component {

  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.title}>
              Padroeira
            </Typography>
              <Button variant="contained" className={classes.button} color="default" onClick={this.props.calcFn}>Calcular</Button>
                <Button variant="contained" className={classes.button} color="secondary" onClick={this.props.clearFn}>Limpar</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  clearFn: PropTypes.func.isRequired,
  calcFn: PropTypes.func.isRequired,
};

export default withStyles(useStyles)(Header);