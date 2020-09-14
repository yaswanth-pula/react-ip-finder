import { useState, useEffect } from "react";
import { API_Config } from "../config/config.json";
// custom HOOK
function useApiFetch() {
  //hooks
  const [ipData_hook, setIpData] = useState([]);
  const [fetching, setFetching] = useState(true);

  // const API_KEY = process.env.REACT_APP_IP_API_KEY;
  //console.log("custom hook called");
  async function fetchApi() {
    console.log("Api Call");
    const api_response = await fetch(API_Config.API_URL);
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
