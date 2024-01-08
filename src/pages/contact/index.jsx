import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Pagination,
  Stack,
  Typography,
  Button,
  CardMedia,
  Container,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Checkbox
} from "@mui/material";
import Image from 'next/image';
import Link from 'next/link';
import AIRAMonoLinesLeft from '@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents';
import Colors from '@/common/Colorscomponents';
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMapPin } from "react-icons/hi2";
import { styled } from '@mui/material/styles';
import { Country } from 'country-state-city';
import { useSSR } from 'react-i18next';
// import { BaseUrl } from '@/common/utilscomponents';

import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
// import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: Colors.airaPrimary,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: Colors.airaPrimary,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#B8B8B8',
    },
    '&:hover fieldset': {
      borderColor: '#000000',
    },
    '&.Mui-focused fieldset': {
      borderColor: Colors.airaPrimary,
    },
  },
});

const CssSelectField = styled(Select)({
  '& .MuiInputBase-input': {
    color: Colors.airaPrimary,
    borderColor: '#B8B8B8',
  },
  '&:focus': {
    borderRadius: 4,
    borderColor: Colors.airaPrimary,
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
  },
})

const AIRAButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#FFAF00',
  color: '#ffffff',
  borderColor: '#FFAF00',
  '&:hover': {
    backgroundColor: '#FFAF00',
    borderColor: '#FFAF00',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#FFAF00',
    borderColor: '#FFAF00',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(103, 85, 223, 1)',
  },
});

const IMGBASEURL = "/images/brochures";

const Index = () => {
  const [open, setOpen] = React.useState(false);
  // BaseUrl
  const [user,setUser] = useState({
    firstName:"",
    lastName:"",
    country:"",
    automative:"",
    message:"",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
 
  const postContact = async ({ firstName, lastName, country, automative, message }) => {
    const resp = await fetch('https://aira-zij7.onrender.com/contact/postContact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON?.stringify({ firstName, lastName, country, automative, message, page: 'Contact' })
    });
    const data = await resp.json();
    return data;

  };

  const handlesubmit = async(e) =>{
    e.preventDefault();
    console.log("hi")
    let ans = await postContact(user);
    console.log(ans);
    // alert(ans.message);
    setUser({
      firstName:"",
      lastName:"",
      country:"",
      automative:"",
      message:"",
    })
  }
  return (
    <Box sx={{ backgroundColor: "##F8F9FB", pt: 9 }}>
    
      <Box>
        <Grid container spacing={2} >
          <Grid item xs={2}></Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Container maxWidth="lg">
              <Typography variant="h4" sx={{ fontWeight: 700, py: 3 }}>
                Start a Conversation with{" "}
                <span style={{ color: Colors.airaSecondary }}>
                  Sales
                </span>
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ position: "relative" }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={2}></Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Container maxWidth="lg">
              <Stack direction={'row'} alignItems={'center'} sx={{ mt: 2 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '100%',
                    backgroundColor: '#6755DF',
                    p: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}>
                  <BsTelephone size={16} color='#fff' />
                </div>
                <Typography
                  color={'#000'}
                  variant='h6'
                  fontWeight={'bold'}
                  sx={{ pl: 2 }}
                >
                  Contact us
                </Typography>
              </Stack>
              <Stack direction={'column'} sx={{ pt: 2 }}>
                <Stack direction={'row'} justifyContent={'flex-start'}>
                  <Typography color={Colors.airaSecondary}>France</Typography>
                  <Typography color={Colors.airaPrimary} sx={{ pl: 2 }}>+33 1 89 16 58 28</Typography>
                </Stack>
                <Stack direction={'row'} justifyContent={'flex-start'}>
                  <Typography color={Colors.airaSecondary}>India</Typography>
                  <Typography color={Colors.airaPrimary} sx={{ pl: 2 }}>+91 731 4978110</Typography>
                </Stack>
              </Stack>

              <Stack direction={'row'} alignItems={'center'} sx={{ mt: 2 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '100%',
                    backgroundColor: '#6755DF',
                    p: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}>
                  <HiOutlineMapPin size={16} color='#fff' />
                </div>
                <Typography
                  color={'#000'}
                  variant='h6'
                  fontWeight={'bold'}
                  sx={{ pl: 2 }}
                >
                  Meet us
                </Typography>
              </Stack>
              <Stack direction={'column'} sx={{ pt: 2 }}>
                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'flex-start'}>
                  <Typography color={Colors.airaSecondary}>France</Typography>
                  <Typography color={Colors.airaPrimary} sx={{ pl: { xs: 0, md: 2 } }}>15 Rue, Jacobi Netter,Strasbourg, France</Typography>
                </Stack>
                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'flex-start'}>
                  <Typography color={Colors.airaSecondary}>India</Typography>
                  <Typography color={Colors.airaPrimary} sx={{ pl: { xs: 0, md: 2 } }}>502 Vikram Heights, YN Road,Indore, India</Typography>
                </Stack>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={12} md={5}>
            <div>
              <Image
                src={`${IMGBASEURL}/brochure_header2.jpg`}
                alt="bankingheader"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', borderRadius: 8 }}
              />
            </div>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ py: 8, my: 8, backgroundColor: '#F8F9FB' }}>
        <Container maxWidth="md">
          <Typography textAlign={'center'} fontSize={'32px'} fontWeight={600}>
            Have An Enquiry? <span style={{ color: '#FFAF00' }}>Please Write To Us</span>
          </Typography>
           <form onSubmit={handlesubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CssTextField fullWidth placeholder='First Name' id="firstName" name='firstName' value={user?.firstName} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={6}>
              <CssTextField fullWidth placeholder='Last Name' id="lastName" value={user?.lastName} onChange={handleChange} name='lastName' />
            </Grid>
            <Grid item xs={12} md={6}>
            <CssTextField fullWidth placeholder='Email' id="country" value={user?.country} onChange={handleChange} name='country' />

              {/* <FormControl fullWidth>
                <CssSelectField
                  labelId="demo-simple-select-label"
                  id="country"
                  value={user.country}
                  name='country'
                  onChange={handleChange}
                  label="Country"
                >
                  {Country.getAllCountries().map(country => (
                    <MenuItem key={country.isoCode} value={country.name}>{country.name}</MenuItem>
                  ))}
                </CssSelectField>
              </FormControl> */}
            </Grid>
            <Grid item xs={12} md={6}>
              {/* <FormControl fullWidth>
                <CssSelectField
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={'Automotive'}
                  label="Country"
                >
                  <MenuItem >Automotive</MenuItem>
                  <MenuItem >AI / ML</MenuItem>
                  <MenuItem >Banking</MenuItem>
                </CssSelectField>
              </FormControl> */}
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                <Select
                     labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={user?.automative || ''}
        displayEmpty  // Set displayEmpty to true
        name="automative"
        onChange={handleChange}
                >   <MenuItem value="" disabled>
          Select a service
        </MenuItem>
                  <MenuItem value={"Automotive"}>Automotive</MenuItem>
                  <MenuItem value={"AI / ML"}>AI / ML</MenuItem>
                  <MenuItem value={"Banking"}>Banking</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="message"
                name='message'
                value={user?.message}
                onChange={handleChange}
                label="Your Message"
                multiline
                rows={4}
                defaultValue=""
              />

              <Stack direction={{ xs: 'column', md: 'row' }} alignItems={'flex-start'} sx={{ mt: 2 }}>
                <Checkbox defaultChecked />
                <Typography fontSize={'16px'}>
                  I would like to receive communications about AIRA tailored to my interests and preferences, including latest news about products, services, events and promotions. For more information, please see our <Link href="/privacy_policy" passHref style={{textDecoration:'none'}}><span style={{ color: '#FFAF00', cursor: 'pointer', textDecoration: 'none' }}>Privacy Policy</span></Link>
                </Typography>
              </Stack>

              <Stack direction={'row'} justifyContent={'flex-end'}>
                <AIRAButton sx={{ mt: 3 }} type='submit'

// disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
                >
                  Submit
                </AIRAButton>
              </Stack>

              <Collapse in={open} style={{marginTop:"20px"}}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Thank you for Contact us
        </Alert>
      </Collapse>
            </Grid>
          </Grid>
            </form>
        </Container>
      </Box>

      <Box
        style={{
          position: "absolute",
          top: 50,
          zIndex: -1
        }}
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        <AIRAMonoLinesLeft />
      </Box>
    </Box>
  )
};

export default Index;
