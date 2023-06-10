import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import family from "../../assets/images/family.png";
import { Grid, Box } from "@material-ui/core";
import folder1 from "../../assets/images/folder2.png";
import archive from "../../assets/images/archive.png";
import add from "../../assets/images/add.png";
import share from "../../assets/images/share.png";
import ReactRoundedImage from "react-rounded-image"
import rightDoc from "../../assets/images/rightDoc.jpeg"

const useStyles = makeStyles((theme) => ({
  rootDiv: {
    height: "100vh",
    backgroundImage: `url(${rightDoc})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    alignItems: "center",
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
    bottom: "-520px",
    left: "20px",
    width: "800px",
    padding: theme.spacing(2),
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    marginLeft: "150px",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      position: "static",
      width: "100%",
      marginLeft: "0",
    },
  },
  text: {
    marginLeft: "20px",
    marginBottom: "30px",
  },
  img: {
    width: "111px",
    height: "111px",
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
  gridContainer: {
    marginTop: theme.spacing(10),
  },
  verticalLine: {
    borderRight: "1px solid",
    borderColor: theme.palette.primary.main,
    height: "68%",
    position: "absolute",
    right: 170,
    top: 110,
    [theme.breakpoints.down('sm')]:{
        marginTop: theme.spacing(40),
        height:'80%'
    }
  },
  iconsDiv: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "90px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginBottom: theme.spacing(100),
    },
  },
  iconContainer: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      flexBasis: "33.33%",
    },
  },
  circle: {
    background: '#F7F7F7',
    borderRadius: '50%',
    width: '200px',
    height: '130px',
    alignItems:'center',
    paddingTop:'30px'
}
}));

function VerticalLine() {
  const classes = useStyles();

  return <Box className={classes.verticalLine} />;
}

function SharedReports() {
  const classes = useStyles();
  const sampleData = [
    "Folder 1",
    "Folder 2",
    "Folder 3",
    "Folder 4",
    "Folder 5",
    "Folder 6",
    "Folder 7",
    "Folder 8",
    "Folder 9",
    "Folder 10",
    "Folder 11",
    "Folder 12",
  ];
  const pairsOfFour = [];

  for (let i = 0; i < sampleData.length; i += 4) {
    const pair = sampleData.slice(i, i + 4);
    pairsOfFour.push(pair);
  }

  return (
    <div className={classes.rootDiv}>
      <div className={classes.firstDiv}>
      <div className={classes.circle}>
        <img src={share} className={classes.img} alt="Account Image" />
        </div>
        <Paper className={classes.overlay}>
          <Grid container spacing={2} className={classes.gridContainer}>
            {pairsOfFour.map((pair, index) => (
              <React.Fragment key={index}>
                {pair.map((folder, folderIndex) => (
                  <Grid key={folderIndex} item xs={12} sm={6} md={3}>
                    <img
                      src={folder1}
                      width="98"
                      height="109"
                      className={classes.text}
                    />
                    {/* <Typography variant="body1">{folder}</Typography> */}
                  </Grid>
                ))}
              </React.Fragment>
            ))}
          </Grid>
        </Paper>
      </div>
    </div>
  );
}

export default SharedReports;
