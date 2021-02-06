import React from 'react';
import CodeIcon from "@material-ui/icons/Code";
import { Tooltip, IconButton, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@material-ui/core";

type Props = {
  isReadonly: boolean;
  raw: string;
  onChangeRaw: (raw: string) => void;
};

function Raw(props: Props) {
  const [open, setOpen] = React.useState(false);
  const [rawValue, setRawValue] = React.useState("");

  const handleSelectRawValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue =
      event.target.value && event.target.value !== "" ? event.target.value : "";
    console.log("new rawValue " + newValue);
    setRawValue(newValue);
  };

  const handleClickRawOpen = () => {
    setOpen(true);
    setRawValue(props.raw);
  };

  const handleRawCancel = () => {
    setOpen(false);
    setRawValue("");
  };

  const handleRawSet = () => {
    setOpen(false);

    props.onChangeRaw(rawValue);
    setRawValue("");
  };

  return (
    <div>
      <Tooltip title="Show the full source. Copy/Paste enabled.">
        <IconButton
          aria-label="raw"
          aria-haspopup="true"
          color="inherit"
          onClick={handleClickRawOpen}
        >
          <CodeIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xs"
        fullWidth
        aria-labelledby="confirmation-dialog-title"
        open={open}
      >
        <DialogTitle id="confirmation-dialog-title">Raw</DialogTitle>
        <DialogContent dividers>
          <TextField
            id="value-textfield"
            label="Value"
            size="small"
            fullWidth
            multiline
            value={rawValue}
            onChange={handleSelectRawValue}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleRawCancel} color="primary">Cancel</Button>
          <Button
            onClick={handleRawSet}
            color="primary"
            disabled={props.isReadonly}>Set</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Raw;
