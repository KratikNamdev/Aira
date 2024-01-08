import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Colors from '@/common/Colorscomponents';
import Image from 'next/image'
import Link from 'next/link'

const ESCard = (props) => {
  const { title, desc, icon, route } = props;
  return (
    <Link style={{ textDecoration: "none" }} href={`/${route}`}>
      <Card
        // onClick={onCardClick}
        sx={{
          width: '17.5rem',
          height: '15rem',
          backgroundColor: Colors.airaPrimary,
          userSelect: "none",
          borderRadius: "10px",
          cursor: "pointer",
          borderLeft: `5px solid transparent`,
          borderBottom: `5px solid transparent`,
          "&:hover": {
            borderLeft: `5px solid ${Colors.airaSecondary}`,
            borderBottom: `5px solid ${Colors.airaSecondary}`,
            transition: "border 0.30s ease-in-out",
          },
        }}
      >
        <CardContent>
          <Image
            width={56}
            height={56}
            src={`/images/solutions/${icon}`}
            alt=""
            style={{
              height: "56px",
              width: "56px",
            }}
          />
          <Typography variant="body1" sx={{ color: "#fff", mt: 1 , fontWeight:'800', fontSize:'18px'}}>
            {title}
          </Typography>
          <Typography variant="caption" sx={{ color: "#fff" , fontSize:'14px'}}>
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

export default ESCard