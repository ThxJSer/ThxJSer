import React from "react"

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AlertDialog = (props) => {

    const data = props.data;
  
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
    <div>
        <Button id="alert_dialog" style={{display:'none'}} variant="outlined" onClick={handleClickOpen}>
            Open alert dialog
        </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {data.title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {data.body}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {

                    handleClose();
                    props.disagreeCallback();

                }}>
                    Disagree
                </Button>
                <Button onClick={() => {

                    handleClose();
                    props.agreeCallback();

                }} autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    </div>
    );
}

export { AlertDialog }