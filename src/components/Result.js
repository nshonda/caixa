import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import CurrencyFormat from 'react-currency-format';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import purple from '@material-ui/core/colors/purple';
import teal from '@material-ui/core/colors/teal';
import orange from '@material-ui/core/colors/orange';

const useStyles = theme => ({
  appBar: {
    position: 'fixed',
  },
  root: {
    padding: theme.spacing(3, 2),
  },
  rootTotal: {
    marginTop: 50,
    padding: theme.spacing(3, 2),
    position: 'fixed',
    width: '100%',
    borderRadius: 0,
    zIndex: 1
  },
  rootPedidos: {
    marginTop: 120,
    padding: theme.spacing(3, 2),
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  span: {
    marginLeft: 4
  },
  list: {
    fontSize: 20
  },
  1: {
    margin: 10,
    color: '#fff',
    backgroundColor: purple[500],
  },
  2: {
    margin: 10,
    color: '#fff',
    backgroundColor: teal[500],
  },
  5: {
    margin: 10,
    color: '#fff',
    backgroundColor: orange[500],
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class Result extends Component{

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event){
    this.props.handleChange(event, this.props.id);

  }
  render() {
    const { classes } = this.props;
    const open = this.props.open;
    const products = this.props.products;
    const total = this.props.total;
    const chips = this.props.chips;
    const toggleFn = this.props.toggleFn;

    return (
      <Dialog fullScreen open={open} onClose={toggleFn} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={toggleFn} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Resultado
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper className={classes.rootTotal}>
        <Typography variant="h5" component="h3">
          Total: 
          <span className={classes.span}><CurrencyFormat value={total} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true} isNumericString={true} displayType={'text'} prefix={'R$'} /></span>
        </Typography>
      </Paper> 
          <Divider />
        <Paper className={classes.rootPedidos}>
        <Typography variant="h6" component="h3">
          Items Pedidos
        </Typography>
        <List>
        {products.map((product, index) => {
        if(product.amount > 0 && product.visible){ 
          return <ListItem key={index}>
          <ListItemText classes={{ primary: classes.list }} primary={ product.amount + ' - ' + product.name } />
          </ListItem>}
          else return null;
      })}
        </List>
      </Paper>

      <Divider />
      <Paper className={classes.root}>
        <Typography variant="h6" component="h3">
          Distribuição das Fichas
        </Typography>
        <List>
        {Object.keys(chips).map((chip, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar className={classes[chip]}>{ chip }</Avatar>
          </ListItemAvatar>
          <ListItemText classes={{ primary: classes.list }} primary={ chips[chip] } />
        </ListItem>
      ))}
        </List>
      </Paper>
      </Dialog>
    );
  }
}

Result.propTypes = {
  products: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  chips: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  toggleFn: PropTypes.func.isRequired,
};

export default withStyles(useStyles)(Result);