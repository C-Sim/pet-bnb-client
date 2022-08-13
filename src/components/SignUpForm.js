import { useState } from "react";
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import FormHelperText from "@mui/material/FormHelperText";

export const SignUpForm = ({ isMobile }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmedPassword = () => {
    setShowConfirmedPassword(!showConfirmedPassword);
  };

  return (
    <Paper sx={{ p: 3, minWidth: isMobile ? "90%" : "400px" }} elevation={6}>
      <Typography component="h1" variant="h4" align="center">
        Sign Up
      </Typography>
      <Divider />
      <Stack
        component="form"
        sx={{ p: 3 }}
        spacing={4}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack spacing={2}>
          <Typography component="h2" variant="button" align="left">
            Personal Details
          </Typography>

          <TextField
            required
            error={!!errors.firstName}
            label="First name"
            variant="outlined"
            helperText={
              !!errors.firstName ? "Please enter your first name." : ""
            }
            {...register("firstName", {
              required: true,
            })}
          />
          <TextField
            required
            error={!!errors.lastName}
            label="Last name"
            variant="outlined"
            helperText={!!errors.lastName ? "Please enter your last name." : ""}
            {...register("lastName", {
              required: true,
            })}
          />
          <TextField
            required
            error={!!errors.phoneNumber}
            label="Phone Number"
            variant="outlined"
            helperText={
              !!errors.phoneNumber ? "Please enter your phone number." : ""
            }
            {...register("phoneNumber", {
              required: true,
            })}
          />
          <TextField
            required
            error={!!errors.imageUrl}
            label="Image URL"
            variant="outlined"
            helperText={!!errors.imageUrl ? "Please enter your image URL." : ""}
            {...register("imageUrl", {
              required: true,
            })}
          />
          <Typography component="h2" variant="button" align="left">
            Account Details
          </Typography>
          <TextField
            required
            error={!!errors.email}
            label="Email"
            variant="outlined"
            helperText={!!errors.email ? "Please enter a valid email." : ""}
            {...register("email", {
              required: true,
            })}
          />
          <FormControl sx={{ m: 1 }} variant="outlined">
            <InputLabel
              error={!!errors.password}
              htmlFor="outlined-adornment-password"
            >
              Password
            </InputLabel>
            <OutlinedInput
              error={!!errors.password}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassword}
                    onMouseDown={toggleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              {...register("password", {
                required: true,
              })}
            />
            {!!errors.password && (
              <FormHelperText
                error={!!errors.password}
                id="outlined-weight-helper-text"
              >
                Please enter a valid password.
              </FormHelperText>
            )}
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="outlined">
            <InputLabel
              error={!!errors.confirmPassword}
              htmlFor="outlined-adornment-password"
            >
              Confirm Password
            </InputLabel>
            <OutlinedInput
              error={!!errors.confirmPassword}
              id="outlined-adornment-confirm-password"
              type={showConfirmedPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowConfirmedPassword}
                    onMouseDown={toggleShowConfirmedPassword}
                    edge="end"
                  >
                    {showConfirmedPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm Password"
              {...register("confirmPassword", {
                required: true,
              })}
            />
            {!!errors.confirmPassword && (
              <FormHelperText
                error={!!errors.confirmPassword}
                id="outlined-weight-helper-text"
              >
                Please enter a valid password.
              </FormHelperText>
            )}
          </FormControl>
        </Stack>
        <Stack spacing={2}>
          <Button variant="contained" type="submit">
            Login
          </Button>
          <Typography variant="caption" component="div" align="center">
            Don't have an account? <Link href="/sign-up">Sign up</Link>
          </Typography>
          <Typography
            variant="caption"
            component="div"
            sx={{ color: "red" }}
            align="center"
          >
            Failed to login. Please try again.
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};
