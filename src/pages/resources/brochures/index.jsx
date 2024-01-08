import React, { useEffect, useState } from 'react';
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
  Container,CircularProgress
} from "@mui/material";
import Image from 'next/image';
import RSelect from "react-select";
import AIRAMonoLinesLeft from '@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents';
import Colors from '@/common/Colorscomponents';
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { styled } from '@mui/material/styles';
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

const IMGBASEURL = "/images/brochures";

const BrochuresCard = (props) => {
  const router=useRouter();

  const { img, title, desc, slug } = props;

  return (
    <Card raised sx={{cursor: 'pointer', height: "100%"}} onClick={() => {
      router.push(`/brochure/${slug}`);
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`${img.url}`}
        title="green iguana"
      />
      <CardContent sx={{ maxHeight: "300px" }}>
        <Typography
          gutterBottom
          variant="body1"
          component="div"
          sx={{ color: Colors.airaPrimary }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          textOverflow="ellipsis"
          dangerouslySetInnerHTML={{__html: desc}}
        >
          
        </Typography>
      </CardContent>
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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData1();
  }, []);

  useEffect(() => {
    getData();
  }, [value?.category, value?.type]);

  const getData = async () => {
    setLoading(true); // Set loading to true when starting to fetch data
    try {
      let resp = await fetch(`https://aira-zij7.onrender.com/broucher/getBrouchers?status=true&category=${value.category}&type=${value.type}`);
      let data = await resp?.json();
      setBLOGS(data?.data);
      setData1(data?.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading to false when data is fetched (either success or error)
    }
  };

  const getData1 = async () => {
    let resp = await fetch('https://aira-zij7.onrender.com/category/getCategorys');
    // let resp = await fetch('http://localhost:5000/category/getCategorys');
    let data = await resp?.json();
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
                  Brochures
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    lineHeight: 1.6,
                    color: Colors.eggplant,
                  }}
                >
                  Download the brochures and gain insight into how our products work.
                </Typography>
              </Box>
            </Stack>
          </Container>
        </Grid>
        <Grid item xs={12} md={5}>
          <div>
            <Image
              src={`${IMGBASEURL}/brochure_header3.png`}
              alt="bankingheader"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', borderRadius: 8 }}
            />
          </div>
        </Grid>
      </Grid>

      <Container maxWidth="lg">
        <Box sx={{ margin: "0 auto", my: 6 }}>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} md={4}>
              <InputField type="text" placeholder="Search" onChange={(e) => {
              let value = e.target.value;
              if(value!=="")
              {
                setBLOGS(() => {
                  return data1.filter((x) => {
                    return x.title.toLowerCase().includes(value.toLowerCase()) || x.tags[0].toLowerCase().includes(value.toLowerCase()) || x.timer.toLowerCase().includes(value.toLowerCase()) || x.meta.toLowerCase().includes(value.toLowerCase()) || x.slug.toLowerCase().includes(value.toLowerCase())
                  });
                });
              }
              else
              {
                setBLOGS(data1);
              }
            }} />
            </Grid>

            <Grid item xs={12} md={4}>
              <RSelect
                options={[
                  {
                    label: "All Categories",
                    value: "",
                  },
                  ...cats.map((e) => {
                    return {
                      label: e.title,
                      value: e._id
                    }
                  })
                ]}
                onChange={(e) => {
                  // console.log(e);
                  setValue({
                    ...value, category: e.value
                  });
                }}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <RSelect
                options={[
                  {
                    label: "All Tags",
                    value: "",
                  },
                  {
                    label: "Featured",
                    value: "featured",
                  },
                  {
                    label: "Normal",
                    value: "normal",
                  },
                ]}
                onChange={(e) => {
                  // console.log(e);
                  setValue({
                    ...value, type: e.value
                  });
                }}
              />
            </Grid>
          </Grid>
          {loading && <CircularProgress sx={{ display: 'block', margin: '20px auto', color:"#FFAF00" }} />}

{/* Display brochures when not loading */}
{!loading && (
          <Grid container spacing={3}>
            {BLOGS?.length > 0 ? BLOGS?.map((blogItem, blogIdx) => {
              return (
                <Grid item xs={12} md={4} key={blogIdx}>
                  <BrochuresCard {...blogItem} />
                </Grid>
              );
            }) : 'No data found'}
          </Grid>
          )}

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
  )
};

export default Index;
