import { Button, Grid, MenuItem, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const defaultValues = {
  name: "",
  fatherName: "",
  email: "",
  phone: "",
  cnic: "",
  fatherCnic: "",
  address: "",
  dob: "",
  gender: "",
  qualification: "",
  city: "",
  course: "",
};
const schema = yup.object().shape({
  name: yup.string().required(),
  fatherName: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup
    .string()
    .matches(/^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/, "invalid phone no")
    .required(),
  cnic: yup
    .string()
    .matches(/^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/, "invalid cnic no")
    .required(),
  fatherCnic: yup
    .string()
    .matches(/^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/, "invalid cnic no")
    .required(),
  address: yup.string().required(),
  dob: yup.string().required(),
  gender: yup.string().required(),
  qualification: yup.string().required(),
  city: yup.string().required(),
  course: yup.string().required(),
});
const RegistrationForm = ({ cities, degrees, courses, onSubmit }) => {
  const { handleSubmit, control, reset, formState } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });

  const formSubmitHandler = (e) => {
    onSubmit(e, reset);
  };

  const { errors } = formState;

  return (
    <Grid
      container
      component="form"
      justifyContent="center"
      spacing={2}
      onSubmit={handleSubmit(formSubmitHandler)}
    >
      <Grid item xs={4}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              label="Full name"
              error={!!errors.name}
              helperText={errors?.name?.message}
              fullWidth
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          name="fatherName"
          control={control}
          render={({ field }) => (
            <TextField
              label="Father name"
              error={!!errors.fatherName}
              helperText={errors?.fatherName?.message}
              fullWidth
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              label="Email"
              type="email"
              error={!!errors.email}
              helperText={errors?.email?.message}
              fullWidth
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextField
              label="Phone no"
              type="tel"
              error={!!errors.phone}
              helperText={errors?.phone?.message}
              fullWidth
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          name="cnic"
          control={control}
          render={({ field }) => (
            <TextField
              label="CNIC"
              error={!!errors.cnic}
              helperText={errors?.cnic?.message}
              fullWidth
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          name="fatherCnic"
          control={control}
          render={({ field }) => (
            <TextField
              label="Father's CNIC"
              error={!!errors.fatherCnic}
              helperText={errors?.fatherCnic?.message}
              fullWidth
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <TextField
              label="Address"
              error={!!errors.address}
              helperText={errors?.address?.message}
              fullWidth
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          name="dob"
          control={control}
          render={({ field }) => (
            <TextField
              type="date"
              error={!!errors.dob}
              helperText={errors?.dob?.message}
              fullWidth
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <TextField
              label="Select gender"
              select
              error={!!errors.gender}
              helperText={errors?.gender?.message}
              fullWidth
              {...field}
            >
              <MenuItem value={0}>Male</MenuItem>
              <MenuItem value={1}>Female</MenuItem>
            </TextField>
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          name="qualification"
          control={control}
          render={({ field }) => (
            <TextField
              label="Last Qualification"
              select
              error={!!errors.qualification}
              helperText={errors?.qualification?.message}
              fullWidth
              {...field}
            >
              {degrees.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <TextField
              label="Select City"
              select
              error={!!errors.city}
              helperText={errors?.city?.message}
              fullWidth
              {...field}
            >
              {cities.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          name="course"
          control={control}
          render={({ field }) => (
            <TextField
              label="Select Course"
              select
              error={!!errors.course}
              helperText={errors?.course?.message}
              fullWidth
              {...field}
            >
              {courses.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          size="large"
          fullWidth
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default RegistrationForm;
