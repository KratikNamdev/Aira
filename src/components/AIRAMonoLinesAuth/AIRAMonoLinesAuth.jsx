import React from 'react';
import Colors from '@/common/Colorscomponents';
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const PrimaryLine = styled.div({
  height: "345px",
  position: "absolute",
  top: 80,
  width: "80px",
  borderRadius: "50px 50px 0 0",
  transform: "rotate(35deg)",
  marginLeft: "0px",
  backgroundColor: Colors.airaSecondary,
});
const SecondaryLine = styled.div({
  height: "300px",
  position: "absolute",
  top: 175,
  width: "60px",
  borderRadius: "50px 50px 0 0",
  transform: "rotate(35deg)",
  marginLeft: "28px",
  backgroundColor: '#fff',
});

const AIRAMonoLinesLeft = ({ styles = {} }) => {
  return (
    <Box sx={{ position: "relative", ...styles }}>
      <PrimaryLine />
      <SecondaryLine />
    </Box>
  )
}

export default AIRAMonoLinesLeft