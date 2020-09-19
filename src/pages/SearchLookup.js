import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import "../css/App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import ClientLookup from "./ClientLookup";
const SearchLookup = () => {
  ///Hooks
  const [lookUpIp, setLookIp] = useState("");
  const [canLoad, setCanLoad] = useState(false);
  // utility Function
  return (
    <div>
      <Paper id="search-lookup-paper" className="center-align-items">
        <TextField
          className="search-input"
          autoComplete="false"
          id="outlined-basic"
          label="Search Ip "
          variant="outlined"
          size="small"
          onChange={(event) => {
            setLookIp(event.target.value);
            setCanLoad(false);
          }}
        />
        <Button
          id="button-style"
          size="medium"
          variant="outlined"
          startIcon={<SearchIcon />}
          onClick={() => setCanLoad(true)}
        >
          Search
        </Button>
      </Paper>
      <div>{canLoad && <ClientLookup ip={lookUpIp} />}</div>
    </div>
  );
};
export default SearchLookup;
