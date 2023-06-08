import React, { useEffect, useState } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import docter from "../../assets/images/doctor1.jpeg"
import rightDoc from "../../assets/images/rightDoc.jpeg"
import { display, margin } from "@mui/system";
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
  submitButton: {
    backgroundColor: '#0190B0',
    color: 'white',
    fontSize: 20,
    width: '230px',
    height: '57px',
    display: 'block',
    margin: 'auto',
    marginTop:'20px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  labelname: {
    fontSize:'12px',
    marginBottom:'-20px'
  },
  firstDiv: {
    display:'flex',
    flexDirection:'column',
    marginLeft:'5%',
    paddingTop:'5%',
    paddingBottom:'5%',
    [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
      },
  },
  rootDiv:{
    backgroundImage: `url(${rightDoc})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    alignItems:'center'
  },
  formDiv: {
    width: '100%',
    maxWidth: 654,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: 'white',
    [theme.breakpoints.down('sm')]: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      marginBottom: theme.spacing(2),
    },
  },
  image: {
    borderTopRightRadius: '10px', // Remove the top left border radius
    borderBottomRightRadius: '10px',
  },
  registerText: {
    fontSize:'32px',
    fontWeight:'bold',
    width:'150px',
    display:'block',
    margin:'auto'
  }
}));

function MyForm() {
  const classes = useStyles();
//   useEffect(()=>{
//     document.body.style.background='#F7F7F7'
//   },[])
  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
    field6: "",
    field7: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className={classes.rootDiv}>
    <div className={classes.firstDiv}>
    <div className={classes.formDiv}>
    <h3 className={classes.registerText}>Register</h3>
    <form onSubmit={handleSubmit} className={classes.form}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.labelname}>
            First Name
          </Typography>
          <TextField
            name="field1"
            variant="outlined"
            fullWidth
            value={formData.field1}
            onChange={handleInputChange}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.labelname}>
            Last Name
          </Typography>
          <TextField
            name="field2"
            variant="outlined"
            fullWidth
            value={formData.field2}
            onChange={handleInputChange}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.labelname}>
            CNIC
          </Typography>
          <TextField
            name="field3"
            variant="outlined"
            fullWidth
            value={formData.field3}
            onChange={handleInputChange}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.labelname}>
            Age
          </Typography>
          <TextField
            name="field4"
            variant="outlined"
            fullWidth
            value={formData.field4}
            onChange={handleInputChange}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.labelname}>
            Email Address
          </Typography>
          <TextField
            name="field5"
            variant="outlined"
            fullWidth
            value={formData.field5}
            onChange={handleInputChange}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.labelname}>
            Phone Number
          </Typography>
          <TextField
            name="field6"
            variant="outlined"
            fullWidth
            value={formData.field6}
            onChange={handleInputChange}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.labelname}>
            Password
          </Typography>
          <TextField
            name="field7"
            variant="outlined"
            fullWidth
            value={formData.field7}
            onChange={handleInputChange}
            className={classes.textField}
          />
        </Grid>
        <Typography variant="subtitle2" style={{marginTop:'50px', marginLeft:'80px'}}>
            Already have an account?{" "}
            <span style={{ textDecoration: "underline" }}>Login</span>
          </Typography>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submitButton}
          >
            Register
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

export default MyForm;
