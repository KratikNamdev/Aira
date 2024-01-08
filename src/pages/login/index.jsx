import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Pagination,
  Stack,
  Typography,
  Button,
  Container,
  TextField
} from "@mui/material";
import Image from 'next/image';
import Colors from '@/common/Colorscomponents';
import { styled } from '@mui/material/styles';
import Link from 'next/link'

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

const index = () => {
  return (
    <Box sx={{ backgroundColor: "##F8F9FB", position: "relative", pt: 9, my: 3 }}>
      <Grid container direction={'row-reverse'} spacing={2} justifyContent="center">
        <Grid item xs={2}></Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <Container maxWidth="lg"> */}
          <Box sx={{ mx: 3 }}>
            <Typography fontSize={'24px'} fontWeight={'bold'} textAlign={'center'}>
              Partner Login
            </Typography>
            <Stack sx={{ mt: 1 }} color={'#988AF5'} fontSize={'20px'} fontWeight={600}>
              <Typography>Username</Typography>
              <CssTextField id="custom-css-outlined-input" />
            </Stack>
            <Stack sx={{ mt: 1 }} color={'#988AF5'} fontSize={'20px'} fontWeight={600}>
              <Typography>Password</Typography>
              <CssTextField type='password' id="custom-css-outlined-input" />
            </Stack>
            <Stack sx={{ mt: 2 }} direction={'column'} alignItems={'center'}>
              <AIRAButton fullWidth>
                Next
              </AIRAButton>
              <Typography fontSize={'16px'} sx={{ mt: 2 }}>
                <Link style={{ color: Colors.airaPrimary, textDecoration: 'none' }} href={'#'}>Forgot your password ?</Link>
              </Typography>
              <Divider sx={{ width: '100%', mt: 3 }} />
              {/* <Typography fontSize={'16px'} sx={{ mt: 2 }}>
                AIRA Employee? <Link style={{ color: Colors.airaPrimary, textDecoration: 'none' }} href={'/login'}>Login</Link>
              </Typography> */}
              <Typography sx={{ mt: 4 }}>
                For Partner Portal Login issues,
                <Link style={{ color: Colors.airaPrimary, textDecoration: 'none' }} href={'/contact'}> please contact us.</Link>
              </Typography>
            </Stack>
          </Box>
          {/* </Container> */}
        </Grid>
        <Grid item xs={12} md={5}>
          <div>
            <Image
              src={`/images/blogs/login.png`}
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
  )
}

export default index