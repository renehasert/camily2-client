import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";
import Home from "./pages/Home";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// import gql from "graphql-tag";
// import { useQuery } from "@apollo/react-hooks";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    padding: 0,
  },
}));

function App() {
  const desktop = useMediaQuery("(min-width:770px)");
  const classes = useStyles();

  // const GET_ALL_EVENTS = gql`
  //   query {
  //     getAllEvents {
  //       title
  //       descriptiongit
  //     }
  //   }
  // `;

  // const { loading, error, data } = useQuery(GET_ALL_EVENTS);
  // console.log(data);

  return (
    <Container className={classes.root}>
      <CssBaseline />
      <Home desktop={desktop} />
    </Container>
  );
}

export default App;
