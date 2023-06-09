import { useContext, useEffect, useState } from "react";
import {
  Button,
  Grid,
  Typography,
  Modal,
  Paper,
  makeStyles,
  TextField,
  MenuItem,
} from "@material-ui/core";
import axios from "axios";
import ChipInput from "material-ui-chip-input";

import { SetPopupContext } from "../../App";

import apiList from "../../lib/apiList";

const useStyles = makeStyles((theme) => ({
  body: {
    height: "inherit",
  },
  popupDialog: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // padding: "30px",
  },
}));

const CreateJobs = (props) => {
  const classes = useStyles();
  const setPopup = useContext(SetPopupContext);

  const [jobDetails, setJobDetails] = useState({
    name: "",
    email: "",
    dob: new Date(new Date()).toISOString().substr(0, 16),
    contact: "",
    linkedln: "",
    companyName: "",
    companyAddress: "",
    companyWebsite: "",
    title: "",
    ideaDescription: "",
    // jobType: "Full Time",

    // maxApplicants: 100,
    // maxPositions: 30,

    // skillsets: [],
    // jobType: "Full Time",
    // duration: 0,
    // salary: 0,
  });

  const handleInput = (key, value) => {
    setJobDetails({
      ...jobDetails,
      [key]: value,
    });
  };
  // Add state for email error
  const [emailError, setEmailError] = useState("");

  // Function to validate email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Handle input change for email field
  const handleEmailChange = (event) => {
    const email = event.target.value;
    if (validateEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Invalid email address");
    }
    handleInput("email", email);
  };

  const handleUpdate = () => {
    console.log(jobDetails);
    axios
      .post(apiList.jobs, jobDetails, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setPopup({
          open: true,
          severity: "success",
          message: response.data.message,
        });
        setJobDetails({
          name: "",
          email: "",
          dob: new Date(new Date()).toISOString().substr(0, 16),
          contact: "",
          linkedln: "",
          companyName: "",
          companyAddress: "",
          companyWebsite: "",
          title: "",
          ideaDescription: "",
          // jobType: "Full Time",
          // maxApplicants: 100,
          // maxPositions: 30,

          // skillsets: [],
          // jobType: "Full Time",
          // duration: 0,
          // salary: 0,
        });
      })
      .catch((err) => {
        setPopup({
          open: true,
          severity: "error",
          message: err.response.data.message,
        });
        console.log(err.response);
      });
  };

  return (
    <>
      <Grid
        container
        item
        direction="column"
        alignItems="center"
        style={{ padding: "30px", minHeight: "93vh", width: "" }}
      >
        <Grid item>
          <Typography variant="h2">Startup detail</Typography>
        </Grid>
        <Grid item container xs direction="column" justify="center">
          <Grid item>
            <Paper
              style={{
                padding: "20px",
                outline: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid
                container
                direction="column"
                alignItems="stretch"
                spacing={3}
              >
                <Grid container justify="center" style={{ marginTop: "20px" }}>
                  <Grid item>
                    <TextField
                      label="Name"
                      value={jobDetails.name}
                      onChange={(event) =>
                        handleInput("name", event.target.value)
                      }
                      variant="outlined"
                      //fullWidth
                      required={true}
                      style={{
                        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)", // Add box shadow
                        textAlign: "center",
                        width: "400px",
          
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid container justify="center" style={{ marginTop: "20px" }}>
                <Grid item>
                  <TextField
                    label="Email"
                    value={jobDetails.email}
                    onChange={handleEmailChange}
                    variant="outlined"
                    //fullWidth
                    //required={true}
                    error={!!emailError}
                    helperText={emailError}
                    style={{
                      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)", // Add box shadow
                      textAlign: "center",
                      width: "400px",
        
                    }}
                  />
                </Grid>
                </Grid>

                <Grid container justify="center" style={{ marginTop: "20px" }}>
                <Grid item>
                  <TextField
                    label="DOB"
                    type="date"
                    value={jobDetails.dob}
                    onChange={(event) => {
                      handleInput("dob", event.target.value);
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    //fullWidth
                   // required={true}
                    placeholder="Enter your dob here"
                    style={{
                      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)", // Add box shadow
                      textAlign: "center",
                      width: "400px",
        
                    }}
                  />
                </Grid>
                </Grid>
                <Grid container justify="center" style={{ marginTop: "20px" }}>
                <Grid item>
                  <TextField
                    label="Contact"
                    value={jobDetails.contact}
                    onChange={(event) =>
                      handleInput("contact", event.target.value)
                    }
                    variant="outlined"
                    //fullWidth
                    //required={true}
                    placeholder="Enter your contact number here"
                    style={{
                      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)", // Add box shadow
                      textAlign: "center",
                      width: "400px",
        
                    }}
                  />
                </Grid>
                </Grid>
                <Grid container justify="center" style={{ marginTop: "20px" }}>
                <Grid item>
                  <TextField
                    label="Linkedln Url"
                    value={jobDetails.linkedln}
                    onChange={(event) =>
                      handleInput("linkedln", event.target.value)
                    }
                    variant="outlined"
                    //fullWidth
                    placeholder="Enter your linedln url here"
                    style={{
                      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)", // Add box shadow
                      textAlign: "center",
                      width: "400px",
        
                    }}
                  />
                </Grid>
                </Grid>
                <Grid container justify="center" style={{ marginTop: "20px" }}>
                <Grid item>
                  <TextField
                    label="Company Name"
                    value={jobDetails.companyName}
                    onChange={(event) =>
                      handleInput("companyName", event.target.value)
                    }
                    variant="outlined"
                    //fullWidth
                    //required={true}
                    placeholder="Enter company name here"
                    style={{
                      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)", // Add box shadow
                      textAlign: "center",
                      width: "400px",
        
                    }}
                  />
                </Grid>
                <Grid container justify="center" style={{ marginTop: "20px" }}>
                <Grid item>
                  <TextField
                    label="Company Address"
                    value={jobDetails.companyAddress}
                    onChange={(event) =>
                      handleInput("companyAddress", event.target.value)
                    }
                    variant="outlined"
                    //fullWidth
                    //required={true}
                    placeholder="Enter your company address "
                    style={{
                      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)", // Add box shadow
                      textAlign: "center",
                      width: "400px",
        
                    }}
                  />
                </Grid>
                </Grid>
                </Grid>
                <Grid container justify="center" style={{ marginTop: "20px" }}>
                <Grid item>
                  <TextField
                    label="Company Website"
                    value={jobDetails.companyWebsite}
                    onChange={(event) =>
                      handleInput("companyWebsite", event.target.value)
                    }
                    variant="outlined"
                    //fullWidth
                    //required={true}
                    placeholder="Please provide your company website, if any"
                    style={{
                      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)", // Add box shadow
                      textAlign: "center",
                      width: "400px",
        
                    }}
                  />
                </Grid>
                </Grid>
                <Grid container justify="center" style={{ marginTop: "20px" }}>
                <Grid item>
                  <TextField
                    label="Title"
                    value={jobDetails.title}
                    onChange={(event) =>
                      handleInput("title", event.target.value)
                    }
                    variant="outlined"
                    placeholder="Please provide specific title of your startup idea"
                    //fullWidth
                    style={{
                      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)", // Add box shadow
                      textAlign: "center",
                      width: "400px",
        
                    }}
                  />
                </Grid>
                </Grid>
                <Grid container justify="center" style={{ marginTop: "20px" }}>
                <Grid item>
                  <TextField
                    label="Idea Description"
                    value={jobDetails.ideaDescription}
                    onChange={(event) =>
                      handleInput("ideaDescription", event.target.value)
                    }
                    variant="outlined"
                    placeholder="Please enter detailed description of your idea"
                    
                    multiline
                    rows={5} // Set the number of rows to 4
                    style={{
                      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)", // Add box shadow
                      textAlign: "center",
                      width: "400px",
                      height: "140px",
                   
        
                    }}
                  />
                </Grid>
                </Grid>

                {/* <Grid item>
                  <TextField
                    select
                    label="Job Type"
                    variant="outlined"
                    value={jobDetails.jobType}
                    onChange={(event) => {
                      handleInput("jobType", event.target.value);
                    }}
                    fullWidth
                  >
                    <MenuItem value="Full Time">Full Time</MenuItem>
                    <MenuItem value="Part Time">Part Time</MenuItem>
                    <MenuItem value="Work From Home">Work From Home</MenuItem>
                  </TextField>
                </Grid> */}
                {/* <Grid item>
                  <TextField
                    select
                    label="Duration"
                    variant="outlined"
                    value={jobDetails.duration}
                    onChange={(event) => {
                      handleInput("duration", event.target.value);
                    }}
                    fullWidth
                  >
                    <MenuItem value={0}>Flexible</MenuItem>
                    <MenuItem value={1}>1 Month</MenuItem>
                    <MenuItem value={2}>2 Months</MenuItem>
                    <MenuItem value={3}>3 Months</MenuItem>
                    <MenuItem value={4}>4 Months</MenuItem>
                    <MenuItem value={5}>5 Months</MenuItem>
                    <MenuItem value={6}>6 Months</MenuItem>
                  </TextField>
                </Grid> */}
                {/* <Grid item>
                  <TextField
                    label="Salary"
                    type="number"
                    variant="outlined"
                    value={jobDetails.salary}
                    onChange={(event) => {
                      handleInput("salary", event.target.value);
                    }}
                    InputProps={{ inputProps: { min: 0 } }}
                    fullWidth
                  />
                </Grid> */}

                {/* <Grid item>
                  <TextField
                    label="Maximum Number Of Applicants"
                    type="number"
                    variant="outlined"
                    value={jobDetails.maxApplicants}
                    onChange={(event) => {
                      handleInput("maxApplicants", event.target.value);
                    }}
                    InputProps={{ inputProps: { min: 1 } }}
                    fullWidth
                  />
                </Grid> */}
                {/* <Grid item>
                  <TextField
                    label="Positions Available"
                    type="number"
                    variant="outlined"
                    value={jobDetails.maxPositions}
                    onChange={(event) => {
                      handleInput("maxPositions", event.target.value);
                    }}
                    InputProps={{ inputProps: { min: 1 } }}
                    fullWidth
                  />
                </Grid> */}
              </Grid>
              <Button
                variant="contained"
                color="primary"
                style={{ padding: "10px 50px", marginTop: "30px" }}
                onClick={() => handleUpdate()} >
                Create Profile
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CreateJobs;
