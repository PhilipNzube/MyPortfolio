import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, Fade } from "@mui/material";
import NavBar from "../Components/NavBar";

export default function HomePage({ navHeight = 64 }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <NavBar navHeight={navHeight} />
      <Fade in={isLoading} timeout={{ enter: 0, exit: 1000 }}>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            bgcolor: "grey.900",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <Box
            sx={{
              width: 60,
              height: 60,
              border: "4px solid",
              borderColor: "transparent primary.main transparent primary.main",
              borderRadius: "50%",
              animation: "spin 1.5s linear infinite",
              position: "relative",
              "@keyframes spin": {
                "0%": { transform: "rotate(0deg)" },
                "100%": { transform: "rotate(360deg)" },
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                gap: 1,
              }}
            >
              {[0, 1, 2].map((index) => (
                <Box
                  key={index}
                  sx={{
                    width: 10,
                    height: 10,
                    bgcolor: "primary.main",
                    borderRadius: "50%",
                    animation: `pulse 1.5s ease-in-out ${
                      index * 0.2
                    }s infinite`,
                    "@keyframes pulse": {
                      "0%, 100%": { transform: "scale(1)", opacity: 0.5 },
                      "50%": { transform: "scale(1.5)", opacity: 1 },
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Fade>
      <Fade in={!isLoading} timeout={{ enter: 1000, exit: 0 }}>
        <Box
          sx={{
            minHeight: "100vh",
            pt: `${navHeight}px`,
            bgcolor: "background.default",
          }}
        >
          <Outlet />
        </Box>
      </Fade>
    </>
  );
}
