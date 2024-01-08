import { Box } from "@mui/material";
import Lottie from "lottie-react";
import AIRAMonoLinesLeft from "@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents";
import pageNotFoundRobot from '../../public/assets/lottieanimations/lottie-404_robot.json'

export default function Custom404() {
  return (
    <Box sx={{ py: 7 }}>
      <Box
        sx={{
          py: 5,
          borderBottomWidth: "2px",
          borderColor: "#eee",
          borderStyle: "solid",
        }}
      >
        <AIRAMonoLinesLeft
          styles={{
            top: 40,
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "500px",
            width: "100%",
          }}
        >
          <Lottie animationData={pageNotFoundRobot} loop={true} />
        </div>
      </Box>
    </Box>
  )
}