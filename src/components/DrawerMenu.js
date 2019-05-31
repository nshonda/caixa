import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';

const useStyles = theme => ({
  drawer: {
    width: '70%',
  },
  fullList: {
    width: 'auto',
  },
});

class DrawerMenu extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index) {
    this.props.visibleFn(index);
  }

  render(){
    const { classes } = this.props;
    const open = this.props.open;
    const products = this.props.products;
    return (
      <div className={classes.root}>
        <Drawer classes={{ paper: classes.drawer }}  anchor="left" open={open} onClose={this.props.closeFn}>
        <List subheader={<ListSubheader>Items</ListSubheader>} className={classes.root}>
        {products.map((product, index) => {
          return <ListItem key={index}>
          <ListItemText classes={{ primary: classes.list }} primary={ product.name } />
          <ListItemSecondaryAction>
          <Switch
            onChange={(e) => { this.handleChange(e, index) }}
            checked={product.visible}
            edge="end"
          />
        </ListItemSecondaryAction>
          </ListItem>
        })}
    </List>
        </Drawer>
      </div>
    );
  }
}

DrawerMenu.propTypes = {
  closeFn: PropTypes.func.isRequired,
  visibleFn: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  products: PropTypes.array.isRequired,
};

export default withStyles(useStyles)(DrawerMenu);