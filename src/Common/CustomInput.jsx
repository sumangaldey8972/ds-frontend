import { FormControl, FormHelperText, FormLabel, Input } from "@mui/joy";
import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormControl>
      <FormLabel sx={{ fontSize: ".8rem", fontFamily: "Noto Sans" }}>
        {label} &nbsp;<span style={{ color: "red" }}>*</span>
      </FormLabel>
      <Input
        autoComplete="off"
        {...field}
        {...props}
        sx={{ borderRadius: "0" }}
      />
      {meta.touched && meta.error && (
        <FormHelperText sx={{ color: "red", fontSize: ".6rem" }}>
          {meta.error}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default CustomInput;
