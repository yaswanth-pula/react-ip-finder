import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ClientLookup from "./ClientLookup";
import SearchLookup from "./SearchLookup";
import AppBar from "@material-ui/core/AppBar";
const Tabpages = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="tab-pages">
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Your Ip" />
          <Tab label="Ip LookUp" />
        </Tabs>
      </AppBar>
      {value ? <SearchLookup /> : <ClientLookup />}
    </div>
  );
};
export default Tabpages;
