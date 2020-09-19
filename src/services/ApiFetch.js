/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { API_Config } from "../config/config.json";
// custom HOOK
function useApiFetch(ip) {
  //hooks
  const [ipData_hook, setIpData] = useState([]);
  const [fetching, setFetching] = useState(true);
  const lookup_ip = ip === undefined ? "" : ip + "/";
  // const API_KEY = process.env.REACT_APP_IP_API_KEY;
  //console.log("custom hook called");
  async function fetchApi() {
    //console.log("Api Call");
    const API_URL = API_Config.API_URL + lookup_ip + API_Config.RESPONSE_FORMAT;
    console.log(API_URL);
    const api_response = await fetch(API_URL);
    const json_data = await api_response.json();
    setIpData(json_data);
    setFetching(false);
  }

  //Effect
  useEffect(() => {
    fetchApi();
  }, []);

  return [ipData_hook, fetching];
}
export { useApiFetch };
