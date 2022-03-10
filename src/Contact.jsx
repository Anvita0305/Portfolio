import * as React from "react";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Footer from "./Footer";

export default function InputWithIcon() {
  return (
    <>
      <div className="col-12 contact">
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Full Name" variant="standard" />
        <br />

        <PhoneIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="Contact Number"
          variant="standard"
        />
        <br />
        <span>
          <MailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Email" variant="standard" />
        </span>
        <br />
        <br />
        <TextareaAutosize
          aria-label="minimum height"
          minRows={5}
          placeholder="Enter Your Query..."
          style={{ width: 250 }}
        />
        <br></br>
        <button type="button" class="btn btn-dark">Submit</button>
      </div>
      <div>
      <br/>
      <hr/>
      <br/>
        <footer class="footer">
          <div>
            <h4>Connect with Me:</h4>
            <div>
              <BottomNavigationAction
                label="Instagram"
                icon={<InstagramIcon />}
              />
              <BottomNavigationAction
                label="Facebook"
                icon={<FacebookIcon />}
              />
              <BottomNavigationAction 
              label="Twiter" 
              icon={<TwitterIcon />} 
              />
              <BottomNavigationAction
                label="LinkedIn"
                icon={<LinkedInIcon />}
              />
            </div>
          </div>
        </footer>
        <br/><br/>
        <Footer></Footer>
      </div>
    </>
  );
}
