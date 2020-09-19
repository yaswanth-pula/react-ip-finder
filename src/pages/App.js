import React from "react";
import "../css/App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import NavHeader from "../components/NavHeader";
import TabPages from "./TabPages";
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" id="my-container" component="div">
        <NavHeader />
        <TabPages />
      </Container>
    </React.Fragment>
  );
}

export default App;
