import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import animateScrollTo from 'animated-scroll-to';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: "violet"
  },
  menuButton: {
    backgroundColor: "violet",
    color: "white",
    display: "flex",
    width: "13vw",
    justifyContent: "center",
    maxWidth: "97px"
  },
  socialButtons: {
    display: "flex"
  }
}))

function MenuAppBar() {
  const classes = useStyles()
  const [auth, setAuth] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  function handleChange(event) {
    console.log(event.target.checked)
  }

  function handleMenu(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }


  return (
    <div className={classes.root}>
      <AppBar color="red" position="static">
        <Toolbar>
          <div className="NavBarTitle">
            <p>
              <b>Cakes by Effie Mae</b>
            </p>
          </div>
          <div className={classes.socialButtons}>
            <a
              href="https://www.facebook.com/cakesbyeffiemae/"
              class="fa fa-facebook"
            />
            <a
              href="https://www.instagram.com/handmadecakesbyeffiemae/"
              class="fa fa-instagram"
            />
            <div className={classes.menuButton}>
              <IconButton
                aria-owns={open ? "menu-appbar" : undefined}
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
                  vertical: "top",
                  horizontal: "right"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={()=>{
                    setAnchorEl(null)
                    animateScrollTo(document.querySelector('.scroll-gallery'))}}>Gallery</MenuItem>
                <MenuItem onClick={()=>{
                    setAnchorEl(null)
                    animateScrollTo(document.querySelector('.scroll-insta'))}}>Instagram</MenuItem>
                <MenuItem onClick={()=>{
                    setAnchorEl(null)
                    animateScrollTo(document.querySelector('.scroll-prices'))}}>Prices</MenuItem>
                <MenuItem onClick={()=>{
                    setAnchorEl(null)
                    animateScrollTo(document.querySelector('.scroll-form'))}}>Contact</MenuItem>
              </Menu>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default MenuAppBar
