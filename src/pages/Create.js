import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create Page
      </Typography>

      <Button
        type="submit"
        color="secondary"
        variant="contained"
        // disableElevation
        onClick={() => console.log("I was clicked!")}
      >
        Submit
      </Button>
    </Container>
  );
}
