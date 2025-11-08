import { NavLink } from "react-router-dom";
import { Box, Container, Typography, Fade } from "@mui/material";
import ReactJS from "../images/reactJs.png";
import Javascript from "../images/javascript.png";
import CSharp from "../images/csharp.png";
import Flutter from "../images/FlutterImg.png";
import SkillImage from "../Components/SkillImage";

export default function About({ navHeight = 64 }) {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        bgcolor: "grey.900",
        pt: `${navHeight + 32}px`,
        pb: 8,
        overflow: "hidden",
      }}
    >
      {/* === Background Pattern === */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `url("https://www.transparenttextures.com/patterns/cubes.png")`,
          backgroundSize: "contain",
          opacity: 0.04,
          animation: "bgScroll 60s linear infinite",
          "@keyframes bgScroll": {
            from: { backgroundPosition: "0 0" },
            to: { backgroundPosition: "1000px 1000px" },
          },
        }}
      />

      {/* === Foreground Content === */}
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Fade in timeout={1000}>
          <Typography
            variant="h3"
            sx={{
              mb: 4,
              color: "white",
              fontWeight: 700,
              textAlign: "center",
              fontFamily: "Sora, sans-serif",
            }}
          >
            About Me
          </Typography>
        </Fade>

        <Fade in timeout={1500}>
          <Typography
            variant="body1"
            sx={{
              mb: 6,
              fontSize: { xs: "1rem", md: "1.15rem" },
              fontWeight: 400,
              color: "grey.300",
              lineHeight: 1.8,
              textAlign: "justify",
            }}
          >
            Hello, my name is <strong>Philip Nzube</strong>, and I graduated
            with a Bachelor's degree in Computer Science from Federal University
            Lokoja, Nigeria.
            <br />
            <br />
            I’m a Frontend Web Developer, Indie Game Developer, and Mobile App
            Developer. I specialize in building Web Apps using
            <strong> ReactJS</strong>, Android Games with <strong>C#</strong>,
            and cross-platform apps with <strong>Flutter</strong>.
            <br />
            <br />
            I’m passionate about software engineering and continuously learning
            new technologies in Web, Game, and Mobile Development.
            <br />
            <br />
            I’m open to collaborations on creative projects. Feel free to{" "}
            <NavLink
              to="/Contact"
              style={{ textDecoration: "underline", color: "#64b5f6" }}
            >
              contact me
            </NavLink>{" "}
            if you have something exciting in mind.
            <br />
            <br />
            Outside academics, I’m an explorer of new tech, anime lover, and
            lifelong learner.
          </Typography>
        </Fade>

        <Fade in timeout={2000}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              mb: 3,
              fontWeight: 600,
              color: "white",
              fontFamily: "Sora, sans-serif",
            }}
          >
            Skills
          </Typography>
        </Fade>

        <Box
          id="SkillIcons"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
            px: { xs: 2, sm: 4 },
          }}
        >
          <SkillImage Image={ReactJS} SkillText="ReactJS/React Native" />
          <SkillImage Image={Javascript} SkillText="JavaScript" />
          <SkillImage Image={CSharp} SkillText="C#" />
          <SkillImage Image={Flutter} SkillText="Flutter" />
        </Box>
      </Container>
    </Box>
  );
}
