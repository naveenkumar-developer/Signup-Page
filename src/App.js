import "./App.css";
import React from "react";
// IMPORT BANNER IMAGE
import bannerImg from "./assets/banner.jpg";
// IMPORT THE BACKGROUND VIDEO
import backgroundVideo from "./assets/backgroundVideo.mp4";
// IMPORT ICONS
import xicon from "./assets/twitter.png";
import facebookIcon from "./assets/facebook.png";
import whatsappIcon from "./assets/whatsapp (1).png";
import linkedinIcon from "./assets/linkedin.png";
import { Button } from "@mui/material";
import Typography from "@mui/joy/Typography";
// FOR INPUTS
import { styled } from "@mui/joy/styles";
import Input from "@mui/joy/Input";
import CheckCircleOutlined from "@mui/icons-material/CheckCircleOutlined";
// FOR CHECKBOX
import Checkbox from "@mui/joy/Checkbox";
import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";
import Link from "@mui/joy/Link";
function App() {
  const StyledInput = styled("input")({
    border: "none", // remove the native input border
    minWidth: 0, // remove the native input width
    outline: 0, // remove the native input outline
    padding: 0, // remove the native input padding
    paddingTop: "1em",
    flex: 1,
    color: "inherit",
    backgroundColor: "none",
    fontFamily: "inherit",
    fontSize: "inherit",
    fontStyle: "inherit",
    fontWeight: "inherit",
    lineHeight: "inherit",
    textOverflow: "ellipsis",
    "&::placeholder": {
      opacity: 0,
      transition: "0.1s ease-out",
    },
    "&:focus::placeholder": {
      opacity: 1,
    },
    "&:focus ~ label, &:not(:placeholder-shown) ~ label, &:-webkit-autofill ~ label":
      {
        top: "0.5rem",
        fontSize: "0.75rem",
      },
    "&:focus ~ label": {
      color: "var(--Input-focusedHighlight)",
    },
    "&:-webkit-autofill": {
      alignSelf: "stretch", // to fill the height of the root slot
    },
    "&:-webkit-autofill:not(* + &)": {
      marginInlineStart: "calc(-1 * var(--Input-paddingInline))",
      paddingInlineStart: "var(--Input-paddingInline)",
      borderTopLeftRadius:
        "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
      borderBottomLeftRadius:
        "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
    },
  });

  const StyledLabel = styled("label")(({ theme }) => ({
    position: "absolute",
    lineHeight: 1,
    top: "calc((var(--Input-minHeight) - 1em) / 2)",
    color: theme.vars.palette.text.tertiary,
    fontWeight: theme.vars.fontWeight.md,
    transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
  }));

  const InnerInput1 = React.forwardRef(function InnerInput(props, ref) {
    const id = React.useId();
    return (
      <React.Fragment>
        <StyledInput {...props} ref={ref} id={id} />
        <StyledLabel htmlFor={id}>E-mail </StyledLabel>
      </React.Fragment>
    );
  });
  const InnerInput2 = React.forwardRef(function InnerInput(props, ref) {
    const id = React.useId();
    return (
      <React.Fragment>
        <StyledInput {...props} ref={ref} id={id} />
        <StyledLabel htmlFor={id}>Password </StyledLabel>
      </React.Fragment>
    );
  });
  const InnerInput3 = React.forwardRef(function InnerInput(props, ref) {
    const id = React.useId();
    return (
      <React.Fragment>
        <StyledInput {...props} ref={ref} id={id} />
        <StyledLabel htmlFor={id}> Confirm Password </StyledLabel>
      </React.Fragment>
    );
  });
  return (
    <div className="container">
      <div className="banner_container">
        <img src={bannerImg} alt="banner img" />
        <h2 className="title">
          Join the Asia biggest <br />{" "}
          <span className="highlightText">Beach Club</span>
        </h2>
      </div>

      <div className="form_overallContainer">
        <video className="background_video" autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="button_wrapper">
          <Button size="md" variant="contained" color="info">
            Sign up
          </Button>
          <Button size="md" variant="outlined" color="inherit">
            Sign in
          </Button>
        </div>
        <div className="row1">
          <div className="welcome_msg">
            <Typography className="h1" level="h1">
              Welcome !
            </Typography>
            <Typography className="h2" level="h2">
              Fill the form to become <br /> part of team
            </Typography>
          </div>
          <form className="form_wrapper">
            <Input
              endDecorator={<CheckCircleOutlined />}
              slots={{ input: InnerInput1 }}
              slotProps={{
                input: {
                  placeholder: "Enter your E-mail ",
                  type: "email",
                },
              }}
              sx={{ "--Input-minHeight": "56px", "--Input-radius": "6px" }}
            />{" "}
            <Input
              endDecorator={<CheckCircleOutlined />}
              slots={{ input: InnerInput2 }}
              slotProps={{
                input: { placeholder: "Enter your Password", type: "password" },
              }}
              sx={{ "--Input-minHeight": "56px", "--Input-radius": "6px" }}
            />
            <Input
              endDecorator={<CheckCircleOutlined />}
              slots={{ input: InnerInput3 }}
              slotProps={{
                input: { placeholder: "Enter your Password", type: "password" },
              }}
              sx={{ "--Input-minHeight": "56px", "--Input-radius": "6px" }}
            />
            <FormControl size="sm" sx={{ width: 400 }}>
              <Checkbox
                label={
                  <React.Fragment>
                    <span className="paraColor">
                      I have read and agree to the terms and conditions
                    </span>
                  </React.Fragment>
                }
              />
              <FormHelperText>
                <Typography level="body-sm">
                  Read our <Link href="#link">terms and conditions</Link>.
                </Typography>
              </FormHelperText>
            </FormControl>
            <Button size="md" variant="outlined" color="primary">
              Sign in
            </Button>
          </form>
        </div>
        <div className="row2">
          <h3>Social networks</h3>
          <div className="networksIcons">
            <img src={xicon} alt="xicon" />
            <img src={facebookIcon} alt="xicon" />
            <img src={whatsappIcon} alt="xicon" />
            <img src={linkedinIcon} alt="xicon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
