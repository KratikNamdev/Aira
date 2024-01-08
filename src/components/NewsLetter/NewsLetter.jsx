import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
  Container
} from "@mui/material";
import Link from 'next/link';
import Image from 'next/image'

const NewsLetter = () => {
  const postDetail = async ({ email }) => {
    const resp = await fetch('https://aira-zij7.onrender.com/contact/postContact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'token': localStorage?.getItem('dolibo_token')
      },
      body: JSON?.stringify({ email, page: 'Newsletter' })
    });
    const data = await resp.json();
    return data;
  };

  const [user, setUser] = useState({
    email: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the email is provided
    if (!user?.email) {
      setError("Please enter your email");
      return;
    }

    try {
      // Perform the form submission
      console.log("hi");
      let ans = await postDetail(user);
      console.log(ans);
      alert(ans?.message);

      // Clear the form after successful submission
      setUser({
        email: "",
      });
      setError(null); // Clear the error message
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An error occurred while submitting the form");
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ width: '100%', py: 4 }}>
        <Grid
          alignItems="center"
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid container item justifyContent={{ xs: "center", sm: "flex-start" }} xs={12} sm={6} md={6}>
            <Link href="/">
              <Image width={120} height={60} src='/airalogo.svg' priority alt="AIRA Logo" />
            </Link>
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              gap={3}
              alignItems={{ xs: 'flex-start', sm: 'center' }}
              justifyContent="center"
              sx={{}}
            >
              <Typography
                variant="subtitle"
                className="text-nowrap"
                width="100%"
                textAlign={{ xs: "center", sm: "left" }}
                sx={{
                  fontWeight: 600,
                  lineHeight: "24px",
                  verticalAlign: "top",
                }}
              >
                Contact Us
              </Typography>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                sx={{
                  border: { xs: 'none', sm: 'none', md: '1px solid #CBD0DA' },
                  borderRadius: "50px",
                  width: "100%"
                }}
              >
                <TextField
                  id="email"
                  label={null}
                  variant="outlined"
                  fullWidth
                  placeholder="connect@aira.fr"
                  onChange={handleChange}
                  value={user.email}
                  name='email'
                  error={!!error} // Highlight the field if there's an error
                  helperText={error} // Display the error message
                  sx={{
                    minWidth: "270px",
                    height: "45px",
                    "& .MuiOutlinedInput-input": {
                      padding: "10px",
                      paddingLeft: "15px",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "none",
                      },
                    },
                  }}
                />
                <Button
                  onClick={handleSubmit}
                  color="primary"
                  variant="contained"
                  size="small"
                  type='button'
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    minWidth: "150px",
                    margin: 0,
                    minHeight: 0,
                    fontWeight: 700,
                    borderRadius: "50px",
                    backgroundColor: "#6755DF"
                  }}
                >
                  Join
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
};

export default NewsLetter;
