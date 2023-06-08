import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import account1 from "../../assets/images/account3.png";

const useStyles = makeStyles((theme) => ({
    rootDiv: {
      backgroundColor:'white',
    },
    firstDiv: {
      position: "relative",
      width: "95%",
      margin: "auto",
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
    overlay: {
      position: "absolute",
      bottom: "-300px",
      left: "20px",
      width: "800px",
      padding: theme.spacing(2),
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      marginLeft: "150px",
      [theme.breakpoints.down("sm")]: {
        position: "static",
        width: "100%",
        marginLeft: "0",
      },
    },
    text: {
      marginLeft: "20px",
      marginBottom: "30px",
      fontSize: "20px",
    },
    img: {
      width: "350px",
      height: "300px",
      margin: "auto",
      display: "block",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "auto",
      },
    },
    personalInfo: {
      marginTop: "100px",
    },
  }));

function Account() {
  const classes = useStyles();

  return (
    <div className={classes.rootDiv}>
    <div className={classes.firstDiv}>
      <img src={account1} className={classes.img} alt="Account Image" />
      <Paper className={classes.overlay}>
        <Typography variant="h3" className={`${classes.text} ${classes.personalInfo}`}>
          Personal Information
        </Typography>
        <Typography variant="h3" className={classes.text}>
          Name:
        </Typography>
        <Typography variant="h3" className={classes.text}>
          Cnic:
        </Typography>
        <Typography variant="h3" className={classes.text}>
          Age:
        </Typography>
        <Typography variant="h3" className={classes.text}>
          Email Address:
        </Typography>
        <Typography variant="h3" className={classes.text}>
          Phone Number:
        </Typography>
      </Paper>
    </div>
    </div>
  );
}

export default Account;
