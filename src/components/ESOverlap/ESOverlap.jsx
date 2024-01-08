import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Typography,
  Container,
} from "@mui/material";

const ContainerMain = styled('div')({
  position: 'relative'
})

const OverlappingBox = styled('div')({
  position: 'absolute',
  top: -20,
  left: -20,
  padding: 10,
  background: '#bbb',
  color: '#fff'
})

const MainBox = styled('div')({
  padding: 10,
  boxShadow: '5px 10px #888888'
})

const ESOverlap = () => {
  return (
    <Container maxWidth="lg">
      <ContainerMain>
        <OverlappingBox>
          <Typography variant="h6">Overlapping Box</Typography>
          <Typography variant="body2">
            This is the overlapping content.
          </Typography>
        </OverlappingBox>
        <MainBox>
          <Typography variant="h4">Main Content</Typography>
          <Typography variant="body1">
            This is the main content of your page.
          </Typography>
        </MainBox>
      </ContainerMain>
    </Container>
  )
}

export default ESOverlap