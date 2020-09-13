import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const TableDataComponet = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead></TableHead>
        <TableBody>
          <TableRow key="ipCountryRow">
            <TableCell scope="row">Country</TableCell>
            <TableCell align="center">
              {props.parent_data.country_name}
            </TableCell>
          </TableRow>
          <TableRow key="ipIspRow">
            <TableCell align="right" scope="row">
              Isp Provider
            </TableCell>
            <TableCell align="right">{props.parent_data.org}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TableDataComponet;
