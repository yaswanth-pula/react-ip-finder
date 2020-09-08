import React, { useState, useEffect } from "react";
function IpAddressComponent() {
  const [ipAddress, setIpAddress] = useState({
    isFetching: true,
    ip: "0.0.0.0",
  });
  useEffect(() => {
    const API_URL = "https://api64.ipify.org/?format=json";
    fetch(API_URL)
      .then((response) => response.json())
      .then((json_data) => {
        setIpAddress({ isFetching: false, ip: json_data.ip });
      })
      .catch(console.error);
  }, [setIpAddress]);
  // return (
  //   <div>
  //     <h2>{ipAddress.ip}</h2>
  //   </div>
  // );
  if (ipAddress.isFetching) {
    return <h2>Obtaining Ip Address...</h2>;
  } else {
    return <h2>{ipAddress.ip}</h2>;
  }
}
export default IpAddressComponent;
