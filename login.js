import { Avatar, Grid, Paper, TextField } from "@mui/material";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 300,
    margin: "20px auto",
  };
  const avatarColor = { backgroundColor: "#57d8a3" };
  const btnStyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarColor}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          variant="standard"
          label="Username"
          placeholder="Enter Username"
          fullWidth
          required
        />
        <br />
        <TextField
          variant="standard"
          label="Password"
          placeholder="Enter Password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel control={<Checkbox />} label="Remember me" />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={btnStyle}
        >
          Sign In
        </Button>
        <Typography>
          <Link href="#">Forgot Password ?</Link>
        </Typography>

        <Typography>
          Do you have an account ?<Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};
export default login;
