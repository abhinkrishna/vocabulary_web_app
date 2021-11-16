import { Box, Typography, Grid, Container, IconButton, TextField, Divider, } from "@mui/material";
import SearchIcon from '@mui/icons-material/SearchRounded';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from "@mui/styles";
import { useState } from "react";


function AppLayout({ title, subTitle, children }: any) {

  const classes = useStyles();

  const [ isSearching, setIsSearching ] = useState(false);

  const actionButton = ( <IconButton onClick={() => setIsSearching(!isSearching)} color="inherit"> {(isSearching) ? <CloseIcon /> : <SearchIcon/>} </IconButton> );

  const textField = <TextField type="text" label="Search" variant="standard" color="secondary" InputProps={{ className: classes.input }} InputLabelProps={{ className: classes.input }} autoFocus fullWidth />

  const titleField = <Typography variant="h6" className={classes.title}> Vocab </Typography>

  return (
    <div>
      {/* App Bar */}
      <Container>
        <header className={classes.header}>
          {(isSearching) ? textField : titleField}
          {actionButton}
        </header>
      </Container>

      <Grid container direction="row" justifyContent="center" alignItems="center">
        {/* Body */}
        <Grid item xs={12} md={10} lg={8} xl={6}>
          <Box className={classes.box}>
            <Typography variant="subtitle1" className={classes.subTitle}> {subTitle} </Typography>
            <Divider />
            {children}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles: Function = makeStyles((theme: any) => ({
  header: {
    width: '100%',
    height: '60px',
    padding: '1rem',
    color: '#FFFFFF',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fliexGrow: 1,
    fontWeight: 500,
    lineHeight: '60px',
  },
  subTitle: {
    padding: '1rem',
  },
  box: {
    width: '100%',
    height: '100vh',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#FFFFFF',
  },
  input: {
    color: '#FFFFFF !important',
    border: '0px solid #FFF',
  }
}));

export default AppLayout;

