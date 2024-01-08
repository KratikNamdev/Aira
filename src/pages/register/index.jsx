import React from 'react';
import {
  Box,
  Grid,
  Stack,
  Typography,
  Button,
  Container,
  FormControl,
  MenuItem,
  Select,
  TextField
} from "@mui/material";
import Colors from '@/common/Colorscomponents';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import AIRAMonoLinesLeft from '@/components/AIRAMonoLinesAuth/AIRAMonoLinesAuthcomponents';
import { Country } from 'country-state-city';

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
  backgroundColor: '#6755DF',
  color: '#ffffff',
  borderColor: '#6755DF',
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#6755DF',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#6755DF',
    borderColor: '#6755DF',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(103, 85, 223, 1)',
  },
});


const Index = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event?.target?.value);
  };

  return (
    <Box sx={{ width: '100%', mt: 15, mb: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box sx={{
              backgroundColor: Colors.airaPrimary,
              height: 500,
              borderRadius: '16px',
              padding: 6,
              position: 'relative',
              overflow: 'hidden'
            }}>
              <Typography color={'#fff'} fontSize={48} fontWeight={800} lineHeight={'56px'}>
                Became a <br /> <span style={{ color: Colors.airaSecondary }}>AIRA partner</span>
              </Typography>
              <Box
                style={{
                  position: "absolute",
                  top: 120,
                  // zIndex: -1
                }}
              // sx={{ top: { xs: 200, md: 100 } }}
              >
                <AIRAMonoLinesLeft />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mx: 3 }}>
              <Typography fontWeight={'bold'}>
                Instructions
              </Typography>
              <Typography>
                Please use your company email address to register. We will send you a verification code for final signup.
              </Typography>
              <Stack sx={{ mt: 1 }} color={'#988AF5'} fontSize={'20px'} fontWeight={600}>
                <Typography>First Name</Typography>
                <CssTextField id="custom-css-outlined-input" />
              </Stack>
              <Stack sx={{ mt: 1 }} color={'#988AF5'} fontSize={'20px'} fontWeight={600}>
                <Typography>Last Name</Typography>
                <CssTextField id="custom-css-outlined-input" />
              </Stack>
              <Stack sx={{ mt: 1 }} color={'#988AF5'} fontSize={'20px'} fontWeight={600}>
                <Typography>Company Mail</Typography>
                <CssTextField id="custom-css-outlined-input" />
              </Stack>
              <Stack sx={{ mt: 1 }} color={'#988AF5'} fontSize={'20px'} fontWeight={600}>
                <Typography>Location Country</Typography>
                <FormControl fullWidth>
                  <CssSelectField
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                  >
                    {Country.getAllCountries().map(country => (
                      <MenuItem key={country.isoCode} value={country.name}>{country.name}</MenuItem>
                    ))}
                  </CssSelectField>
                </FormControl>
              </Stack>
              <Stack sx={{ mt: 2 }} direction={'column'} alignItems={'center'}>
                <AIRAButton fullWidth>
                  Next
                </AIRAButton>
                <Typography fontSize={'16px'} sx={{ mt: 2 }}>
                  Already have an account? <Link style={{ fontWeight: 'bold', color: Colors.airaPrimary, textDecoration: 'none' }} href={'/login'}>Sign In</Link>
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Index