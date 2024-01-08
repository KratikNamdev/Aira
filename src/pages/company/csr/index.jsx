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
import AIRAMonoLinesLeft from '@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents';
import Colors from '@/common/Colorscomponents';

const DISCOVER_ITEMS = [
  {
    title: "One team, one goal",
    desc: "We dream big and achieve those dreams by working hard for it, every single day.",
    icon: "goal.png",
  },
  {
    title: "Creativity",
    desc: "We are innovators who are focused to implement the most creative ideas to deliver distinguished results.",
    icon: "creativity.png",
  },
  {
    title: "Integrity",
    desc: "Committed to staying honest to whatever we commit to, no matter what the consequences.",
    icon: "integrity.png",
  },
  {
    title: "Communication",
    desc: "Clear information exchange and acknowledgment of efforts to build a healthy relationship on every front.",
    icon: "communication.png",
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

const impactData = [
  {
    title: 'Education',
    descrption: 'Enabling unprivileged students, marginalized youths, and NGOs to become self-sufficient by incorporating automation in the education sector.',
    img: 'education.png'
  },
  {
    title: 'Society',
    descrption: 'Providing exponential technology support and volunteering programs to encourage equality for all and persuade a helping hand.',
    img: 'society.png'
  },
  {
    title: 'Convservation',
    descrption: 'Encouraging the use of technology to protect natural resources by creating a sustainable workplace that enforces energy and waste management.',
    img: 'conversation1.png'
  },
  {
    title: 'Government & Ethics',
    descrption: 'We abide to the applicable laws and regulations by demonstrating high ethical standards and corporate governance.',
    img: 'conversation2.png'
  },
]

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
                  Empowering <br />
                  <span style={{ color: Colors.airaSecondary }}>
                    Communities Globally
                  </span>
                </Typography>
              </Box>
            </Stack>
          </Container>
        </Grid>
        <Grid item xs={12} md={5}>
          <div>
            <Image
              src={`/images/imgcsr2.png`}
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
        <Grid
          sx={{ pt: 4 }}
          container
          spacing={5}
          justifyContent="left"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <div style={{ position: "relative" }}>
              <Image
                src="/images/ellipse24.png"
                alt="bankingheader"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', zIndex: 2, borderRadius: 350 }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="column" sx={{ py: 2 }}>
              <Typography variant="h5" sx={{ fontsize: "20 px", fontWeight: 700 }}>
                AIRA Impact
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, lineHeight: 2 }}>
                AIRA recognizes its commitment to driving positive impact to help the world run better. By incorporating a strategic approach in our social investments, we build an environment that accelerates innovation and enhances education and entrepreneurship. We bring our knowledge and enthusiasm to enact changes through our talent, technology, and capital investments focused to improve people’s lives. Our vision is to create a sustainable future for communities where we live and work.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ my: 10, py: 6 }}>
        <Container maxWidth="lg">
          <Typography fontSize={'20px'} textAlign={'center'} fontWeight={600}>
            To advance our impact, we operate our CSR programs around four key pillars:
          </Typography>
          <Grid sx={{ mt: 2 }} container spacing={3}>
            {impactData?.map((item, idx) => (
              <Grid container justifyContent={'center'} key={idx} item xs={12} md={3}>
                <Stack direction={'column'} alignItems={'center'} justifyContent={'center'}>
                  <Image
                    src={`/images/csr/${item.img}`}
                    alt="csr"
                    width={50}
                    style={{backgroundColor: '#f2f2f2', borderRadius: 50}}
                    height={50}
                  />
                  <Typography sx={{ my: 0.8 }} fontSize={'24px'} fontWeight={600}>
                    {item?.title}
                  </Typography>
                  <Typography sx={{ minHeight: '150px' }} textAlign={'center'}>
                    {item?.descrption}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ my: 10, backgroundColor: '#F8F9FB', py: 6 }}>
        <Container maxWidth="lg">
          <Typography fontSize={'30px'} fontWeight={700} textAlign={'center'}>CSR at AIRA</Typography>
          <Typography fontSize={'18px'} fontWeight={400} textAlign={'center'}>AIRA’s social investment strategy focuses on applying technology to address critical challenges faced by communities to inspire inclusiveness and sustainability. Through our endeavors, we propel social change to ensure the financial well-being of people across the globe.</Typography>
          <Grid container spacing={3} sx={{ mt: 8 }}>
            <Grid item xs={12} md={4}>
              <Box sx={{ backgroundColor: '#FFFFFF', position: 'relative', p: 4, borderRadius: '16px', minHeight: '290px' }}>
                <Box
                  sx={{
                    backgroundColor: '#6755DF',
                    height: 50,
                    width: 50,
                    position: 'absolute',
                    borderRadius: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    left: '159px',
                    top: '-25px'
                  }}>
                  1
                </Box>
                <Typography sx={{ my: 2 }} fontSize={'20px'} fontWeight={700} textAlign={'center'}>
                  Create  <br /> social impact
                </Typography>
                <Typography fontSize={'18px'} fontWeight={400} textAlign={'center'}>
                  Utilizing technology and talent to address socio-developmental issues with strategic investments to have a lasting impact on society.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ backgroundColor: '#FFFFFF', position: 'relative', p: 4, borderRadius: '16px', minHeight: '290px' }}>
                <Box
                  sx={{
                    backgroundColor: '#6755DF',
                    height: 50,
                    width: 50,
                    position: 'absolute',
                    borderRadius: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    left: '159px',
                    top: '-25px'
                  }}>
                  2
                </Box>
                <Typography sx={{ my: 2 }} fontSize={'20px'} fontWeight={700} textAlign={'center'}>
                  Growth-Oriented, <br /> Sustainable development
                </Typography>
                <Typography fontSize={'18px'} fontWeight={400} textAlign={'center'}>
                  Devise approach to accelerate business growth, job creation, and investment in startups.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ backgroundColor: '#FFFFFF', position: 'relative', p: 4, borderRadius: '16px', minHeight: '290px' }}>
                <Box
                  sx={{
                    backgroundColor: '#6755DF',
                    height: 50,
                    width: 50,
                    position: 'absolute',
                    borderRadius: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    left: '159px',
                    top: '-25px'
                  }}>
                  3
                </Box>
                <Typography sx={{ my: 2 }} fontSize={'20px'} fontWeight={700} textAlign={'center'}>
                  Expedite <br /> economic growth
                </Typography>
                <Typography fontSize={'18px'} fontWeight={400} textAlign={'center'}>
                  Technology solutions help drive innovation in industries and infrastructure to encourage economic growth.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="md">
        <Typography sx={{ mb: 5 }} textAlign={'center'} fontSize={'20px'} fontWeight={600}>
          Discover how we leverage technology and its impact to foster inclusiveness in society to offer more opportunities to people.
        </Typography>
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