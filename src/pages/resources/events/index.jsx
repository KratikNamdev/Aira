import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Chip,
  Divider,
  Grid,
  Pagination,
  Stack,
  Typography,
  Button,
  Container,
  CardMedia
} from "@mui/material";
import Image from 'next/image';
import RSelect from "react-select";
import AIRAMonoLinesLeft from '@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents';
import Colors from '@/common/Colorscomponents';
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useRouter } from 'next/router';

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

const IMGBASEURL = "/images/events";

const EVENTS_DATA = [
  {
    title: "Title of the event",
    image: "event_img_1.png",
    date: "02/02/2022",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo.",
  },
  {
    title: "Title of the event",
    date: "02/02/2022",
    image: "event_img_2.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo.",
  },
  {
    title: "Title of the event",
    date: "02/02/2022",
    image: "event_img_3.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo.",
  },
];

const EventCard = (props) => {
  const router=useRouter();

  const { img, title, desc, ts, slug } = props;

  return (
    <Card raised sx={{ borderRadius: "10px", cursor: 'pointer' }} onClick={() => {
      router.push(`/event/${slug}`);
    }}>
      <CardMedia
        sx={{ height: 200 }}
        image={`${img.url}`}
        title="green iguana"
      />
      <CardContent sx={{ maxHeight: "300px" }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ color: Colors.airaSecondary, fontWeight: 600 }}
        >
          {title}
        </Typography>
        <Stack
          direction="row"
          gap={2}
          sx={{ my: 2, color: Colors.airaPrimary }}
          alignItems="center"
          justifycontent="center"
        >
          <CalendarMonthIcon />
          <Typography variant="subtitle2">{`${new Date(Number(ts)).toLocaleDateString('en-US', { month: 'long' })} ${new Date(Number(ts)).getDate()}, ${new Date(Number(ts)).getFullYear()}`}</Typography>
        </Stack>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          textOverflow="ellipsis"
          dangerouslySetInnerHTML={{__html: desc}}
        >
          
        </Typography>
      </CardContent>
      <CardActions>
        <Box>
          <Button variant="text" color="primary" endIcon={<ArrowForwardIcon />}>
            Register Now
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

const Index = () => {
  const [BLOGS, setBLOGS] = useState([]);
  const [data1, setData1] = useState([]);
  const [cats, setCats] = useState([]);
  const [value, setValue] = useState({
    category: '',
    type: ''
  });

  useEffect(() => {
    getData1();
  }, []);

  useEffect(() => {
    getData();
  }, [value.category, value.type]);

  const getData = async () => {
    // let resp = await fetch(`http://localhost:5000/event/getEvents?status=true&category=${value.category}&type=${value.type}`);
    let resp = await fetch(`https://aira-zij7.onrender.com/event/getEvents?status=true&category=${value.category}&type=${value.type}`);
    let data = await resp?.json();
    // console.log(data.data);
    setBLOGS(data?.data);
    setData1(data?.data);
  };

  const getData1 = async () => {
    let resp = await fetch('https://aira-zij7.onrender.com/category/getCategorys');
    // let resp = await fetch('http://localhost:5000/category/getCategorys');
    let data = await resp.json();
    // console.log(data.data);
    setCats(data?.data);
  };

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
                    color: Colors.airaSecondary,
                  }}
                >
                  Events
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    lineHeight: 1.6,
                    color: Colors.eggplant,
                  }}
                >
                  Get up close and personal with our people and products
                </Typography>
              </Box>
            </Stack>
          </Container>
        </Grid>
        <Grid item xs={12} md={5}>
          <div>
            <Image
              src={`${IMGBASEURL}/events_header2.png`}
              alt="bankingheader"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', borderRadius: 8 }}
            />
          </div>
        </Grid>
      </Grid>

      <Container maxWidth="md">
        <Box sx={{ borderRadius: "20px", mx: "auto", pt: 8 }}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                backgroundColor: Colors.airaPrimary,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderTopLeftRadius: "15px",
                borderBottomLeftRadius: "15px",
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
                  Live - stay <br /> in the know
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  The latest news, advice, and analysis from industry experts
                </Typography>
                {/* <Box>
                  <Button
                    variant="outlined"
                    color="secondary"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      mt: 5,
                      border: "1px solid #fff",
                      color: "#fff",
                      borderRadius: "10px",
                    }}
                  >
                    Watch Now
                  </Button>
                </Box> */}
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack>
                <Image
                  src={`${IMGBASEURL}/aira_live2.png`}
                  alt="AIRA Live"
                  // style={{ width: "100%", height: "300px" }}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', borderTopRightRadius: 8, borderBottomRightRadius: 8 }}
                />
              </Stack>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ margin: "0 auto", my: 6 }}>
          <Grid container spacing={3}>
            {BLOGS?.length > 0 ? BLOGS.map((blogItem, blogIdx) => {
              return (
                <Grid item xs={12} md={4} key={blogIdx}>
                  <EventCard {...blogItem} />
                </Grid>
              );
            }) : 'No data found'}
          </Grid>

          {/* <Stack
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
          </Stack> */}
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
  );
};

export default Index;
