import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Tostmsg() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(true);
  };



  
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar open={open} anchorOrigin={{ vertical:'bottom' ,horizontal:'right' }} autoHideDuration={1000}>
        <Alert severity="error" sx={{ width: '100%' }}>
          Email already prasent
        </Alert>
      </Snackbar>
      
    </Stack>
  );
}
