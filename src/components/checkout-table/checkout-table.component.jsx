import React from 'react';
import './checkout-table.styles.css';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ClearIcon from '@material-ui/icons/Clear';

import { connect } from 'react-redux';
import { addItem, removeItem, clearCartItem } from '../../redux/cart/cart-actions';
import { Link } from 'react-router-dom';

const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
      fontFamily:'Poppins'
    },
}))(TableCell);

const CheckoutTable = ({ cartItems, addItem, removeItem, clearCartItem, cartTotal }) => {
    return (
        <div className="checkout-page-table">
              <TableContainer component={Paper}>
                <Table className="hello" aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Item</StyledTableCell>
                      <StyledTableCell align="right">Quantity</StyledTableCell>
                      <StyledTableCell align="right">Price&nbsp;(USD)</StyledTableCell>
                      <StyledTableCell align="right"></StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cartItems.map((item) => (
                      <StyledTableRow >
                        <StyledTableCell component="th" scope="row">
                          {item.title}
                        </StyledTableCell>
                        <StyledTableCell align="right"><ChevronLeftIcon onClick={() => removeItem(item)} className="table-icons"/> <span className="quantity">{item.quantity}</span> <ChevronRightIcon onClick={() => addItem(item)} className="table-icons"/></StyledTableCell>
                        <StyledTableCell align="right">{item.price}</StyledTableCell>
                        <StyledTableCell align="right"><ClearIcon onClick={() => clearCartItem(item)} className="table-icons"/></StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <div className="total">
                    <h2>Total: ${cartTotal}</h2>
                    
              </div>
          </div>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems,
    cartTotal: state.cart.cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.price * cartItem.quantity, 0)
})

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    clearCartItem: (item) => dispatch(clearCartItem(item))
})
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutTable);