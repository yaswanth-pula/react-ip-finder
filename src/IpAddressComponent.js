import React, { useState, useEffect } from "react";
import Chip from "@material-ui/core/Chip";
import { API_Config } from "./config.json";
import { Button } from "@material-ui/core";

function IpAddressComponent() {
  // Hooks
  const [ipAddressHook, setIpAddress] = useState({
    isFetching: true,
    ip: "0.0.0.0",
  });
  useEffect(() => {
    fetch(API_Config.API_URL)
      .then((response) => response.json())
      .then((json_data) => {
        setIpAddress({ isFetching: false, ip: json_data.ip });
      })
      .catch(console.error);
  }, [setIpAddress]);

  function loadIpAddress() {
    if (ipAddressHook.isFetching) {
      return <h2>Obtaining Ip Address...</h2>;
    } else {
      return <h2>{ipAddressHook.ip}</h2>;
    }
  }

  function copyIpButtonClick() {
    navigator.clipboard.writeText(ipAddressHook.ip);
    //document.execCommand("copy");
  }

  // return (
  //   <div>
  //     <h2>{ipAddress.ip}</h2>
  //   </div>
  // );
  return (
    <div>
      <h2>Your Ip Address</h2>
      <Chip id="my-chip" label={loadIpAddress()} />
      <Button
        variant="outlined"
        size="small"
        onClick={() => copyIpButtonClick()}
        disabled={ipAddressHook.isFetching}
      >
        COPY
      </Button>
    </div>
  );
}
export default IpAddressComponent;
