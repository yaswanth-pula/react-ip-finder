import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
const TableRowComponent = (props) => {
  return (
    <TableRow key={props.row_key}>
      <TableCell align="left">{props.cell_1}</TableCell>
      <TableCell align="left">{props.cell_2}</TableCell>
    </TableRow>
  );
};
export default TableRowComponent;
