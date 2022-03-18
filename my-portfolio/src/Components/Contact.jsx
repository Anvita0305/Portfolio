import { useState, React } from "react";
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
import db from "../firebaseContact";

export default function InputWithIcon() {
  const[name,setName]=useState("");
  const[num,setNum]=useState("");
  const[mail,setMail]=useState("");
  const[query,setQuery]=useState("");

  function handleSubmit(e){
    e.preventDefault();
    db.collection('contacts').add({
      name:name,
      num:num,
      mail:mail,
      query:query,
    })
    .then(()=>{
      alert("Form Submitted Successfully!")
    })
    .catch((error)=>{
      alert(error.message);
    })
    setName('')
    setNum('')
    setMail('')
    setQuery('')
  }
  return (
    <>
      <div className="col-12 contact">
        <form method="POST">
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Full Name"
            variant="standard"
            autoComplete="off"
            name="name"
            required
            value={name}
            onChange={(e)=>{
              setName(e.target.value)
            }}
          />
          <br />

          <PhoneIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Contact Number"
            variant="standard"
            name="contactNumber"
            autoComplete="off"
            required
            value={num}
            onChange={(e)=>{
              setNum(e.target.value)
            }}
          />
          <br />
          <span>
            <MailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Email"
              variant="standard"
              name="email"
              autoComplete="off"
              required
              value={mail}
              onChange={(e)=>{
              setMail(e.target.value)
            }}
            />
          </span>
          <br />
          <br />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={5}
            placeholder="Enter Your Query..."
            style={{ width: 250 }}
            name="query"
            autoComplete="off"
            required
            value={query}
            onChange={(e)=>{
              setQuery(e.target.value)
            }}
          />
          <br></br>
          <button type="button" class="btn btn-dark"  onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      <div>
        <br />
        <hr />
        <br />
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
              <BottomNavigationAction label="Twiter" icon={<TwitterIcon />} />
              <BottomNavigationAction
                label="LinkedIn"
                icon={<LinkedInIcon />}
              />
            </div>
          </div>
        </footer>
        <br />
        <br />
        <Footer></Footer>
      </div>
    </>
  );
}
