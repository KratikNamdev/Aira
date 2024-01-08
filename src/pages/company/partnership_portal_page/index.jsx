import React from 'react';
import {
  Box,
  Grid,
  Stack,
  Typography,
  Button,
  Container,
} from "@mui/material";
import Image from 'next/image';
import Colors from '@/common/Colorscomponents';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from 'next/navigation'

const IMGBASEURL = "/images/events";

const Index = () => {
  const router = useRouter();

  const handleNavigation = (route) => {
    router.push(route, { scroll: false })
  }

  return (
    <Box sx={{ backgroundColor: "##F8F9FB", position: "relative", pt: 9, mb: 10 }}>
      <Container maxWidth="md">
        <Box sx={{ borderRadius: "20px", pt: 4 }}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={7}
              sx={{
                backgroundColor: Colors.airaPrimary,
                display: "flex",
                alignItems: "center",
                // justifyContent: "center",
                borderTopLeftRadius: "15px",
                borderBottomLeftRadius: { xs: "0px", md: "15px" },
                borderTopRightRadius: { xs: "15px", md: "0px" },
                p: 4,
              }}
            >
              <Stack>
                <Typography
                  variant="h4"
                  sx={{ color: Colors.airaSecondary, fontWeight: 600 }}
                >
                  AIRA
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: "#fff", mb: 2, fontWeight: 600 }}
                >
                  Welcome to <br /> your Partner portal
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: "175px" }}>
                  <Button
                    onClick={() => handleNavigation('/register')}
                    variant="outlined"
                    color="secondary"
                    sx={{
                      border: "1px solid #fff",
                      color: "#6755DF",
                      borderRadius: "10px",
                      backgroundColor: '#ffffff',
                      '&:hover': {
                        color: '#fff',
                        backgroundColor: '#6755DF',
                        border: "1px solid #fff"
                      }
                    }}
                  >
                    Register now
                  </Button>
                  <Button
                    onClick={() => handleNavigation('/login')}
                    variant="outlined"
                    color="secondary"
                    sx={{
                      mt: 2,
                      border: "1px solid #fff",
                      color: "#fff",
                      borderRadius: "10px",
                      '&:hover': {
                        color: '#6755DF',
                        backgroundColor: '#ffffff',
                        border: "1px solid #6755DF"
                      }
                    }}
                  >
                    Login
                  </Button>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Box
                sx={{
                  backgroundImage: `url(${IMGBASEURL}/aira_live2.png)`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                  height: '280px',
                  borderTopRightRadius: { xs: "0px", md: "15px" },
                  borderBottomRightRadius: "15px",
                  borderBottomLeftRadius: { xs: "15px", md: "0px" }
                }}
              ></Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleNavigation('/contact')}
            sx={{
              mt: 2,
              border: "1px solid #000",
              color: "#fff",
              borderRadius: "10px",
              backgroundColor: '#000',
              '&:hover': {
                color: '#6755DF',
                backgroundColor: '#ffffff',
                border: "1px solid #6755DF"
              }
            }}
          >
            Contact Us
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            endIcon={<ArrowForwardIcon />}
            sx={{
              mt: 2,
              ml: { sx: 0, md: 2 },
              border: "1px solid #000",
              color: "#fff",
              borderRadius: "10px",
              backgroundColor: '#000',
              '&:hover': {
                color: '#6755DF',
                backgroundColor: '#ffffff',
                border: "1px solid #6755DF"
              }
            }}
          >
            Want to become a partner
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Index