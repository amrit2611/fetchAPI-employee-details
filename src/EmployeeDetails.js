import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

import "./EmployeeDetails.css";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";

export default function ControlledAccordions() {

  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="app_container">
      {users.map(user => (
        <div className="accordian_container" key={user.id}>
          <Accordion className="inner_accordian_container"
            expanded={expanded === `panel${user.id}`}
            onChange={handleChange(`panel${user.id}`)}>
            <AccordionSummary className="summary_container"
              expandIcon={<ExpandMoreIcon color="primary" fontSize="large" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <div className="username summary_element">
                <div className="element_heading">
                  USERNAME
                </div>
                {user.username}
              </div>

              <div className="email summary_element">
                <div className="element_heading">
                  EMAIL
                </div>
                {user.email}
              </div>

              <div className="city summary_element">
                <div className="element_heading">
                  CITY
                </div>
                {user.address.city}
              </div>

              <div className="zidivcode summary_element">
                <div className="element_heading">
                  ZIP
                </div>
                {user.address.zipcode}
              </div>
            </AccordionSummary>


            {/* .............Dropdown goes here ....................*/}


            <AccordionDetails>
              <div className="details_container">


                <div className="details_line_1 details_line">
                  <div className="details_name details_element">
                    <div className="element_heading">
                      NAME
                    </div>
                    {user.name}
                  </div>
                  <div className="details_email details_element">
                    <div className="element_heading">
                      EMAIL
                    </div>
                    {user.email}
                  </div>
                </div>


                <div className="details_line_2 details_line">
                  <div className="details_address details_element">
                    <div className="element_heading">
                      ADDRESS
                    </div>
                    {user.address.suite}, {user.address.street}
                  </div>
                  <div className="details_city details_element">
                    <div className="element_heading">
                      CITY
                    </div>
                    {user.address.city}
                  </div>
                </div>


                <div className="details_line_3 details_line">
                  <div className="details_zip details_element">
                    <div className="element_heading">
                      ZIP
                    </div>
                    {user.address.zipcode}
                  </div>
                  <div className="details_phone details_element">
                    <div className="element_heading">
                      PHONE
                    </div>
                    {user.phone}
                  </div>
                </div>
                <div className="details_line_4 details_line">
                  <div className="details_website details_element">
                    <div className="element_heading">
                      WEBSITE
                    </div>
                    {user.website}
                  </div>
                  <div className="details_phone details_element">
                    <div className="element_heading">
                      COMPANY
                    </div>
                    {user.company.name}
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
}
