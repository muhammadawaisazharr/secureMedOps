import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Drawer,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import logout from "../../assets/images/logout.png";
import HomeIcon from "@material-ui/icons/Home";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import rightDoc from "../../assets/images/rightDoc.jpeg";
import Account from "../Account/account";
import OwnReports from "../OwnReports/ownreports";
import FamilyReports from "../familyreports/familyreport";
import SharedReports from "../../pages/sharedreports/shared"
import AddCustomize from "../addandcustomize/addcustomize";
import ArchiveReports from "../archive/archive";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      height: "100vh",
    },
    content: {
      flex: 1,
    },
    leftMenu: {
      width: drawerWidth,
      flexShrink: 0,
      backgroundColor: "white",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    drawer: {
      [theme.breakpoints.up("md")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    listItemText: {
      fontSize: "25px",
      marginTop: "20px",
      paddingLeft:'10px'
    },
    logoutDiv: {
      display: "block",
      margin: "auto",
      width: "130px",
    },
  }));

function LeftMenu() {
  const classes = useStyles();
  const [activePage, setActivePage] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  useEffect(()=>{
    console.log(activePage)
  },[window.localStorage.getItem('activePage')])
  const handleMenuClick = (page) => {
    setActivePage(page);
    window.localStorage.setItem('activePage',page)
    setDrawerOpen(false);
  };
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const activePagePersist=window.localStorage.getItem('activePage')
  console.log(activePagePersist)
  return (
    <div className={classes.container}>
      <div className={classes.leftMenu}>
        <List>
          <ListItem
            button
            onClick={() => handleMenuClick("Account")}
            selected={activePagePersist === "Account"}
          >
            <ListItemText
              primary={
                <Typography className={classes.listItemText}>
                  Account
                </Typography>
              }
            />
          </ListItem>
          <ListItem
          button
          onClick={() => handleMenuClick("Own Reports")}
          selected={activePagePersist === "Own Reports"}
        >
          <ListItemText
            primary={
              <Typography className={classes.listItemText}>
                Own Reports
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          button
          onClick={() => handleMenuClick("Family Reports")}
          selected={activePagePersist === "Family Reports"}
        >
          <ListItemText
            primary={
              <Typography className={classes.listItemText}>
                Family Reports
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          button
          onClick={() => handleMenuClick("Shared Reports")}
          selected={activePagePersist === "Shared Reports"}
        >
          <ListItemText
            primary={
              <Typography className={classes.listItemText}>
                Shared Reports
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          button
          onClick={() => handleMenuClick("Archive Reports")}
          selected={activePagePersist === "Archive Reports"}
        >
          <ListItemText
            primary={
              <Typography className={classes.listItemText}>
                Archive Reports
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          button
          onClick={() => handleMenuClick("AddCustomize")}
          selected={activePagePersist === "AddCustomize"}
        >
          <ListItemText
            primary={
              <Typography className={classes.listItemText}>
                Add & Customize
              </Typography>
            }
          />
        </ListItem>

          <div className={classes.logoutDiv}>
            <img src={logout} alt="Logout" height="83" width="83" />
            <h3
              style={{
                fontSize: "25px",
                marginTop: "-10px",
                marginLeft: "5px",
              }}
            >
              Logout
            </h3>
          </div>
        </List>
      </div>

      <div className={classes.content}>
      <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          className={classes.drawer}
          variant="temporary"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer}
        >
          <List>
          <ListItem
            button
            onClick={() => handleMenuClick("Account")}
            selected={activePage === "Account"}
          >
            <ListItemText
              primary={
                <Typography className={classes.listItemText}>
                  Account
                </Typography>
              }
            />
          </ListItem>
          <ListItem
          button
          onClick={() => handleMenuClick("Own Reports")}
          selected={activePage === "Own Reports"}
        >
          <ListItemText
            primary={
              <Typography className={classes.listItemText}>
                Own Reports
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          button
          onClick={() => handleMenuClick("Family Reports")}
          selected={activePage === "Family Reports"}
        >
          <ListItemText
            primary={
              <Typography className={classes.listItemText}>
                Family Reports
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          button
          onClick={() => handleMenuClick("Shared Reports")}
          selected={activePage === "Shared Reports"}
        >
          <ListItemText
            primary={
              <Typography className={classes.listItemText}>
                Shared Reports
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          button
          onClick={() => handleMenuClick("Archive Reports")}
          selected={activePage === "Archive Reports"}
        >
          <ListItemText
            primary={
              <Typography className={classes.listItemText}>
                Archive Reports
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          button
          onClick={() => handleMenuClick("AddCustomize")}
          selected={activePage === "AddCustomize"}
        >
          <ListItemText
            primary={
              <Typography className={classes.listItemText}>
                Add & Customize
              </Typography>
            }
          />
        </ListItem>

          <div className={classes.logoutDiv}>
            <img src={logout} alt="Logout" height="83" width="83" />
            <h3
              style={{
                fontSize: "25px",
                marginTop: "-10px",
                marginLeft: "5px",
              }}
            >
              Logout
            </h3>
          </div>
        </List>
        </Drawer>
        {activePage === "" ? (
          <img src={rightDoc} alt="Right Doc" width="100%" height="100%" />
        ) : (
          <div>
            {activePage === "Account" && <Account />}
            {activePage === "Own Reports" && <OwnReports />}
            {activePage === "Family Reports" && <FamilyReports />}
            {activePage==="Shared Reports" && <SharedReports />}
            {activePage==="AddCustomize" && <AddCustomize />}
            {activePage==="Archive Reports" && <ArchiveReports />}
            
          </div>
        )}
      </div>
    </div>
  );
}

export default LeftMenu;
