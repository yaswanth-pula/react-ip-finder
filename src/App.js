import React from "react";
import "./App.css";
import NavHeader from "./NavHeader";
import IpAddressComponent from "./IpAddressComponent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" id="my-container" component="div">
        <div>
          <NavHeader />
          <IpAddressComponent />
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
