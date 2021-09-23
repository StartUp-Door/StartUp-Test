import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { DialogTitle, DialogContent, makeStyles,DialogActions } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({ 
   header:{
    color:'white',
    backgroundColor:'blue',
    margin:theme.spacing(10),
    marginTop:theme.spacing(5),
    marginLeft:theme.spacing(14),
    paddingTop:theme.spacing(-1),
    paddingRight:theme.spacing(5),
    paddingInline:theme.spacing(10),
  
   },
   dialogWrapper: {
    padding: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(5)
   },
   dialogTitle: {
    paddingRight: '0px'
}
  



}));


export default function SlipPayment({children,title}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div>
    
      <Button className={classes.header} variant="outlined" color="primary" onClick={handleClickOpen}>
        Upload Slip
      </Button>
   
      <Dialog aria-labelledby="customized-dialog-title" open={open} classes={{ paper: classes.dialogWrapper }}>
        <DialogTitle className={classes.dialogTitle} id="customized-dialog-title" onClose={handleClose}>
        {title}
        </DialogTitle>
        <DialogContent dividers>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
     
    </div>
  );
    
}
