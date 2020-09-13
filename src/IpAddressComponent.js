import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import { Button, Snackbar } from "@material-ui/core";
import DetailsComponent from "./DetailsComponent";
import { useApiFetch } from "./services/ApiFetch";
const IpAddressComponent = () => {
  const [ip_data, isFetching] = useApiFetch();
  // Hooks
  // const [ipAddressHook, setIpAddress] = useState({
  //   isFetching: true,
  //   ip_data: []
  // });
  // console.log("rendered ");
  // useEffect(() => {

  // });

  const [toastHook, setToastOpen] = useState(false);

  // // utility Functions
  function loadIpAddress() {
    // console.log(count + " ip");
    // count = count + 1;
    if (isFetching) {
      return <h2>Obtaining Ip Address...</h2>;
    } else {
      return <h2>{ip_data.ip}</h2>;
    }
  }
  function loadDetailsComponent() {
    // console.log(count + " Details");
    // count = count + 1;
    if (!isFetching) {
      return <DetailsComponent api_data={ip_data} />;
    }
  }

  // copy button function

  function copyIpButtonClick() {
    // does not supporting on Http(Chrome Android )
    navigator.clipboard
      .writeText(ip_data.ip)
      .then(() => {
        // nothing to do..
      })
      .catch(console.error);

    // other trials
    // window.prompt("Copy to clipboard: Ctrl+C, Enter", ipAddressHook.ip);
    // navigator.clipboardData("text/plain", ipAddressHook.ip);

    // genric approach
    let local_text_area = document.createElement("textarea");
    local_text_area.innerText = ip_data.ip;
    document.body.appendChild(local_text_area);
    local_text_area.select();
    document.execCommand("copy");
    local_text_area.remove();
    setToastOpen(true);
  }
  //closing copied SnackBar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setToastOpen(false);
  };
  // Main jsx code
  return (
    <div className="center-align-items">
      <h2>Your Ip Address</h2>
      <Chip id="my-chip" label={loadIpAddress()} />
      <Button
        id="copy-button"
        variant="outlined"
        size="small"
        onClick={() => copyIpButtonClick()}
        disabled={isFetching}
      >
        COPY
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={toastHook}
        autoHideDuration={2000}
        onClose={handleClose}
        message="IP Copied !"
      />
      <div>{loadDetailsComponent()}</div>
    </div>
  );
};
export default IpAddressComponent;
