import React,{useState,useEffect}from 'react';
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import Colors from '@/common/Colorscomponents';
import Image from 'next/image';

const REFERENCES = [
  { id: "amedisys", image: "amedisys.png" },
  { id: "buckeye", image: "buckeye.png" },
  { id: "commonspirit", image: "commonspirit.png" },
  { id: "graham", image: "graham.png" },
  { id: "mission", image: "mission.png" },
  { id: "selectdata", image: "selectdata.png" },
];

const RefereceStack = () => {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    setLang(localStorage?.getItem('lang'));
  }, []);
  return (
    <></>
    // <Box sx={{ backgroundColor: Colors.steelGrey, py: 5 }}>
    //   <Stack
    //     direction="column"
    //     alignItems="center"
    //     justifyContent="center"
    //     gap={2}
    //   >
    //     <Typography variant="h4" sx={{ fontWeight: 700 }}>
    //     {lang === 'fr' ? `Our ` : lang === 'sp' ? 'Nuestra ' : lang === 'ar' ? 'عملائنا ' : lang === 'gr' ? 'Unsere ' : ' Our  '}
    //     <span style={{ color: Colors.airaSecondary }}>
    //     {lang === 'fr' ? `Clientele` : lang === 'sp' ? 'Nuestra' : lang === 'ar' ? 'مع آيرا' : lang === 'gr' ? 'Kundschaft' : 'Clients'}
    //     </span>
    //     </Typography>
    //     <Typography variant="body1">
    //       Trusted by leading post-acute care organizations
    //     </Typography>
    //   </Stack>
    //   <Marquee
    //     speed={60}
    //     style={{
    //       margin: "10px",
    //     }}
    //   >
    //     <Stack
    //       direction="row"
    //       gap={3}
    //       sx={{ mt: 5, flex: 1 }}
    //       alignItems="center"
    //       justifyContent="center"
    //     >
    //       {REFERENCES.map(({ id, image }) => {
    //         return (
    //           <Card key={id}>
    //             <CardContent sx={{ flex: 1 }}>
    //               <div>
    //                 <Image
    //                   src={`/images/home/references/${image}`}
    //                   alt={id}
    //                   width={0}
    //                   height={0}
    //                   sizes="100vw"
    //                   style={{
    //                     height: "100%",
    //                     width: "100%",
    //                   }}
    //                 />
    //               </div>
    //             </CardContent>
    //           </Card>
    //         );
    //       })}
    //     </Stack>
    //   </Marquee>
    // </Box>
  )
}

export default RefereceStack