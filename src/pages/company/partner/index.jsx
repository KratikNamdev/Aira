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
  TextField,
  FormControl,
  Select,
  MenuItem
} from "@mui/material";
import Image from 'next/image';
import RSelect from "react-select";
import AIRAMonoLinesLeft from '@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents';
import Colors from '@/common/Colorscomponents';
import { styled } from '@mui/material/styles';
import { CiSearch } from "react-icons/ci";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

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
  padding: '14px',
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
});

const partnerData = [
  {
    country: "UNITED STATES",
    company: "Accenture US",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
  },
  {
    country: "UNITED STATES",
    company: "Accenture US",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
  },
  {
    country: "UNITED STATES",
    company: "Accenture US",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
  },
  {
    country: "UNITED STATES",
    company: "Accenture US",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
  },
  {
    country: "UNITED STATES",
    company: "Accenture US",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
  },
  {
    country: "UNITED STATES",
    company: "Accenture US",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
  },
  {
    country: "UNITED STATES",
    company: "Accenture US",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
  },
  {
    country: "UNITED STATES",
    company: "Accenture US",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
  },
  {
    country: "UNITED STATES",
    company: "Accenture US",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
  },
];

const OUR_TEAM = [
  { id: "1", name: "Aziz", position: "Chairman", image: "aziz.png" },
  {
    id: "1",
    name: "Shashwat",
    position: "Chief Technology Officer",
    image: "shashwat.png",
  },
  {
    id: "1",
    name: "Franck",
    position: "Chief Financial Officer",
    image: "franck.png",
  },
  {
    id: "1",
    name: "Kubra",
    position: "Head of Administration",
    image: "kubra.png",
  },
  {
    id: "1",
    name: "Thomas",
    position: "Head of Sales and Marketing",
    image: "thomas.png",
  },
];

const QUICKFACTS = [
  { id: 1, title: "Customer First Approach", icon: "customer.png" },
  {
    id: 2,
    title: "One-stop Marketplace for Automation",
    icon: "marketplace.png",
  },
  {
    id: 3,
    title: "Solutions that Simplify Real-World Problems",
    icon: "solution.png",
  },
  { id: 4, title: "24/7 Customer Support and Services", icon: "support.png" },
];

const index = () => {
  return (
    <Box sx={{ backgroundColor: "##F8F9FB", position: "relative", pt: 9 }}>
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
            <Stack sx={{ mt: 10 }}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    lineHeight: 1.2,
                    color: "#200E32",
                    // marginLeft: "100px",
                  }}
                >
                  Discover the right <br />
                  <span style={{ color: Colors.airaSecondary }}>
                    Business Partner <br /> for you
                  </span>
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  Borrow the skills and expertise from our Business Partners to ensure success.
                </Typography>
              </Box>
            </Stack>
          </Container>
        </Grid>

        <Grid item xs={12} md={5}>
          <div>
            <Image
              src={`/images/aboutus/partner.png`}
              alt="bankingheader"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', borderRadius: 8 }}
            />
          </div>
        </Grid>
      </Grid>

      <Box sx={{ my: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            <Grid item xs={12} md={9}>
              <Grid container spacing={2} alignItems={'center'}>
                <Grid item xs={12} md={8}>
                  <CssTextField label="Search" fullWidth id="custom-css-outlined-input" inputProps={{
                    startAdornment: <CiSearch />
                  }} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <AIRAButton fullWidth endIcon={<CiSearch />}>
                     Partners
                  </AIRAButton>
                </Grid>
              </Grid>

              {/* <Grid sx={{ mt: 3 }} container item spacing={2}>
                {partnerData.map((item, idx) => (
                  <Grid key={idx} item xs={12} md={4}>
                    <Card>
                      <CardContent>
                        <Image
                          src={'/images/rectangle47.png'}
                          alt="partner"
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: '100%', height: 'auto' }}
                        />
                        <Typography fontSize={'12px'} color={"#000000"} fontWeight={"300"}>
                          {item.country}
                        </Typography>
                        <Typography sx={{ my: 1.5 }} fontSize={'18px'} color={"#6755DF"} fontWeight={"600"}>
                          {item.company}
                        </Typography>
                        <Typography fontSize={'14px'} color={"#000000"} fontWeight={"400"}>
                          {item.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid> */}

            </Grid>
            <Grid container item xs={12} md={3}>
              <Stack direction={'column'}>
                {/* <AIRAButton variant='outlined' fullWidth>
                  Technology Partners
                </AIRAButton> */}
                {/* <Stack sx={{ mt: 1 }} color={'#988AF5'} fontSize={'20px'} fontWeight={600}>
                  <Typography>Location</Typography>
                  <CssSelectField
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Show All"
                  >
                    <MenuItem value={1}>One</MenuItem>
                    <MenuItem value={1}>Two</MenuItem>
                    <MenuItem value={1}>Three</MenuItem>
                  </CssSelectField>
                </Stack> */}
                {/* <Stack sx={{ mt: 1 }} color={'#988AF5'} fontSize={'20px'} fontWeight={600}>
                  <Typography>Type / Tier</Typography>
                  <CssSelectField
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Show All"
                  >
                    <MenuItem value={1}>One</MenuItem>
                    <MenuItem value={1}>Two</MenuItem>
                    <MenuItem value={1}>Three</MenuItem>
                  </CssSelectField>
                </Stack> */}
                {/* <Stack sx={{ mt: 1 }} color={'#988AF5'} fontSize={'20px'} fontWeight={600}>
                  <Typography>Certification</Typography>
                  <CssSelectField
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Show All"
                  >
                    <MenuItem value={1}>One</MenuItem>
                    <MenuItem value={1}>Two</MenuItem>
                    <MenuItem value={1}>Three</MenuItem>
                  </CssSelectField>
                </Stack> */}
              </Stack>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="lg">
          <Box sx={{ margin: "0 auto", my: 6 }}>
            <Stack
              alignItems="center"
              justifyContent="space-between"
              direction="row"
              sx={{ my: 5 }}
            >
              <Button
                variant="text"
                color="secondary"
                sx={{ fontWeight: 600 }}
                startIcon={<KeyboardDoubleArrowLeftIcon />}
              >
                Previous
              </Button>
              <Pagination
                count={3}
                color="secondary"
                variant="text"
                hideNextButton
                hidePrevButton
              />
              <Button
                variant="text"
                color="secondary"
                sx={{ fontWeight: 600 }}
                endIcon={<KeyboardDoubleArrowRightIcon />}
              >
                Next
              </Button>
            </Stack>
          </Box>
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
  );
};

export default index;
