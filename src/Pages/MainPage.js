import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Fade,
  Grow,
  useTheme,
} from "@mui/material";
import { NavLink } from "react-router-dom";

import Twitter from "../images/Twitter.png";
import GitHub from "../images/GitHub.png";
import LinkedIn from "../images/LinkedIn.png";

export default function MainPage({ navHeight = 64 }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const theme = useTheme();

  const texts = [
    "MOBILE APP DEVELOPER",
    "FRONTEND WEB DEVELOPER",
    "INDIE GAME DEVELOPER",
    "TECH ENTHUSIAST",
  ];

  useEffect(() => {
    let i = 0;
    setDisplayText("");
    setIsTyping(true);

    const typeText = () => {
      const current = texts[currentTextIndex];
      const timer = setInterval(() => {
        if (i <= current.length) {
          setDisplayText(current.slice(0, i));
          i++;
        } else {
          clearInterval(timer);
          setIsTyping(false);
          setTimeout(() => {
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }, 1500);
        }
      }, 100);
      return () => clearInterval(timer);
    };

    const delay = setTimeout(typeText, 500);
    return () => clearTimeout(delay);
  }, [currentTextIndex]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: `${navHeight + 16}px`,
        position: "relative",
        overflow: "hidden",
        bgcolor: "grey.900",
      }}
    >
      {/* === Background === */}
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

      {/* === Content === */}
      <Container maxWidth="md" sx={{ zIndex: 1 }}>
        <Stack
          spacing={6}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          sx={{ minHeight: "80vh" }}
        >
          <Fade in timeout={1000}>
            <Typography variant="h6" sx={{ color: "text.secondary" }}>
              Hi, my name is
            </Typography>
          </Fade>

          <Fade in timeout={1500}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: "white",
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                fontFamily: "Sora, sans-serif",
              }}
            >
              Philip Nzube
            </Typography>
          </Fade>

          <Fade in timeout={2000}>
            <Box
              sx={{
                fontSize: "1.5rem",
                fontFamily: "monospace",
                color: "primary.main",
                fontWeight: 500,
                minHeight: "2rem",
                display: "inline-block",
                borderRight: isTyping ? "2px solid" : "none",
                pr: "4px",
                whiteSpace: "nowrap",
                animation: isTyping ? "blink 1s step-end infinite" : "none",
                "@keyframes blink": {
                  "50%": { borderColor: "transparent" },
                },
              }}
            >
              {displayText}
            </Box>
          </Fade>

          <Fade in timeout={2500}>
            <Typography
              variant="body1"
              sx={{
                color: "grey.400",
                fontSize: { xs: "1rem", sm: "1.1rem" },
                maxWidth: 600,
              }}
            >
              Crafting innovative web, mobile, and game solutions with passion
              and creativity.
            </Typography>
          </Fade>

          <Grow in timeout={3000}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Button
                component={NavLink}
                to="/Projects"
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  fontFamily: "Sora, sans-serif",
                  bgcolor: "primary.main",
                  "&:hover": {
                    bgcolor: "primary.dark",
                    transform: "scale(1.05)",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                View Projects
              </Button>
              <Button
                href="https://flowcv.com/resume/mmi6fk4qra"
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  fontFamily: "Sora, sans-serif",
                  color: "white",
                  borderColor: "grey.500",
                  "&:hover": {
                    borderColor: "primary.main",
                    transform: "scale(1.05)",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                View CV
              </Button>
            </Stack>
          </Grow>
        </Stack>
      </Container>

      {/* === Fixed Social Icons (Bottom Left on Desktop, Center on Mobile) === */}
      <Box
        sx={{
          position: "fixed",
          bottom: 24,
          left: { xs: 32, sm: 32 },
          transform: { xs: "translateX(-50%)", sm: "none" },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          zIndex: 2,
        }}
      >
        {[Twitter, GitHub, LinkedIn].map((icon, i) => (
          <Box
            key={i}
            component="a"
            href={
              i === 0
                ? "https://twitter.com/Philip_nzube"
                : i === 1
                ? "https://github.com/PhilipNzube"
                : "www.linkedin.com/in/philipnzube"
            }
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              p: 1.2,
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "transform 0.3s ease, background 0.3s ease",
              "&:hover": {
                transform: "scale(1.2)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <Box
              component="img"
              src={icon}
              alt="social"
              sx={{
                height: 28,
                width: 28,
                filter: "brightness(1.3)",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
