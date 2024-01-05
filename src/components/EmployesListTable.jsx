import React from "react";
import { ColorPaletteProp } from "@mui/joy/styles";
import {
  Avatar,
  Box,
  Checkbox,
  Chip,
  Link,
  Sheet,
  Table,
  Typography,
} from "@mui/joy";
// import { getSerialNumber } from "../../../utils/serialNumber";

const EmployeeList = ({ data, rowsPerPage, pageCount }) => {
  return (
    <Sheet
      className="OrderTableContainer"
      variant="outlined"
      sx={{
        display: { xs: "none", sm: "initial" },
        width: "100%",
        borderRadius: "sm",
        flexShrink: 1,
        overflow: "auto",
        minHeight: 0,
      }}
    >
      <Table
        aria-labelledby="tableTitle"
        stickyHeader
        hoverRow
        sx={{
          "--TableCell-headBackground": "#ccd7ff",
          "--Table-headerUnderlineThickness": "1px",
          "--TableRow-hoverBackground": "#e7ecff",
          "--TableCell-paddingY": "4px",
          "--TableCell-paddingX": "8px",
        }}
      >
        <thead>
          <tr>
            <th style={{ width: 120, padding: "12px 6px" }}>#</th>
            <th style={{ width: 140, padding: "12px 6px" }}>ID</th>
            <th style={{ width: 140, padding: "12px 6px" }}>Name</th>
            <th style={{ width: 140, padding: "12px 6px" }}>Email</th>
            <th style={{ width: 140, padding: "12px 6px" }}>Phone</th>
            <th style={{ width: 140, padding: "12px 6px" }}>Designation</th>
            <th style={{ width: 140, padding: "12px 6px" }}>Salary</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </Sheet>
  );
};

export default EmployeeList;
