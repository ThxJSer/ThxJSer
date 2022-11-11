import React from "react"

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const CustomizeDialog = (props) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
    <div>
        <Button style={{display:'none'}} id="customize_dialog_open" variant="outlined" onClick={handleClickOpen}>
            Open alert dialog
        </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {props.title}
            </DialogTitle>
            <DialogContent>
                {props.body}
            </DialogContent>
            <DialogActions>
                <Button id="customize_dialog_close" onClick={handleClose} autoFocus>
                    close
                </Button>
            </DialogActions>
        </Dialog>
    </div>
    );
}

export { CustomizeDialog }