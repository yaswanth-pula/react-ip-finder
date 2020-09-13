import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TableDataComponet from "./TableDataComponent";

function DetailsComponent(props) {
  return (
    <div className="center-align-items">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <strong>Details</strong>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {/* <h4>{props.api_data.country_name}</h4> */}
            <TableDataComponet parent_data={props.api_data} />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default DetailsComponent;
