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
  Container
} from "@mui/material";
import Image from 'next/image';
import RSelect from "react-select";
import AIRAMonoLinesLeft from '@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents';
import Colors from '@/common/Colorscomponents';
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { styled } from '@mui/material/styles';
import BtnLeftImageRightCard from '@/common/BtnLeftImageRightCardcomponents';
import BtnRightImageLeftCard from '@/common/BtnRightImageLeftCardcomponents';
import _ from "lodash";

const InputField = styled('input')({
  display: 'block',
  width: '100%',
  padding: '0.375rem 0.75rem',
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: 1.5,
  color: '#212529',
  backgroundColor: '#fff',
  backgroundClip: 'padding-box',
  border: '1px solid #ced4da',
  appearance: 'none',
  borderRadius: '0.375rem',
  transition: 'border-color .15s ease -in -out, box - shadow .15s ease -in -out'
})

const IMGBASEURL = "/images/imgbot";

const LR_ITEMS = [
  {
    cardTitle: "Adaptive Agents",
    cardDesc:
      "AIRA’s digital agents are designed to swiftly adapt to your existing technology stack and platforms. Right from your CMS to the enterprise applications, find how these agents glue in and start giving great results.",
    cardDesc1:
      "french",
    imgSrc: `tg1.png`,
    // btnText: "Reach Out",
    // type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Automate Rational Processes",
    cardDesc:
      "The agents flawlessly learn new AI techniques to automate the processes that involve your workforce in taking complex decisions. You can either create your own models or use the ones already available with AIRA to ensure smooth automation.",
    imgSrc: `tg2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Customize Agents",
    cardDesc:
      "Customize your AIRA agents and categorize them as per your work cycles. The agents can either function on their own, in collaboration with you or in a way that they learn and adapt the everything in the real time.",
    imgSrc: `tg3.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "left",
  },
];
const smartbot = () => {
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
                    fontWeight: 800,
                    lineHeight: 1.2,
                    color: "#200E32"
                  }}
                >
                  Smart bots for automated business processes
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 400,
                    lineHeight: 1.6,
                    color: "#200E32",
                    marginTop: "10px"
                  }}
                >
                  Turbocharge automation and expand your access to business applications with AIRA’s pre-built Digital Agents.
                </Typography>
              </Box>
            </Stack>
          </Container>
        </Grid>
        <Grid item xs={12} md={5}>
          <div>
            <Image
              src={`${IMGBASEURL}/imgui.png`}
              alt="bankingheader"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </Grid>
      </Grid>


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

      <div style={{ marginTop: "20px" }} className="content_back">


        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50.4248" cy="49.7175" r="48.5732" stroke="#6755DF" stroke-width="2" />
        </svg>
        <div className="content_sect">
          <p>AIRA’s Digital Agents are designed to automate business processes that consume human intelligence, time and energy each single day. Our pre-built, customizable Digital Agents embed the latest techniques such as Natural Language Processing to help understand a broad range of languages to interact with consumers more conveniently. AIRA’s Bots free your workforce from performing mundane tasks, so that they can focus on higher-value work that impacts your bottom line.</p>
        </div>
      </div>

      <Container maxWidth="lg" sx={{ my: 10 }}>
        <h3 style={{ textAlign: "center", color: "#6755DF" }}>AIRA Agents</h3>
        <Stack gap={4}>
          {LR_ITEMS.map((lrItem, lrIdx) => {
            let { direction, imgSrc, ...restItems } = lrItem;
            imgSrc = `${IMGBASEURL}/${imgSrc}`;
            return (
              <Box key={lrIdx} gap={1}>
                {_.isEqual(direction, "left") ? (
                  <BtnLeftImageRightCard imgSrc={imgSrc} {...restItems} />
                ) : (
                  <BtnRightImageLeftCard imgSrc={imgSrc} {...restItems} />
                )}
              </Box>
            );
          })}
        </Stack>
        <button style={{ background: "#FFAF00", display: "block", margin: "auto" }} class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">Try AIRA Free<span class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
      </Container>

{/*       <Grid sx={{ alignItems: "flex-start",padding:"60px 0px" }} container spacing={2} justifyContent="center">
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
            <Stack >
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    lineHeight: 1.2,
                    color: "#6755DF"
                  }}
                >
                  Product Resource
                </Typography>
                <div className="card_bot">
                  <div className="box_bot">
                    <div className="bot1">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="15" stroke="#FFAF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <circle cx="20.832" cy="25.8333" r="2.5" stroke="#FFAF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.5087 25.7727C10.4123 25.3083 5 22.9043 5 20" stroke="#FFAF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <ellipse cx="19.168" cy="14.1667" rx="2.5" ry="2.5" stroke="#FFAF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22.4922 14.2273C29.5886 14.6917 35.0009 17.0957 35.0009 20" stroke="#FFAF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M34.9987 20C34.9987 22.0272 32.337 23.7942 28.332 24.8459" stroke="#FFAF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.6667 15.154C7.66167 16.2057 5 17.9728 5 20" stroke="#FFAF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                    </div>
                    <div className="bot2">
                      <h3>RPA Digital agents for Supply Chain Management</h3>
                      <button><span>Read more</span>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.668 26.6666L23.3346 20L16.668 13.3333" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="box_bot">
                    <div className="bot1">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.51178 23.7615C6.67734 24.8224 6.46557 26.2452 6.95488 27.5031C8.28877 29.8057 13.8327 29.1705 19.9986 26.2442" stroke="#FFAF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M32.4908 16.2384C33.3243 15.1772 33.5359 13.7549 33.0477 12.4969C31.7138 10.1942 26.1698 10.8295 20.0039 13.7557" stroke="#FFAF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M25.4292 23.1213C24.899 29.9108 22.6697 35.0062 20.0019 35.0062C18.9065 35.0062 17.8877 34.1359 17.0273 32.6536" stroke="#FFAF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.4859 11.1063C9.14614 10.917 7.80541 11.445 6.95439 12.4968C5.6205 14.7995 8.93689 19.2697 14.5726 23.1213" stroke="#FFAF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M29.5164 28.8937C30.8561 29.0829 32.1968 28.555 33.0479 27.5031C34.3817 25.2005 31.0654 20.7303 25.4297 16.8787" stroke="#FFAF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M14.5742 16.8787C15.1044 10.0892 17.3337 4.99371 20.0015 4.99371C21.0969 4.99371 22.1157 5.86408 22.9761 7.34636" stroke="#FFAF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                    </div>
                    <div className="bot2">
                      <h3>Top Characteristics of a Modern Digital Agent</h3>
                      <button><span>Read more</span>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.668 26.6666L23.3346 20L16.668 13.3333" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="box_bot">
                    <div className="bot1">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.6654 9.99998L21.6653 10.8333" stroke="#FFAF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.6654 19.1667L21.6653 20" stroke="#FFAF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M25.995 12.5001L25.2732 12.9166" stroke="#FFAF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18.0575 17.0834L17.3357 17.4999" stroke="#FFAF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.3357 12.5001L18.0575 12.9166" stroke="#FFAF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M25.2732 17.0834L25.995 17.4999" stroke="#FFAF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10 15C10 9.01694 14.8502 4.16669 20.8333 4.16669" stroke="#FFAF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20 25V26.3863C20 27.8211 19.0819 29.0949 17.7208 29.5486L14.3874 30.6597C13.3709 30.9985 12.2535 30.8281 11.3843 30.2016C10.5151 29.575 10 28.5689 10 27.4974V24.5491" stroke="#FFAF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.0178 29.7765L15.7301 33.6396C15.5607 34.1479 15.6459 34.7066 15.9591 35.1412C16.2724 35.5758 16.7755 35.8334 17.3112 35.8334H29.3531C29.8889 35.8334 30.3919 35.5758 30.7052 35.1412C31.0185 34.7066 31.1037 34.1479 30.9343 33.6396L30.4908 32.3092C29.1207 28.1989 29.6151 23.6951 31.8442 19.9799V19.9799C32.8179 18.3572 33.3322 16.5004 33.3322 14.608V14.608C33.3322 11.8388 32.2321 9.18298 30.274 7.22486C28.3159 5.26675 25.6601 4.16669 22.8909 4.16669H20.8322" stroke="#FFAF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.0005 24.549L7.59087 23.3443C7.16322 23.1317 6.84759 22.7456 6.72433 22.2842C6.60107 21.8228 6.68208 21.3307 6.94674 20.9331L10.0005 16.3525V15" stroke="#FFAF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                    </div>
                    <div className="bot2">
                      <h3>Chatbot and RPA: The future of Customer Experience</h3>
                      <button><span>Read more</span>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.668 26.6666L23.3346 20L16.668 13.3333" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </Box>
            </Stack>
          </Container>
        </Grid>
        <Grid item xs={12} md={5}>
          <div>
            <Image
              src={`${IMGBASEURL}/imgui.png`}
              alt="bankingheader"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </Grid>
      </Grid> */}

    </Box>

  )
}

export default smartbot
