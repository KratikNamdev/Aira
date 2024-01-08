// import { ErrorMessage } from "@hookform/error-message";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Card,
  CardContent,
  FormHelperText,
  Grid,
  Stack,
  TextField,
  Typography,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
// import { MuiTelInput } from "mui-tel-input";
import * as React from "react";
import { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import Image from 'next/image'
// import { BaseUrl } from "@/common/utilscomponents";
// import { BaseUrl } from "@/common/utilscomponents";

const TryAiraDialog = (props) => {
  const { open, handleClose } = props;

  const postDetail = async ({ fullName, email, phone }) => {
    const resp = await fetch('https://aira-zij7.onrender.com/contact/postContact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'token': localStorage?.getItem('dolibo_token')
      },
      body: JSON.stringify({firstName:fullName, email, phone, page: 'Home' })
    });
    const data = await resp.json();
    return data;

  };

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
        console.log("hi")
        // console.log(value);
        let ans = await postDetail(user);
        console.log(ans);
        alert(ans?.message);

        setUser({
          fullName:"",
          email:"",
          phone:"",
        })
        // navigate("/dashboard/manageProp");
  };

  return (
    // <FormProvider >
   
      <Dialog
        open={open}
        
        // TransitionComponent={Transition}
        keepMounted
        fullWidth
        maxWidth="md"
        onClose={handleClose}
        aria-describedby="try-aira"
        PaperProps={{
          style: { borderRadius: "30px" },
        }}
      >
        <DialogContent sx={{ borderRadius: "20px" }}>
          <Stack
            direction={{ xs: 'row', md: 'row' }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Box>
                <Image width={120} height={60} src="/airalogo.svg" priority alt="AIRA Logo" />
              </Box>
            </Box>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body1" sx={{ fontWeight: 700 }}>
              Share your details and we’d get back to you.
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ zIndex: 2 }}
              alignItems="center"
              justifyContent="center"
            >
              <Card
                raised
                sx={{
                  my: 3,
                  //marginRight: "-100px",
                  zIndex: 2,
                  borderRadius: "25px",
                }}
              >
                <CardContent>
                  <form onSubmit={handleSubmit}>
                  <Stack direction="column" gap={2}>
                    <Stack direction="column">
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, color: "#6755DF" }}
                      >
                        Full Name
                      </Typography>
                      {/* <Controller
                        rules={{ required: false }}
                        name="full_name"
                        id="full_name"
                      // control={control}


                      /> */}
                      <TextField
                        sx={{
                          "& fieldset": {
                            //paddingLeft: (theme) => theme.spacing(2.5),
                            borderRadius: "10px",
                          },
                        }}
                        
                        fullWidth
                        autoFocus
                        // value={value}
                        size="small"
                        // onChange={onChange}
                        id="fullName"
                        name="fullName"
                        onChange={handleChange}
                        value={user.fullName}
                        autoComplete="off"
                        type="text"
                        // size="small"
                        variant="outlined"
                        placeholder="Your name"
                        rows={10}
                      />
                      {/* <ErrorMessage
                        name="full_name"
                        errors={errors}
                        render={({ message }) => <p>{message}</p>}
                      /> */}
                    </Stack>
                    <Stack direction="column">
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, color: "#6755DF" }}
                      >
                        Email
                      </Typography>
                      {/* <FormHelperText
                        htmlFor="email"
                        color="muted"
                        clasSName="mb-1"
                        style={{ fontWeight: "bold" }}
                      >
                        Email
                      </FormHelperText> */}
                      {/* <Controller
                        rules={{ required: true }}
                        name="email"
                        id="email"
                        // control={control} */}
                      {/* render={({ field: { onChange, value } }) => {
                          return ( */}
                      <TextField
                        fullWidth
                        // value={value}
                        size="small"
                        sx={{
                          "& fieldset": {
                            //paddingLeft: (theme) => theme.spacing(2.5),
                            borderRadius: "10px",
                          },
                        }}
                        // onChange={onChange}
                        id="email"
                        name="email"
                        onChange={handleChange}
                        value={user.email}
                        autoComplete="off"
                        // size="small"
                        type="email"
                        variant="outlined"
                        placeholder="Email"
                        rows={10}
                      //     />
                      //   );
                      // }}
                      />
                      {/* <ErrorMessage
                        name="email"
                        errors={errors}
                        render={({ message }) => <p>{message}</p>}
                      /> */}
                    </Stack>
                    <Stack direction="column">
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, color: "#6755DF" }}
                      >
                        Contact Number
                      </Typography>
                      <TextField
                        sx={{
                          "& fieldset": {
                            //paddingLeft: (theme) => theme.spacing(2.5),
                            borderRadius: "10px",
                          },
                        }}
                        
                        fullWidth
                        autoFocus
                        // value={value}
                        size="small"
                        // onChange={onChange}
                        id="phone"
                        name="phone"
                        value={user?.phone}
                        onChange={handleChange}
                        autoComplete="off"
                        type="text"
                        // size="small"
                        variant="outlined"
                        placeholder="Contact Number"
                        rows={10}
                      />
                      {/* <FormHelperText
                        htmlFor="contact_number"
                        color="muted"
                        clasSName="mb-1"
                        style={{ fontWeight: "bold" }}
                      >
                        Contact Number
                      </FormHelperText> */}
                      {/* <Controller
                        rules={{ required: false }}
                        name="contact_number"
                        id="contact_number"
                        // control={control}
                        render={({ field: { onChange, value } }) => {
                          return ( */}
                      {/* <MuiTelInput
                        defaultCountry={"IN"}
                        // value={value}
                        size="small"
                        sx={{
                          "& fieldset": {
                            //paddingLeft: (theme) => theme.spacing(2.5),
                            borderRadius: "10px",
                          },
                        }}
                      // onChange={onChange}
                      // size="small"
                      //     />
                      //   );
                      // }}
                      /> */}
                      {/* <ErrorMessage
                        name="contact_number"
                        errors={errors}
                        render={({ message }) => <p>{message}</p>}
                      /> */}
                    </Stack>

                    <Stack sx={{ my: 1 }}>
                      <Button
                       type="submit"
                        variant="contained"
                        color="warning"
                        size="large"
                        sx={{ color: "#fff" }}
                        fullWidth
                      // onClick={() => {
                      //   handleSubmit(onSubmit)();
                      // }}
                      >
                        Submit
                      </Button>
                    </Stack>
                  </Stack>
                  </form>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} sx={{ zIndex: 1, alignSelf: 'center' }}>
              <Image
                src="/images/contact_us2.png"
                alt="Try AIRA"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    
    // </FormProvider>
  );
};

export default TryAiraDialog;
