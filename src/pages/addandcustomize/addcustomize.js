import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import family from "../../assets/images/family.png";
import { Box } from "@material-ui/core";
import folder1 from "../../assets/images/folder2.png";
import archive from "../../assets/images/archive.png";
import add from "../../assets/images/add.png";
import settings from "../../assets/images/settings.png";
import ReactRoundedImage from "react-rounded-image";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { MenuItem, FormControl, InputLabel } from "@mui/material";
import Select from "react-select";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Chart from "react-google-charts";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryLabel,
  VictoryTheme,
} from "victory";
import * as d3 from "d3";
import "reactochart/styles.css";
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
    bottom: "-400px",
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
    width: "189px",
    height: "141px",
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
    left: 300,
    top: 80,
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(40),
      height: "80%",
    },
  },
  iconsDiv: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "90px",
    marginBottom: "100px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginBottom: theme.spacing(100),
    },
  },
  iconContainer: {
    textAlign: "center",
    position: "relative",
    left: 300,
    [theme.breakpoints.down("sm")]: {
      flexBasis: "33.33%",
    },
  },
  circle: {
    background: "white",
    borderRadius: "50%",
    width: "189px",
    height: "141px",
  },
  textfeild: {
    display: "flex",
    flexDirection: "row",
  },
  wrapfields: {
    display: "flex",
    flexDirection: "column",
    marginTop: "100px",
    marginLeft: "20px",
  },
  label: {
    fontSize: "20px",
    marginLeft: "5px",
  },
  datePicker: {
    display: "none",
  },
  charts: {
    marginBottom: "-170px",
  },
  chartContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "-90px",
  },
  chartContainerpie: {
    marginBottom:'-160px'
  }
}));

function VerticalLine() {
  const classes = useStyles();

  return <Box className={classes.verticalLine} />;
}

function AddCustomize() {
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
  ];
  const pairsOfFour = [];

  for (let i = 0; i < sampleData.length; i += 3) {
    const pair = sampleData.slice(i, i + 3);
    pairsOfFour.push(pair);
  }
  const [selectedFile, setSelectedFile] = useState(null);
  const [flag, setFlag] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleButtonClick = () => {
    document.getElementById("file-input").click();
  };
  const handleStartClick = () => {
    document.getElementById("start").click();
  };
  const handleEndClick = () => {
    document.getElementById("end").click();
  };
  const handleUpload = () => {
    console.log("Uploading file:", selectedFile);
  };
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const data = [
    { x: '0', y: '0' },
    { x: '200', y: '2' },
    { x: '400', y: '4' },
    { x: '600', y: '6' },
    { x: '800', y: '8' },
    { x: '1000', y: '10' },
  ];
  const options = [
    { value: "bar", label: "Bar Chart" },
    { value: "pie", label: "Pie Chart" },
    { value: "line", label: "line" },
  ];
  const pieData = [
    ["Task", "Hours per Day"],
    ["0", 0],
    ["2", 200],
    ["4", 400],
    ["6", 600],
    ["8", 800],
    ["10", 1000],
  ];
  const pieOptions = {
    title: "Quiz Results",
    pieHole: 0.4,
  };

  const options1 = {
    scales: {
      x: {
        type: "category",
        labels: [1, 2, 3, 4, 5, 6, 7],
      },
    },
  };

  const [selectedOption, setSelectedOption] = useState(null);
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "180px",
      border: "none",
      borderBottom: "1px solid #000",
      borderRadius: 0,
      boxShadow: "none",
      "&:hover": {
        borderBottom: "1px solid #000",
      },
    }),
    menu: (provided, state) => ({
      ...provided,
      marginTop: 0,
      borderRadius: 0,
      boxShadow: "none",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    indicatorsContainer: () => ({
      display: "none",
    }),
  };

  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  console.log(selectedOption);
  return (
    <div className={classes.rootDiv}>
      <div className={classes.firstDiv}>
        <div className={classes.circle}>
          <img src={settings} className={classes.img} alt="Account Image" />
        </div>
        <Paper className={classes.overlay}>
          {flag && selectedOption.value === "bar" ? (
            <div className={classes.charts}>
              <h3 style={{ marginBottom: "10px", fontSize: "10px" }}>
                1 unit = 500 platelets/micro-liter
              </h3>
              <div className={classes.chartContainer}>
                <VictoryChart
                  theme={VictoryTheme.material}
                  width={700}
                  height={600}
                  padding={{ top: 120, bottom: 120, left: 120, right: 120 }}
                  colorScale={d3.schemeCategory10}
                  animate={{ duration: 1000, easing: "bounce" }}
                >
                  <VictoryAxis
                    tickFormat={(t) => `${t}`}
                    style={{
                      axis: { stroke: "none" },
                      tickLabels: { fontSize: 16, fontWeight: "bold" },
                    }}
                    domainPadding={{ left: 100 }}
                  />
                  <VictoryAxis
                    dependentAxis
                    tickFormat={(t) => `${t}`}
                    style={{
                      marginLeft: "20px",
                      axis: { stroke: "none" },
                      tickLabels: { fontSize: 16, fontWeight: "bold" },
                    }}
                    domainPadding={{ left: 100 }}
                  />
                  <VictoryBar
                    data={data}
                    x="x"
                    y="y"
                    style={{
                      data: {
                        width: 30,
                        padding: 20,
                        strokeWidth: 2,
                      },
                      labels: { fontSize: 16, fontWeight: "bold" },
                    }}
                    labels={({ datum }) => `${datum.y}`}
                    labelComponent={<VictoryLabel dy={30} />}
                  />
                </VictoryChart>
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={(e) => setFlag(false)}
                className={classes.submitButton}
              >
                Back to customize
              </Button>
            </div>
          ) : flag && selectedOption.value === "pie" ? (
            <div className={classes.chartContainerpie}>
              <h3 style={{ marginBottom: "10px", fontSize: "10px" }}>
                1 unit = 500 platelets/micro-liter
              </h3>{" "}
              <Chart
                width="900px"
                height="520px"
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={pieData}
                options={{
                  ...pieOptions,
                  titleTextStyle: {
                    fontSize: 20,
                    left: "5%",
                  },
                  chartArea: {
                    width: "90%", // adjust width as needed
                    height: "70%", // adjust height as needed
                    top: "5%", // adjust top position as needed
                    left: "5%", // adjust left position as needed
                  },
                  titlePosition: "in",
                  legend: {
                    position: "right",
                    textStyle: {
                      color: "#333333",
                      fontName: "Arial",
                      fontSize: 17,
                      marginLeft: 10,
                    },
                  },
                }}
                rootProps={{ "data-testid": "3" }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={(e) => setFlag(false)}
                className={classes.submitButton}
              >
                Back to customize
              </Button>
            </div>
          ) : (
            <>
              <div className={classes.wrapfields}>
                <div className={classes.textfeild}>
                  <TextField
                    type="file"
                    id="file-input"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <TextField type="text" onClick={handleButtonClick} />
                  <h3 className={classes.label}>Browse</h3>
                </div>
                <div className={classes.textfeild}>
                  <Select
                    options={options}
                    value={selectedOption}
                    onChange={handleOptionChange}
                    styles={customStyles}
                    placeholder=""
                  />
                  <h3 className={classes.label}>Select Graph</h3>
                </div>
                <div className={classes.textfeild}>
                  <TextField
                    style={{ width: "295px" }}
                    value={startDate}
                    onClick={handleStartClick}
                  />
                  <DatePicker
                    id="start"
                    value={startDate}
                    onChange={handleStartDateChange}
                    className={classes.datePicker}
                  />
                  <h3 style={{ marginLeft: "-185px", width: "200px" }}>
                    From (Date)
                  </h3>
                </div>
                <div className={classes.textfeild}>
                  <TextField
                    style={{ width: "295px" }}
                    value={endDate}
                    onClick={handleEndClick}
                  />
                  <DatePicker
                    id="end"
                    value={endDate}
                    onChange={handleEndDateChange}
                    className={classes.datePicker}
                  />
                  <h3 style={{ marginLeft: "-185px", width: "200px" }}>To</h3>
                </div>
              </div>
              <div className={classes.iconsDiv}>
                <div className={classes.iconContainer}>
                  <img src={add} width="110" height="65" alt="Add" />
                  <Typography variant="subtitle1">Add</Typography>
                </div>
                <div
                  onClick={(e) => setFlag(true)}
                  className={classes.iconContainer}
                >
                  <img src={settings} width="137" height="108" alt="Share" />
                  <Typography variant="subtitle1">Customize</Typography>
                </div>
              </div>
            </>
          )}
        </Paper>
      </div>
    </div>
  );
}

export default AddCustomize;
