import React, { useState } from "react";
import EmployeeList from "../components/EmployesListTable";
import { Box, Button, Typography } from "@mui/joy";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { mainContentStyle } from "../Styles/main.style";
import CreateEmployee from "../components/CreateEmployee";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <Box
        component="main"
        className="MainContent"
        sx={mainContentStyle.maincontent}
      >
        <Box sx={mainContentStyle.secondcontent}>
          <Typography level="h2" sx={{ fontFamily: "Noto Sans" }}>
            Employess
          </Typography>
          <Button
            color="primary"
            startDecorator={<AddCircleOutlineIcon />}
            size="sm"
            title="Create manufacturer"
            onClick={() => setOpen(true)}
          >
            Create
          </Button>
          <CreateEmployee open={open} setOpen={setOpen} />
        </Box>
        {/* <div style={{ marginTop: "5rem" }}> */}
        <EmployeeList />
        {/* </div> */}
      </Box>
    </React.Fragment>
  );
};

export default Dashboard;
