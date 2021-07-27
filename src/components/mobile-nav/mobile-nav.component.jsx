import React, { useState } from 'react';
import './mobile-nav.styles.css';

import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

const styles = (theme) => ({
  root: {

    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[1000],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);


export default function MobileNavbar({handleClose, open}) {

  const [openDropdown, setDropDown] = useState(false);

  const handleDropDown = () => {
    setDropDown(!openDropdown);
  }

  return (
    <div > 
      <Dialog fullScreen onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} className="mobile-nav-container">
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          iHelp
        </DialogTitle>
        <DialogContent dividers>
            <div className="mobile-links">
              <div className="products-mobile">
                <Link to="#" onClick={handleDropDown}>Products</Link>
                <div className={openDropdown !== false ? "mobile-dropdown-links" : "link-display-none"}>
                  <Link to="/accessories">Accesories</Link>
                  <Link to="/apple-watch">Apple Watch </Link>
                  <Link to="/ipad">Ipad</Link>   
                  <Link to="/iphone">Iphone</Link>       
                  <Link to="/macbook">MacBook</Link>       
                </div>
              </div>
              <Link to="/services">Repairs</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/contact-us">Contact Us</Link>
            </div>
            
        </DialogContent>
      </Dialog>
    </div>
  );
}