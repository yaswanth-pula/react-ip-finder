import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import "../css/App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import ClientLookup from "./ClientLookup";
import validateIP from "../services/ValidateIp";

const SearchLookup = () => {
  ///Hooks
  const [lookUpIp, setLookIp] = useState("");
  const [canLoad, setCanLoad] = useState(false);
  const [isValidInput, setIsValidInput] = useState(true);
  // utility Function
  function handleSearchBtnClick(event) {
    if (validateIP(lookUpIp)) {
      setCanLoad(true);
      setIsValidInput(true);
    } else setIsValidInput(false);
    event.preventDefault();
  }

  return (
    <div>
      <Paper id="search-lookup-paper" className="center-align-items">
        <form onSubmit={handleSearchBtnClick}>
          <TextField
            error={!isValidInput}
            className="search-input"
            autoComplete="false"
            id="outlined-basic"
            label="Search Ip "
            variant="outlined"
            size="small"
            helperText={!isValidInput && "Invalid Ip"}
            onChange={(event) => {
              setLookIp(event.target.value);
              setCanLoad(false);
            }}
          />
          <Button
            disabled={!lookUpIp}
            id="button-style"
            size="medium"
            variant="outlined"
            startIcon={<SearchIcon />}
            onClick={handleSearchBtnClick}
          >
            Search
          </Button>
        </form>
      </Paper>
      <div>{canLoad && <ClientLookup ip={lookUpIp} />}</div>
    </div>
  );
};
export default SearchLookup;
