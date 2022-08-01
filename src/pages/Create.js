import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddShoppingCartRoundedIcon from "@material-ui/icons/AddShoppingCartRounded";
import KeyboardArrowRightRoundedIcon from "@material-ui/icons/KeyboardArrowRightRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: "violet",
    "&:hover": {
      backgroundColor: "green",
    },
  },
  title: {
    textDecoration: "underline",
    marginBottom: 20,
  },
});

export default function Create() {
  const classes = useStyles();

  console.log(classes);
  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create Page
      </Typography>

      <Button
        className={classes.btn}
        type="submit"
        color="secondary"
        variant="contained"
        // disableElevation
        onClick={() => console.log("I was clicked!")}
        // startIcon={<KeyboardArrowRightRoundedIcon />}
        endIcon={<SendRoundedIcon />}
      >
        Submit
      </Button>

      {/* icons */}
      {/* <AddShoppingCartRoundedIcon />
      <AddShoppingCartRoundedIcon color="secondary" fontSize="large" />
      <AddShoppingCartRoundedIcon color="secondary" fontSize="small" />
      <AddShoppingCartRoundedIcon color="action" fontSize="small" />
      <AddShoppingCartRoundedIcon color="error" fontSize="small" />
      <AddShoppingCartRoundedIcon color="disabled" fontSize="small" /> */}
    </Container>
  );
}
