import React from "react";
import { Box, Avatar } from "@mui/material";

const ProfilePhoto = ({ size = 180 }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: { xs: 3, md: 0 },
      }}
    >
      <Avatar
        alt="Aidil 'Aqif Mohd Pidaus"
        src="/images/aidil.jpeg" // <-- place your image in public/assets
        sx={{
          width: size,
          height: size,
          border: "3px solid rgba(255,255,255,0.2)",
          boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
          borderRadius: "20px", // softer edges (not full circle)
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default ProfilePhoto;
