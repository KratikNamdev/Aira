import React from 'react';
import { Box, Stack, Typography } from "@mui/material";
import Colors from '@/common/Colorscomponents';
import Image from 'next/image'

const ConnectToSystem = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Box
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap={2}
        sx={{
          width: { xs: "100%", md: "40%" },
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, textAlign: "center" }}
        >
          Connected to your favorite <br />
          <span style={{ color: Colors.airaSecondary, alignSelf: "center" }}>
            {" "}
            systems and apps
          </span>
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          Unleash endless possibilities with an ever-growing ecosystem built
          on our open, extensible platform
        </Typography>
      </Box>
      <Box sx={{ pb: 5 }}>
        <Image
          src={'/images/home/activityicons.svg'}
          width={0}
          height={0}
          alt='AIRA'
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        // className={styles.macbookImage}
        />
      </Box>
      {/* <img src="images/home/activityicons.svg" alt="activity" /> */}
      {/* <AnimatedActivitySVG /> */}
    </Box>
  )
}

export default ConnectToSystem