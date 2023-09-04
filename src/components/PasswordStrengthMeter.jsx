import { Box } from "@mui/material";
import { useEffect } from "react";

const styles = {
  box: {
    width: "4px",
    height: "4px",
    backgroundColor: "#E0E0E0",
    borderRadius: "50%",
  },
};

function PasswordStrengthMeter({ strength }) {

  return (
    <>
      <Box 
        sx={styles.box}
      ></Box>
      <Box
        sx={styles.box}
      ></Box>
      <Box
        sx={styles.box}
      ></Box>
      <Box
        sx={styles.box}
      ></Box>
    </>
  );
}

export default PasswordStrengthMeter;
