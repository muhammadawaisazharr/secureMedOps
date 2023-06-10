import React, { useEffect, useState } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import docter from "../../assets/images/loginDoc.jpeg";
import rightDoc from "../../assets/images/rightDoc.jpeg";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  form: {
    margin: "auto",
    maxWidth: 600,
    padding: theme.spacing(2),
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderWidth: "0 0 2px 0",
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },
  },
  textField1: {
    width:'482px',
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderWidth: "0 0 2px 0",
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },
  },
  submitButton: {
    backgroundColor: "#0190B0",
    color: "white",
    fontSize: 20,
    width: "230px",
    height: "57px",
    display: "block",
    margin: "auto",
    marginTop: "80px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  labelname: {
    fontSize: "12px",
    marginBottom: "-20px",
  },
  firstDiv: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "5%",
    paddingTop: "5%",
    paddingBottom: "5%",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  rootDiv: {
    backgroundImage: `url(${rightDoc})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    alignItems: "center",
  },
  formDiv: {
    width: "100%",
    maxWidth: 654,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "white",
    [theme.breakpoints.down("sm")]: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      marginBottom: theme.spacing(2),
    },
  },
  image: {
    borderTopRightRadius: "10px", // Remove the top left border radius
    borderBottomRightRadius: "10px",
  },
  registerText: {
    fontSize: "32px",
    fontWeight: "bold",
    width: "150px",
    display: "block",
    margin: "auto",
    marginTop:"30px"
  },
}));

function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history=useHistory()
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // console.log(formData);
  };

  return (
    <div className={classes.rootDiv}>
      <div className={classes.firstDiv}>
        <div className={classes.formDiv}>
          <h3 className={classes.registerText}>Login</h3>
          <form onSubmit={handleSubmit} className={classes.form}>
            <Grid container spacing={3} sx={{marginTop:'20px'}}>

              <Grid item xs={12} sm={7}>
                <Typography
                  variant="h6"
                  gutterBottom
                  className={classes.labelname}
                >
                  Email Address
                </Typography>
                <TextField
                  name="field5"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={classes.textField1}
                />
              </Grid>

              <Grid item xs={12} sm={6} sx={{marginTop:'20px'}}>
                <Typography 
                  sx={{marginTop:'20px'}}
                  variant="h6"
                  gutterBottom
                  className={classes.labelname}
                >
                  Password
                </Typography>
                <TextField
                  name="field7"
                  variant="outlined"
                  fullWidth
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  className={classes.textField}
                />
              </Grid>
              <Typography
               onClick={()=>history.push('/register')}
                variant="subtitle2"
                style={{ marginTop: "50px", marginLeft: "60px" }}
              >
                New User?{" "}
                <span style={{ textDecoration: "underline" }}>Register</span>
              </Typography>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submitButton}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
        <img src={docter} width="656" height="450" className={classes.image} />
      </div>
    </div>
  );
}

export default Login;
