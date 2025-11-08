import { Box, Typography } from "@mui/material";

export default function SkillImage(props) {
  return (
    <Box
      id="SkillParent"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        transition: "transform 0.3s ease",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <Box
        component="img"
        id="SkillImage"
        src={props.Image}
        alt="Skill Image"
        sx={{
          width: { xs: "40%", sm: "20%", md: "15%" },
          objectFit: "contain",
        }}
      />
      <Typography
        id="SkillText"
        variant="body1"
        sx={{ fontWeight: "bold", color: "white" }}
      >
        {props.SkillText}
      </Typography>
    </Box>
  );
}
