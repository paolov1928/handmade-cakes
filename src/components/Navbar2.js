import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: 'violet'
  },
  menuButton: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    color: 'violet'
  },
  socialButtons: {
    display: 'flex',
  },
}));

function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleChange(event) {
    setAuth(event.target.checked);
  }

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <AppBar color='red' position="static">
        <Toolbar>
          <div className="NavBarTitle">
          <p><b>Cakes by Effie Mae</b></p>
          </div>
          <div className={classes.socialButtons}>
          <a href="https://www.facebook.com/cakesbyeffiemae/" class="fa fa-facebook"></a>
          <a href="https://www.instagram.com/handmadecakesbyeffiemae/" class="fa fa-instagram"></a>
          </div>
          {auth && (
            <div className={classes.menuButton}>
              <IconButton
                aria-owns={open ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu

                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Gallery</MenuItem>
                <MenuItem onClick={handleClose}>Prices</MenuItem>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
              </Menu>

            </div>

          )}

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MenuAppBar;
