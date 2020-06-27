import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';

export default function AlertDialog({ open, handleClose, data: { confirmed, recovered, deaths } }) {
  console.log(confirmed)
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"India Stats"}</DialogTitle>
        <DialogContent>
          {open ? (<DialogContentText id="alert-dialog-description">
            <Typography>Recovery% is {Math.trunc(recovered.value / confirmed.value * 100)}%.</Typography>
            <Typography>Death% is {Math.trunc(deaths.value / confirmed.value * 100)}%.</Typography>
          </DialogContentText>) : <DialogContentText id="alert-dialog-description">
              No Stats Available.
          </DialogContentText>}
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
