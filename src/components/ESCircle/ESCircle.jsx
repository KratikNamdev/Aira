import React from 'react';
import {
  Box,
  Stack,
  Typography,
} from "@mui/material";
import Colors from '@/common/Colorscomponents';

const ESCircle = ({ id, title, text }) => {
  return (
    <Box>
      <Stack
        direction="column"
        gap={2}
        alignItems="center"
        justifyContent="center"
      >
        <div
          style={{
            backgroundColor: "#eaf1fd",
            borderRadius: "40px",
            display: "flex",
            height: "80px",
            width: "80px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              verticalAlign: "middle",
              fontWeight: 700,
              color: Colors.airaSecondary,
            }}
          >
            {id}
          </Typography>
        </div>
        <Typography
            variant="h5"
            sx={{
              verticalAlign: "middle",
              fontWeight: 700,
              color: "#fff",
              textAlign:"center",
            
              
            }}
          >
            {title}
          </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: "#fff", textAlign: "center" }}
        >
          {text}
        </Typography>
      </Stack>
    </Box>
  )
}

export default ESCircle