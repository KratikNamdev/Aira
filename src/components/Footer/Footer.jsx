import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
  Container
} from "@mui/material";
import _ from "lodash";
import Colors from '@/common/Colorscomponents';
import NewsLetter from '../NewsLetter/NewsLetter';
import FooterLinks from '../FooterLinks/FooterLinks';
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router';
import TryAiraDialog from '../TryAiraDialog/TryAiraDialog';
import Link from 'next/link';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
// import FlagFrance from "/FlagFrance.png";
// import FlagIndia from "/flagIndia.png";
// import FlagSaudi from "/flagSaudi.png";
// import Mail from "../public/mail.png";

const FOOTERFLAGData = [
  {
    id: "france_add",
    icon: "france_flag",
    text: "15 Rue, Jacobi Netter,Strasbourg, France",
    type: "address",
    url: "https://maps.app.goo.gl/CA86cLpDxdb8xyNM9",
  },
  {
    id: "france_contact",
    icon: "france_flag",
    text: "+33 1 89 16 58 28",
    type: "contact",
  },
  {
    id: "india_add",
    icon: "india_flag",
    text: "502 Vikram Heights, YN Road,Indore, India",
    type: "address",
    url: "https://maps.app.goo.gl/gwPcMyrvFLE3N5BH9",

  },
  {
    id: "india_contact",
    icon: "india_flag",
    text: "+91 731 4978110",
    type: "contact",
  },
  {
    id: "saudi_add",
    icon: "saudi_flag",
    text: "Riyadh, Saudi Arabia",
    type: "address",
    url: "https://maps.app.goo.gl/7rmfnZaBnRNGUTi39"
  },
  {
    id: "saudi_contact",
    icon: "saudi_flag",
    text: "+966 55 441 6442",
    type: "contact",
  },
  {
    id: "mail",
    icon: "mail",
    text: "connect@aira.fr",
    type: "email",
  },
];

const getIcon = (icon) => {
  switch (icon) {
    case "france_flag":
      return (
        <Avatar
          src='/flagFrance.png'
          alt="Flag India"
          sx={{ width: 25, height: 25 }}
        />
      );
    case "india_flag":
      return (
        <Avatar 
          src='/flagIndia.png'
          alt="Flag France"
          sx={{ width: 25, height: 25 }}
        />
      );
    case "saudi_flag":
      return (
        <Avatar
          src='/flagSaudi.png'
          alt="Flag Saudi"
          sx={{ width: 25, height: 25 }}
        />
      );
    case "mail":
      return <Avatar src='/mail.png' alt="Mail" sx={{ width: 25, height: 25 }} />;
    default:
      return (
        <Avatar
          src='/flagIndia.png'
          alt="Flag India"
          sx={{ width: 25, height: 25 }}
        />
      );
  }
};

const FOOTERLINKS = [
  {
    title: "Company",
    lists: [
      { label: "About us", route: "company/about_us" },
      { label: "Career", route: "company/careers" },
      // { label: "Leadership Team", route: "company/leadership_team" },
      { label: "Documentation", route: "resources/documentation" },
      { label: "Pricing", route: "company/pricing" },
      // { label: "Licence", route: "company/licence" },
      { label: "Partner", route: "company/partner" },
    ],
    gridValue: { xs: 12, md: 3 },
  },
  {
    title: "Explore",
    lists: [
      {
        label: "Hyper-automation Solution",
        route: "platform/hyperautomationsolution",
      },
      { label: "AI/ML", route: "platform/aiml" },
      {
        label: "Robotic Process automation",
        route: "platform/rpa",
      },
      {
        label: "Intelligent Document processing",
        route: "platform/idp",
      },
      { label: "Workflow", route: "platform/workflow" },
      { label: "Orchestrator", route: "platform/orchestrator" },
      { label: "Predictive Analytics", route: "platform/predictive_analytics" },
      { label: "Process mining", route: "platform/process_mining" },
    ],
    gridValue: { xs: 12, md: 4 },
  },
  {
    title: "Support",
    lists: [
      { label: "Sales Support", route: "contact" },
      { label: "Technical Support", route: "technical_support" },
    ],
    gridValue: { xs: 12, md: 5 },
  },
];

const Footer = () => {
  const { t } = useTranslation('footer');
  const router = useRouter();
  const [openTryAIRADialog, setOpenTryAIRADialog] = useState(false);

  const footerNavigation = (route) => {
    router.push(`/${route}`)
  };

  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          color="primary"
          variant="contained"
          className="text-nowrap"
          onClick={() => {
            setOpenTryAIRADialog(true);
          }}
          sx={{
            fontFamily: "Montserrat",
            fontSize: "14px",
            fontWeight: 700,
            borderRadius: "30px",
            backgroundColor: "#6755DF"
          }}
        >
          Request your free trial now
        </Button>
      </Grid>
      <Divider sx={{ my: 2 }} />

      <NewsLetter />

      <Divider sx={{ my: 2 }} />
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          rowSpacing={1}
        // columnSpacing={{ xs: 2, sm: 3, md: 12, lg: 6 }}
        >
          <Grid
            item
            container
            justifyContent="space-between"
            xs={12} sm={12} md={12} lg={7}
            style={{marginTop:'25px'}}
          >
      
            {FOOTERLINKS?.map((item, idx) => {
              return (
                <Grid key={idx} item container justifyContent="space-between" xs={12} lg={4}>
                  <Box sx={{ width: '100%' }} {...item?.gridValue}>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 700, color: Colors?.airaSecondary }}
                    >
                      {item.title}
                    </Typography>
                    <Box gap={1} sx={{ my: 1 }}>
                      {item?.lists?.map((listItem, listIdx) => {
                        return (
                          <Box key={listIdx}>
                            {listItem?.label === "Documentation" ?
                              <Link
                                // key={listIdx.route}
                                href={`http://wiki.aira.technology:8000/en/home`}
                                style={{
                                  textDecoration: "none",
                                  color: "#000",
                                }}
                                target="_blank"
                              >
                                <Typography
                                  my={1}
                                  variant="subtitle2"
                                  className="text-nowrap"
                                  // key={listItem.route}
                                  sx={{
                                    cursor: "pointer",
                                    "&:hover": {
                                      //color: Colors.airaPrimary,
                                      //color: "#000",
                                      // fontWeight: 600,
                                      color: Colors.airaSecondary,
                                    },
                                  }}
                                >
                                  {t(listItem?.label)}
                                </Typography>
                              </Link>
                              :
                              <Typography
                                onClick={() => footerNavigation(listItem.route)}
                                my={1}
                                variant="subtitle2"
                                className="text-nowrap"
                                // key={listItem.route}
                                sx={{
                                  cursor: "pointer",
                                  "&:hover": {
                                    //color: Colors.airaPrimary,
                                    //color: "#000",
                                    // fontWeight: 600,
                                    color: Colors.airaSecondary,
                                  },
                                }}
                              >
                                {t(listItem?.label)}
                              </Typography>
                            }

                          </Box>
                        );
                      })}
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            xs={12} sm={12} md={12} lg={5}
          >
            <Grid
              item
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              xs={12} sm={12} md={12}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: 700, color: Colors.airaSecondary }}
              >
                Contact Us
              </Typography>
            </Grid>
            {FOOTERFLAGData?.map((flagItem, flasgIdx) => {
              let _connectType = "mailto";
              switch (flagItem?.type) {
                case "email":
                  _connectType = `mailto:${flagItem.text}`;
                  break;
                case "contact":
                  _connectType = `tel:${flagItem.text}`;
                  break;
                 
                case "address":
                  _connectType = `https://www.google.com/maps`;
                  break;
                default:
                  _connectType = "#";
              }
              return (
                <Grid
                  item
                  key={flagItem?.id}
                  rowGap={{ xs: 2, sm: 3, md: 4 }}
                  sm={4}
                  container
                  // direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  xs={12} md={6}
                >

{/* <Link key={flagItem.id} href={flagItem.url || "#" } style={{textDecoration:'none' , color:'black'}}> */}
               

                  <Stack direction="row" gap={1.5} alignItems="center" sx={{ py: 1.5 }}>
                    <div>{getIcon(flagItem?.icon)}</div>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontSize: "14px", fontFamily: "Montserrat" }}
                    >

                    
                
<Link key={flagItem?.id} href={flagItem?.url || "#" } style={{textDecoration:'none'  , color:'black'}}  rel="noreferrer">


                        {flagItem?.text}
                        </Link>


                 
                    </Typography>
                  </Stack>

                {/* </Link> */}
                </Grid>

              );
            })}

            <Grid item
              rowGap={{ xs: 2, sm: 3, md: 4 }}
              sm={4}
              container
              // direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              xs={12} md={6}
            >
              <Stack direction="row" gap={1.5} alignItems="center" sx={{ py: 1.5 }} >
                <a href="https://www.linkedin.com/company/aira-rpa" target='_blank' style={{color:'#0882BD'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
                  </svg>
                </a>
                <a href="https://medium.com/@shwetanganee_12954" target='_blank' style={{color: 'black'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-medium" viewBox="0 0 16 16">
                    <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795" />
                  </svg>
                </a>
                <a href="https://in.pinterest.com/connect_aira" target='_blank' style={{color: '#BE0216'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-pinterest" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/channel/UCHHCcwQrx-_19sAhu-2R4ww" target='_blank' style={{color: '#E7082A'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
                  </svg>
                </a>
                <a href="https://twitter.com/Aira_RPA" target='_blank' style={{color: 'black'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                  </svg>
                </a>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Typography textAlign="center" variant="subtitle2" sx={{ fontWeight: 500, pt: 3 }}>
          Copyright © {new Date().getFullYear()} AIRA a product of
          HyperAutomation Solutions Pvt. Ltd. All Rights Reserved.
        </Typography>
      </Container>

      {/* Footer links  */}
      <FooterLinks />

      <TryAiraDialog
        open={openTryAIRADialog}
        handleClose={() => {
          setOpenTryAIRADialog(false);
        }}
      />
    </Box>
  );
};

export default Footer