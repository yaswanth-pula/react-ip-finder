import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import TableRowComponent from "./TableRowComponent";
const TableDataComponet = (props) => {
  return (
    <TableContainer component={Paper} id="table-container">
      <Table aria-label="simple table" padding="default">
        <TableHead></TableHead>
        <TableBody>
          {/* City of IP  */}
          <TableRowComponent
            row_key="ipCityRow"
            cell_1="City:"
            cell_2={props.parent_data.city || "Not Available"}
          />
          {/* Region of IP */}
          <TableRowComponent
            row_key="ipRegionRow"
            cell_1="Region:"
            cell_2={props.parent_data.region || "Not Available"}
          />
          {/* Country of IP */}
          <TableRowComponent
            row_key="ipCountryRow"
            cell_1="Country:"
            cell_2={props.parent_data.country_name || "Not Available"}
          />
          {/* Latitude & Longitude of Ip */}

          <TableRowComponent
            row_key="ipLatLongRow"
            cell_1="Latitude / Longitude:"
            cell_2={
              (props.parent_data.latitude || "Not Available") +
              " , " +
              (props.parent_data.longitude || "Not Available")
            }
          />
          {/* Isp of Ip */}
          <TableRowComponent
            row_key="ipIspRow"
            cell_1="ISP Provider:"
            cell_2={props.parent_data.org || "Not Available"}
          />
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TableDataComponet;
