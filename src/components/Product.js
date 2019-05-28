import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CurrencyFormat from 'react-currency-format';
import NumericInput from 'react-numeric-input';

const useStyles = theme => ({
  card: {
    minWidth: 275,
    margin: '16px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class Product extends Component{

  render() {
    const { classes } = this.props;
    const product = this.props.product;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            
          </Typography>
          <Typography variant="h5" component="h2">
           {product.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <CurrencyFormat value={product.value} decimalSeparator={','} decimalScale={2} fixedDecimalScale={true} isNumericString={true} displayType={'text'} prefix={'R$'} />

          </Typography>
          <NumericInput min={0} max={100} value={0} onChange={this.props.handleChange(this.props.key)}/>
        </CardContent>
      </Card>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Product);