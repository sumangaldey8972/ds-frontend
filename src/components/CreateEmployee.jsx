import * as React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { ModalClose, styled } from "@mui/joy";
import CustomInput from "../Common/CustomInput";
import Snackbars from "../Common/Snackbar";

const StyledModal = styled(Modal)(({ theme }) => ({
  ".MuiModal-backdrop": {
    backgroundColor: "#000000",
    opacity: 0.3,
  },
  ".MuiModalDialog-root": {
    boxShadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
    width: "30%",
    borderRadius: "0",
  },
}));

const CreateEmployee = ({ open, setOpen }) => {
  // const [open, setOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState({
    bool: false,
    message: "",
    status: "",
  });
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToastMessage({ bool: false, message: "", status: toastMessage.status });
  };

  const initialValue = {
    employee_id: "",
    name: "",
    email: "",
    phone: "",
    designation: "",
    salary: "",
  };

  const validationSchema = Yup.object({
    employee_id: Yup.string().required("ID is required"),
    name: Yup.string().required("Employee name is required"),
    email: Yup.string().required("Email is required"),
    phone: Yup.string()
      .min(10, "min")
      .max(15, "max")
      .required("Phone Number is required"),
    designation: Yup.string().required("Designation is required"),
    salary: Yup.number().required("Salary is required"),
  });

  const handleAddManufacture = (details) => {
    console.log(details);
  };

  return (
    <React.Fragment>
      <Snackbars
        status={toastMessage.status}
        message={toastMessage.message}
        open={toastMessage.bool}
        handleClose={handleClose}
      />
      <StyledModal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{ maxWidth: 350 }}
        >
          <ModalClose />
          <Typography id="basic-modal-dialog-title" component="h2">
            Add New Employee
          </Typography>
          <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              handleAddManufacture(values);
              setSubmitting(false);
            }}
          >
            {({ errors, touched, values, setFieldValue }) => {
              return (
                <Form>
                  <Stack spacing={2}>
                    <CustomInput
                      type="text"
                      label="Employee ID"
                      name="employee_id"
                      size="sm"
                    />
                    <CustomInput
                      type="text"
                      label="Employee Name"
                      name="name"
                      size="sm"
                    />
                    <CustomInput
                      type="email"
                      label="Email"
                      name="email"
                      size="sm"
                    />
                    <CustomInput
                      type="text"
                      label="Phone Number"
                      name="phone"
                      size="sm"
                    />
                    <CustomInput
                      type="text"
                      label="Designation"
                      name="designation"
                      size="sm"
                    />
                    <CustomInput
                      type="number"
                      label="Salary"
                      name="salary"
                      size="sm"
                    />
                    <Button
                      loading={false}
                      type="submit"
                      size="sm"
                      color="primary"
                      sx={{ borderRadius: "0" }}
                    >
                      Submit
                    </Button>
                  </Stack>
                </Form>
              );
            }}
          </Formik>
        </ModalDialog>
      </StyledModal>
    </React.Fragment>
  );
};

export default CreateEmployee;
