import React from "react";
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
} from "@mui/material";
import Image from "next/image";
import AIRAMonoLinesLeft from "@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents";
import Colors from "@/common/Colorscomponents";
import { styled } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { PiSwapBold } from "react-icons/pi";
import { FiCheckCircle } from "react-icons/fi";
import { BsDashLg } from "react-icons/bs";

const AIRAButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#6755DF",
  color: "#ffffff",
  borderColor: "#6755DF",
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#6755DF",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#6755DF",
    borderColor: "#6755DF",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(103, 85, 223, 1)",
  },
});

const AIRAButtonOutline = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "none",
  lineHeight: 1.5,
  backgroundColor: "transparent",
  color: "#FFAF00",
  borderColor: "#6755DF",
  "&:hover": {
    backgroundColor: "#ffe2aa",
    borderColor: "#6755DF",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#6755DF",
    borderColor: "#FFAF00",
  },
});

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
                  <span style={{ color: Colors.airaSecondary }}>Pricing</span>
                </Typography>
                <Typography>
                  Plans to fit your needs, today, and tomorrow. Explore a
                  complete AIRA enterprise solution for your business.
                </Typography>
              </Box>
            </Stack>
          </Container>
        </Grid>
        <Grid item xs={12} md={5}>
          <div>
            <Image
              src={`/images/pricing.png`}
              alt="bankingheader"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </Grid>
      </Grid>

      {/* <Box sx={{ my: 10, backgroundColor: "#dedbdb4d", py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Stack
                sx={{
                  backgroundColor: "#fff",
                  py: 4,
                  px: 6,
                  borderRadius: "16px",
                  minHeight: "750px",
                }}
                direction={"column"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Box>
                  <Typography
                    sx={{ my: 2 }}
                    textAlign={"center"}
                    fontSize={"20px"}
                    fontWeight={700}
                    color={"#6755DF"}
                  >
                    Free
                  </Typography>
                  <Typography>
                    Access to personal use of development and attended
                    capabilities for free.
                  </Typography>
                  <ul>
                    <li>Unlimited individual automation runs</li>
                    <li>Tools for designing individual automations</li>
                    <li>
                      Prebuilt, best-in-class integrations with many popular
                      products
                    </li>
                  </ul>
                </Box>

                <AIRAButton endIcon={<ArrowForwardIcon />}>
                  Start Free
                </AIRAButton>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack
                sx={{
                  backgroundColor: "#fff",
                  py: 4,
                  px: 6,
                  borderRadius: "16px",
                  minHeight: "750px",
                }}
                direction={"column"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Box>
                  <Typography
                    sx={{ my: 2 }}
                    textAlign={"center"}
                    fontSize={"20px"}
                    fontWeight={700}
                    color={"#6755DF"}
                  >
                    Pro
                  </Typography>
                  <Typography>
                    Pre-packaged plans make it easy for smaller departments or
                    businesses to start automating, looking for multiple tenants
                    and dedicated support.
                  </Typography>
                  <ul>
                    <li>Robots to enable remote, on-demand execution</li>
                    <li>
                      Advanced automation design tools with user governance
                    </li>
                    <li>
                      Additional products to engage people and robots for
                      seamless process collaboration
                    </li>
                    <li>AIRA Standard Support</li>
                  </ul>
                </Box>

                <AIRAButton endIcon={<ArrowForwardIcon />}>
                  Try Then Buy
                </AIRAButton>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack
                sx={{
                  backgroundColor: "#fff",
                  py: 4,
                  px: 6,
                  borderRadius: "16px",
                  minHeight: "750px",
                }}
                direction={"column"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Box>
                  <Typography
                    sx={{ my: 2 }}
                    textAlign={"center"}
                    fontSize={"20px"}
                    fontWeight={700}
                    color={"#6755DF"}
                  >
                    Enterprise
                  </Typography>
                  <Typography>
                    Flexible service offerings for companies seeking a
                    comprehensive platform that fits their needs. This plan
                    offers the best AIRA solutions—whether in the AIRA cloud,
                    your dedicated cloud, or on-premises, with support packages.
                  </Typography>
                  <ul>
                    <li>
                      Execute automated tests and RPA workflows with Test Robots
                    </li>
                    <li>100 Automation Express licenses free</li>
                    <li>
                      Additional products—process discovery, test management,
                      AI, analytics for speed-to-value
                    </li>
                    <li>Flexible multi-region deployment</li>
                    <li>Advanced authentication management</li>
                  </ul>
                </Box>

                <AIRAButton endIcon={<ArrowForwardIcon />}>
                  Contact Sales
                </AIRAButton>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box> */}

      <Box sx={{ my: 10 }}>
        <Container maxWidth="lg">
          <Typography
            sx={{ mb: 5 }}
            textAlign={"center"}
            color={"#FFAF00"}
            fontSize={"32px"}
            fontWeight={700}
          >
            See full comparison of our offerings
          </Typography>
          <Box
            sx={{ my: 10, overflowX: "auto", width: "100%", display: "block" }}
          >
            <table>
              <tbody>
                <tr>
                  <th></th>
                  {/* <th>
                    <Typography color={'#6755DF'} fontSize={'20px'} fontWeight={600}>
                      Free
                    </Typography>
                    <Typography color={'#000000'} fontSize={'16px'} fontWeight={600}>
                      CLOUD
                    </Typography>
                  </th> */}
                  {/* <th>
                    <Typography color={'#6755DF'} fontSize={'20px'} fontWeight={600}>
                      Pro
                    </Typography>
                    <Typography color={'#000000'} fontSize={'16px'} fontWeight={600}>
                      CLOUD
                    </Typography>
                  </th> */}
                  <th>
                    <Typography
                      color={"#6755DF"}
                      fontSize={"20px"}
                      fontWeight={600}
                    >
                      Standard Edition
                    </Typography>
                    <Typography
                      color={"#000000"}
                      fontSize={"16px"}
                      fontWeight={600}
                    >
                      CLOUD
                    </Typography>
                  </th>
                  <th>
                    <Typography
                      color={"#6755DF"}
                      fontSize={"20px"}
                      fontWeight={600}
                    >
                     Enterprise Edition
                    </Typography>
                    <Typography
                      color={"#000000"}
                      fontSize={"16px"}
                      fontWeight={600}
                    >
                      Cloud <br /> On-Premises
                    </Typography>
                  </th>
                </tr>
                <tr>
                  <td>
                    <Typography
                      className="first-row"
                      textTransform="uppercase"
                      fontSize={"15px"}
                      fontWeight={600}
                      color={"#787878"}
                      lineHeight={"18px"}
                    >
                      Explore Automation Opportunities
                      {/* <br /> POWERED BY AI AND YOUR PEOPLE */}
                    </Typography>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  {/* <td>
                    <Typography className='first-row' fontSize={'12px'} fontWeight={600} lineHeight={'18px'}>
                      Automation Hub
                    </Typography>
                  </td> */}
                  <td>
                    <Typography
                      className="first-row"
                      fontSize={"12px"}
                      fontWeight={600}
                      lineHeight={"18px"}
                    >
                      Data Management
                    </Typography>
                  </td>
                  {/* <td><BsDashLg size={25} /></td>
                  <td><BsDashLg size={25} /></td> */}
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td>
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography
                      className="first-row"
                      fontSize={"12px"}
                      fontWeight={600}
                      lineHeight={"18px"}
                    >
                      {/* Task Capture */}
                      Task Management
                    </Typography>
                  </td>
                  {/* <td><BsDashLg size={25} /></td>
                  <td><BsDashLg size={25} /></td> */}
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td>
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td>
                </tr>
                {/* <tr>
                  <td>
                    <Typography className='first-row' fontSize={'12px'} fontWeight={600} lineHeight={'18px'}>
                      Process Minig
                    </Typography>
                  </td>
                  <td><BsDashLg size={25} /></td>
                  <td><BsDashLg size={25} /></td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                </tr> */}
                {/* <tr>
                  <td>
                    <Typography className='first-row' fontSize={'12px'} fontWeight={600} lineHeight={'18px'}>
                      Task Minig
                    </Typography>
                  </td>
                  <td><BsDashLg size={25} /></td>
                  <td><BsDashLg size={25} /></td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                </tr> */}
                <tr>
                  <td>
                    <Typography
                      className="first-row"
                      textTransform="uppercase"
                      fontSize={"15px"}
                      fontWeight={600}
                      color={"#787878"}
                      lineHeight={"18px"}
                    >
                      Create & Test Automation Plan
                      {/*  <br /> THE SIMPLE TO THE ADVANCED */}
                    </Typography>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <Typography
                      className="first-row"
                      fontSize={"12px"}
                      fontWeight={600}
                      lineHeight={"18px"}
                    >
                      Bot Management
                    </Typography>
                  </td>
                  {/* <td><BsDashLg size={25} /></td>
                  <td><BsDashLg size={25} /></td> */}
                  <td>1</td>
                  {/* <td><FiCheckCircle size={25} color='#6755df' /></td> */}
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography
                      className="first-row"
                      fontSize={"12px"}
                      fontWeight={600}
                      lineHeight={"18px"}
                    >
                      Headquarter
                    </Typography>
                  </td>
                  {/* <td><BsDashLg size={25} /></td>
                  <td><BsDashLg size={25} /></td> */}
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td>
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography
                      className="first-row"
                      fontSize={"12px"}
                      fontWeight={600}
                      lineHeight={"18px"}
                    >
                      Activity Logs (Recording)
                    </Typography>
                  </td>
                  {/* <td><BsDashLg size={25} /></td>
                  <td><BsDashLg size={25} /></td> */}
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td>
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td>
                </tr>
                {/* <tr>
                  <td>
                    <Typography
                      className="first-row"
                      fontSize={"12px"}
                      fontWeight={600}
                      lineHeight={"18px"}
                    >
                      Document Understanding
                    </Typography>
                  </td>
                  <td>
                    <BsDashLg size={25} />
                  </td>
                  <td>
                    <BsDashLg size={25} />
                  </td>
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td>
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td>
                </tr> */}
                {/* <tr>
                  <td>
                    <Typography
                      className="first-row"
                      fontSize={"12px"}
                      fontWeight={600}
                      lineHeight={"18px"}
                    >
                      Integration Service
                    </Typography>
                  </td>
                  <td>
                    <BsDashLg size={25} />
                  </td>
                  <td>
                    <BsDashLg size={25} />
                  </td>
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td>
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td>
                </tr> */}
                <tr>
                  <td>
                    <Typography
                      className="first-row"
                      fontSize={"15px"}
                      fontWeight={600}
                      textTransform="uppercase"
                      color={"#787878"}
                      lineHeight={"18px"}
                    >
                      Deploy Your Automation At Organizational Scale
                      {/* <br /> THE SIMPLE
                      TO THE ADVANCED */}
                    </Typography>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <Typography
                      className="first-row"
                      fontSize={"12px"}
                      fontWeight={600}
                      lineHeight={"18px"}
                    >
                      User Management
                    </Typography>
                  </td>
                  <td>Limited</td>
                  {/* <td>
                    <BsDashLg size={25} />
                  </td>
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td> */}
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography
                      className="first-row"
                      fontSize={"12px"}
                      fontWeight={600}
                      lineHeight={"18px"}
                    >
                      Orchestrator
                    </Typography>
                  </td>
                  <td>Limited Access</td>
                  {/* <td>
                    <BsDashLg size={25} />
                  </td>
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td> */}
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography
                      className="first-row"
                      fontSize={"12px"}
                      fontWeight={600}
                      lineHeight={"18px"}
                    >
                      AI/ML as a Service
                    </Typography>
                  </td>
                  <td>
                    <BsDashLg size={25} />
                  </td>
                  {/* <td>
                    <BsDashLg size={25} />
                  </td> */}
                  {/* <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td> */}
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography
                      className="first-row"
                      fontSize={"12px"}
                      fontWeight={600}
                      lineHeight={"18px"}
                    >
                      Intelligent Document Processing
                    </Typography>
                  </td>
                  <td>Upto 5</td>
                  {/* <td>
                    <BsDashLg size={25} />
                  </td>
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td> */}
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography
                      className="first-row"
                      fontSize={"12px"}
                      fontWeight={600}
                      lineHeight={"18px"}
                    >
                      App
                    </Typography>
                  </td>
                  <td>Limited</td>
                  {/* <td>
                    <BsDashLg size={25} />
                  </td>
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td> */}
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography
                      className="first-row"
                      fontSize={"15px"}
                      fontWeight={600}
                      textTransform="uppercase"
                      color={"#787878"}
                      lineHeight={"18px"}
                    >
                     Analyse Performance Improvent <br /> of Your Automation
                    </Typography>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <Typography
                      className="first-row"
                      fontSize={"12px"}
                      fontWeight={600}
                      lineHeight={"18px"}
                    >
                      Dashboard
                    </Typography>
                  </td>
                  <td>
                  Default Report
                  </td>
                  {/* <td>
                    <BsDashLg size={25} />
                  </td>
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td> */}
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography
                      className="first-row"
                      fontSize={"12px"}
                      fontWeight={600}
                      lineHeight={"18px"}
                    >
                     Report Monitoring
                    </Typography>
                  </td>
                  {/* <td>
                    <BsDashLg size={25} />
                  </td> */}
                  <td>
                    <BsDashLg size={25} />
                  </td>
                  {/* <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td> */}
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography
                      className="first-row"
                      fontSize={"12px"}
                      fontWeight={600}
                      lineHeight={"18px"}
                    >
                     Credential Vault
                    </Typography>
                  </td>
                  <td>
                  Limited
                  </td>
                  {/* <td>
                    <BsDashLg size={25} />
                  </td>
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td> */}
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography
                      className="first-row"
                      fontSize={"12px"}
                      fontWeight={600}
                      lineHeight={"18px"}
                    >
                    AD Authentication And SSO
                    </Typography>
                  </td>
                  <td>
                    <BsDashLg size={25} />
                  </td>
                  {/* <td>
                    <BsDashLg size={25} />
                  </td>
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td> */}
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography
                      className="first-row"
                      fontSize={"15px"}
                      fontWeight={600}
                      color={"#787878"}
                      lineHeight={"18px"}
                    >
                     Support
                      {/* <br /> FOR SEAMLESS
                      PROCESS COLLABORATION */}
                    </Typography>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <Typography
                      className="first-row"
                      fontSize={"12px"}
                      fontWeight={600}
                      lineHeight={"18px"}
                    >
                     Standard Support
                    </Typography>
                  </td>
                  <td>
                  Community Support
                  </td>
                  {/* <td>
                    <BsDashLg size={25} />
                  </td>
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td> */}
                  <td>
                  Dedicated Support
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography
                      className="first-row"
                      fontSize={"12px"}
                      fontWeight={600}
                      lineHeight={"18px"}
                    >
                     Additional Cost For Hosting
                    </Typography>
                  </td>
                  {/* <td>
                    <BsDashLg size={25} />
                  </td>
                  <td>
                    <BsDashLg size={25} />
                  </td>
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td>
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td> */}
                </tr>
                {/* <tr>
                  <td>
                    <Typography
                      fontSize={"12px"}
                      fontWeight={600}
                      color={"#787878"}
                      lineHeight={"18px"}
                    >
                      ADMINISTRATION & SUPPORT
                    </Typography>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr> */}
                {/* <tr>
                  <td>
                    <Typography
                      className="first-row"
                      fontSize={"12px"}
                      fontWeight={600}
                      lineHeight={"18px"}
                    >
                      Tenants
                    </Typography>
                  </td>
                  <td>
                    <BsDashLg size={25} />
                  </td>
                  <td>
                    <BsDashLg size={25} />
                  </td>
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td>
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td>
                </tr> */}
                {/* <tr>
                  <td>
                    <Typography
                      className="first-row"
                      fontSize={"12px"}
                      fontWeight={600}
                      lineHeight={"18px"}
                    >
                      Standard Support
                    </Typography>
                    <Typography
                      fontSize={"12px"}
                      fontWeight={600}
                      color={"#787878"}
                      lineHeight={"18px"}
                    >
                      Additional Support options are available
                    </Typography>
                  </td>
                  <td>
                    <BsDashLg size={25} />
                  </td>
                  <td>
                    <BsDashLg size={25} />
                  </td>
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td>
                  <td>
                    <FiCheckCircle size={25} color="#6755df" />
                  </td>
                </tr> */}
              </tbody>
            </table>
          </Box>
        </Container>
      </Box>

      {/* <Box sx={{ mb: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Stack
                sx={{
                  backgroundColor: '#F1F0FF',
                  p: 2,
                  borderRadius: '16px'
                }}
                direction={'row'}
              >
                <Box sx={{ pr: 2 }}>
                  <Image
                    src="/images/person-graduate.png"
                    alt='person'
                    width={50}
                    height={50}
                  />
                </Box>
                <Box>
                  <Typography color={'#6755DF'} fontSize={'18px'} fontWeight={600}>
                    Academy
                  </Typography>
                  <Typography fontSize={'14px'} fontWeight={400}>
                    Learn today the skills of the future with free <br /> online RPA training.
                  </Typography>
                  <AIRAButtonOutline sx={{ mt: 3 }} endIcon={<ArrowForwardIcon />}>
                    Start Learning
                  </AIRAButtonOutline>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack
                sx={{
                  backgroundColor: '#F1F0FF',
                  p: 2,
                  borderRadius: '16px'
                }}
                direction={'row'}
              >
                <Box sx={{ pr: 2 }}>
                  <Image
                    src="/images/AtoB.png"
                    alt='person'
                    width={50}
                    height={50}
                  />
                </Box>
                <Box>
                  <Typography color={'#6755DF'} fontSize={'18px'} fontWeight={600}>
                    Marketplace
                  </Typography>
                  <Typography fontSize={'14px'} fontWeight={400}>
                    Access an extensive library of <br /> hundreds of reusable RPA components.
                  </Typography>
                  <AIRAButtonOutline sx={{ mt: 3 }} endIcon={<ArrowForwardIcon />}>
                    Explore Marketplace
                  </AIRAButtonOutline>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box> */}

      <Box
        style={{
          position: "absolute",
          top: 50,
          zIndex: -1,
        }}
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <AIRAMonoLinesLeft />
      </Box>
    </Box>
  );
};

export default index;
