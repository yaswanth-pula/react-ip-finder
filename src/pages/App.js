import React from "react";
import "../css/App.css";
import NavHeader from "../components/NavHeader";
import IpAddressComponent from "../components/IpAddressComponent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" id="my-container" component="div">
        <div>
          <NavHeader />
          <IpAddressComponent />
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
