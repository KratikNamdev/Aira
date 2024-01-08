import React from 'react';
import { Button } from "@mui/material";

const RoundedButton = ({ label, sx = {}, ...restProps }) => {
  return (
    <Button
      color="primary"
      variant="contained"
      className="text-nowrap"
      sx={{
        fontFamily: "Montserrat",
        fontSize: "14px",
        fontWeight: 700,
        borderRadius: "30px",
        px: 2,
        ...sx,
        backgroundColor: "#6755DF"
      }}
      {...restProps}
    >
      {label}
    </Button>
  )
}

export default RoundedButton