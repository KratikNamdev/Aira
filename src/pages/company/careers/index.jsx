import React from 'react';
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
  Avatar
} from "@mui/material";
import Image from 'next/image';
import _ from "lodash";
import RSelect from "react-select";
import AIRAMonoLinesLeft from '@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents';
import Colors from '@/common/Colorscomponents';
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import BtnLeftImageRightCard from '@/common/BtnLeftImageRightCardcomponents';
import BtnRightImageLeftCard from '@/common/BtnRightImageLeftCardcomponents';
import { styled } from '@mui/material/styles';

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


const IMGBASEURL = "/images/careers";

const LR_ITEMS = [
  {
    cardTitle: "Internship Programs",
    cardDesc:
      "Explore a wide range of opportunities for graduate and postgraduate students to get a perfect kickstart for their technical career.",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Entry Level Opportunities",
    cardDesc:
      "Inviting entry level professionals for a chance to start your career and explore how you can transform the world.",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Senior Level Opportunities",
    cardDesc:
      "Inviting exceptional leaders and subject matter experts to guide the teams at AIRA and help them take the brand to the next level.",
    imgSrc: `reach_out_3.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const DIFFERENT_DATA = [
  {
    text: "Engaged and enthusiastic workforce to imbibe positive work culture.",
  },
  { text: "We embrace diversity and provide equal opportunities to everyone." },
  { text: "Internal events to promote better understanding among employees." },
  { text: "Value creation and constant attention to all stakeholders’ needs." },
  {
    text: "Open and creative organization providing you space to show your brilliance.",
  },
  {
    text: "Fellowships, self-paced learning, and mentoring to accelerate learning and career development.",
  },
];

const VACANCIES = [
  {
    title: "PHP Developer",
    desc: "Information Technology",
    type: "Full Time",
    level: "Mid Level",
  },
  {
    title: "Full Stack Developer",
    desc: "Information Technology",
    type: "Full Time",
    level: "Mid Level",
  },
  {
    title: "Python Developer",
    desc: "Information Technology",
    type: "Full Time",
    level: "Mid Level",
  },
  {
    title: "Business Developer",
    desc: "Information Technology",
    type: "Full Time",
    level: "Mid Level",
  },
  {
    title: "React Developer",
    desc: "Information Technology",
    type: "Full Time",
    level: "Mid Level",
  },
  {
    title: "NodeJS Developer",
    desc: "Information Technology",
    type: "Full Time",
    level: "Mid Level",
  },
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
                  }}
                >
                  Opportunities at AIRA
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    lineHeight: 1.6,
                    color: Colors.eggplant,
                  }}
                >
                  Inviting technology evangelists to build a future driven by
                  automation and innovation
                </Typography>
                {/* <Box>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ color: "#fff", backgroundColor: '#FFAF00', mt: 2 }}
                  >
                    Search Jobs
                  </Button>
                </Box> */}
              </Box>
            </Stack>
          </Container>
        </Grid>
        <Grid item xs={12} md={5}>
          <div>
            <Image
              src={`${IMGBASEURL}/careersheader2.png`}
              alt="bankingheader"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', borderRadius: 8 }}
            />
          </div>
        </Grid>
      </Grid>

      <Container maxWidth="lg" sx={{ my: 5 }}>
        <Grid
          sx={{ pt: 4 }}
          container
          spacing={5}
          justifyContent="left"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            {/* <div style={{ position: "relative" }}> */}
            {/* <div
                style={{
                  height: "140px",
                  width: "40px",
                  position: "absolute",
                  transform: "rotate(35deg)",
                  borderRadius: "50px",
                  backgroundColor: Colors.airaPrimary,
                  top: 150,
                  marginLeft: "-30px",
                }}
              ></div>
              <div
                style={{
                  height: "140px",
                  width: "40px",
                  top: 200,
                  transform: "rotate(35deg)",
                  position: "absolute",
                  borderRadius: "50px",
                  backgroundColor: Colors.airaSecondary,
                }}
              ></div>
              <div
                style={{
                  height: "140px",
                  width: "40px",
                  transform: "rotate(35deg)",
                  top: 250,
                  position: "absolute",
                  borderRadius: "50px",
                  marginLeft: "35px",
                  border: `1px solid ${Colors.airaPrimary}`,
                }}
              ></div> */}
            <Box
              sx={{
                backgroundColor: Colors.airaPrimary,
                borderRadius: "10px",
                position: "relative",
                width: "60%",
              }}
            >
              <Image
                src={`${IMGBASEURL}/whyjoinaira.png`}
                alt="whyjoinaira"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', zIndex: 2 }}
              />
            </Box>
            {/* </div> */}
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack gap={2}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  lineHeight: 1.2,
                  color: "#200E32",
                }}
              >
                Why Join AIRA?
              </Typography>
              <Typography
                variant="body"
                sx={{
                  fontWeight: 500,
                  lineHeight: 2,
                  color: "#200E32",
                }}
              >
                At AIRA, we are always on the lookout for curious minds who work
                to lead and innovate for creating solutions that improve people’s
                lives. If you have ideas and a passion for making a difference,
                come join us. AIRA offers you a dynamic community to work with. We
                have exceptional people from around the world working with us on
                solving complex, real-world problems that augment human
                possibility.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ py: 10, backgroundColor: Colors.steelGrey }}>
        <Container maxWidth="md">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>
            What make us different ?
          </Typography>
          <Grid container spacing={2}>
            {DIFFERENT_DATA.map((dataItem, idx) => {
              return (
                <Grid item key={idx} xs={12} sm={4} sx={{ display: "flex" }}>
                  <Card
                    sx={{
                      backgroundColor: Colors.airaPrimaryDark,
                      borderRadius: "20px",
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{ color: Colors.lightText }}
                      >
                        {dataItem.text}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Stack sx={{ mb: 5 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Jobs at AIRA
          </Typography>
          <Typography variant="body" sx={{ lineHeight: 2 }}>
            At AIRA, we nurture talents to build a culture of innovation. We’ll
            harness every breadth of your knowledge to take your expertise to the
            next level. Kick-start your career with us and traverse as far as your
            ambitions take you.
          </Typography>
        </Stack>

        {/* <Grid container spacing={4}>
          {VACANCIES.map((item, idx) => {
            const { title, desc, type, level } = item;
            return (
              <Grid item key={idx} xs={12} sm={4}>
                <Card
                  raised
                  sx={{
                    border: `2px solid ${Colors.airaPrimary}`,
                    color: Colors.eggplant,
                    borderRadius: "15px",
                  }}
                >
                  <CardContent>
                    <Stack gap={2}>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {title}
                      </Typography>
                      <Typography variant="subtitle1">{desc}</Typography>
                      <Stack direction="row" gap={2}>
                        <Typography variant="subtitle2">
                          <Image
                            src={`${IMGBASEURL}/time-clock-square.png`}
                            alt="type"
                            width={25}
                            height={25}
                          // sizes="100vw"
                          // style={{
                          //   height: "100%",
                          //   width: "100%",
                          //   borderRadius: "12px",
                          //   zindex: -1,
                          //   marginRight: "5px"
                          // }}
                          />
                          {type}
                        </Typography>
                        <Typography variant="subtitle2">
                          <Image
                            src={`${IMGBASEURL}/menu-modern-square.png`}
                            alt="type"
                            width={25}
                            height={25}
                          // sizes="100vw"
                          // style={{
                          //   height: "100%",
                          //   width: "100%",
                          //   borderRadius: "12px",
                          //   zindex: -1,
                          //   marginRight: "5px"
                          // }}
                          />
                          {level}
                        </Typography>
                      </Stack>

                      <Box>
                        <Button variant="contained" size="small" sx={{ mt: 1 }}>
                          Apply Now
                        </Button>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid> */}
      </Container>

      <Container maxWidth="lg" sx={{ my: 10 }}>
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
      </Container>

      <Container maxWidth="md">
        <Box sx={{ my: 10 }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontWeight: 600, mb: 3 }}
          >
            Employee Speaks
          </Typography>
          <Card raised sx={{ borderRadius: "15px" }}>
            <CardContent sx={{ p: 4 }}>
              <Stack alignItems="center" justifyContent="center" sx={{ mb: 3 }}>
                <Avatar
                  src={`${IMGBASEURL}/shweta.png`}
                  alt="Shetanganee"
                  sx={{ width: 100, height: 100 }}
                />

                <Typography
                  variant="body1"
                  sx={{
                    color: Colors.airaPrimary,
                    fontWeight: "bold",
                    mt: 2,
                    mb: "5px",
                  }}
                >
                  SHWETANGANEE DUBEY
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ fontWeight: "bold" }}
                >
                  Marketing Manager
                </Typography>
              </Stack>
              <Typography
                variant="body1"
                sx={{ lineHeight: 1.6, color: Colors.eggplant }}
              >
                “AIRA is a great place to work. It is a young organization with a
                contemporary, innovative, and entrepreneurial approach that
                distinguishes it from its competitors. I have been with the
                organization for more than 2 years now, and have seen myself
                transform as a professional in more than one way. With the support
                from great leaders, mentors, and professionals around, the job
                becomes very easy.”
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>

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
}

export default index