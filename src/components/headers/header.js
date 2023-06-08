import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import stethoscope from "../../assets/images/stothoscope.png";
import search from "../../assets/images/search.png";
import { NavLink } from "react-router-dom";
import { spacing } from "@mui/system";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useHistory } from "react-router-dom";
const pages = [
  "Home",
  "About US",
  "Pages",
  "Supported Services",
  "Supported Labs",
  "Contact Us",
];
const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#0190B0",
    color: "white",
    borderBottom: "1px solid black",
  },
  brand: {
    flexGrow: 1,
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  imgAndText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "10px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "20px",
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: "63px",
    },
  },
  innerDiv: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "20px",
  },
  text: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "black",
    marginTop: "0",
    marginBottom: "0",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  },
  search: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: "50px",
  },
  mainDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  brandBackground: {
    backgroundColor: "#226782",
    padding: "20px",
    marginLeft: "-25px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0",
      height: "100%",
      borderRadius: "0",
      padding: "17px",
    },
  },
  secondNavBar: {
    backgroundColor: "#F5F5F5",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
      display: "flex",
      flexDirection: "column",
    },
  },
  links: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    margin: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
      display: "flex",
      flexDirection: "column",
    },
  },
  firstLink: {
    marginLeft: "96px",
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
      display: "flex",
      flexDirection: "column",
    },
  },
  accountbutton: {
    backgroundColor: "#0190B0",
    width: "230px",
    height: "47px",
  },
}));
function Header(props) {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const history = useHistory();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    if (e.currentTarget.id.includes("Labs")) {
      history.push("supportedlabs");
    } else if (e.currentTarget.id.includes("Services")) {
      history.push("supportedservices");
    } else {
      history.push(`${e.currentTarget.id}`);
    }
    setAnchorElNav(null);
  };
  // const path=window.location.pathname.slice('1').charAt(0).toUpperCase()+window.location.pathname.slice('2')
  return (
    <>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.brand}>
            <span className={classes.brandBackground}>{props.path}</span>
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.mainDiv}>
        <div className={classes.imgAndText}>
          <img src={stethoscope} width="117" height="117" />
          <div className={classes.innerDiv}>
            <h2 className={classes.text}>Secure</h2>
            <h3 className={classes.text}>MedOps</h3>
          </div>
        </div>
        <div className={classes.search}>
          <h4>search</h4>
          <img
            src={search}
            width="29"
            height="29px"
            style={{ marginLeft: "10px" }}
          />
        </div>
      </div>
      <AppBar position="static" className={classes.secondNavBar}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} id={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {(window.location.pathname.includes('profile')) && <Button
              sx={{
                backgroundColor: "#0190B0",
                width: "230px",
                height: "47px",
                color:'white',
                fontSize:'20px'
              }}
            >
              Welcome Mr. XYZ
            </Button> }
              {pages.map((page) => (
                <Button
                  id={page}
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "black",
                    display: "block",
                    fontSize: "17px",
                    marginLeft: "60px",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
           {(!window.location.pathname.includes('profile')) && <Button
              sx={{
                backgroundColor: "#0190B0",
                width: "230px",
                height: "47px",
                color:'white',
                fontSize:'20px'
              }}
            >
              Register/Login
            </Button> }
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
