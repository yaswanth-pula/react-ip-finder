import React from "react";
import IpAddressComponent from "../components/IpAddressComponent";
const ClientIpPage = (props) => {
  return (
    <div>
      <IpAddressComponent ip={props.ip} />
    </div>
  );
};
export default ClientIpPage;
