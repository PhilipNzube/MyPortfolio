import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Fade,
} from "@mui/material";

export default function Contact({ navHeight = 64 }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const mailtoLink = `mailto:Onwubaliliphilip@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        pt: `${navHeight + 32}px`,
        pb: 10,
        bgcolor: "grey.900",
        overflow: "hidden",
      }}
    >
      {/* === Background Overlay === */}
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

      {/* === Form Content === */}
      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
        <Fade in timeout={1000}>
          <Typography
            variant="h3"
            sx={{
              mb: 4,
              textAlign: "center",
              fontWeight: 700,
              color: "white",
              fontFamily: "Sora, sans-serif",
            }}
          >
            Contact Me
          </Typography>
        </Fade>

        <Fade in timeout={1500}>
          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {/* Name */}
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              required
              variant="outlined"
              sx={textFieldStyles}
            />

            {/* Email */}
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              required
              variant="outlined"
              sx={textFieldStyles}
            />

            {/* Subject */}
            <TextField
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              fullWidth
              required
              variant="outlined"
              sx={textFieldStyles}
            />

            {/* Message */}
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              fullWidth
              multiline
              rows={4}
              required
              variant="outlined"
              sx={textFieldStyles}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              sx={{
                alignSelf: "center",
                width: { xs: "70%", sm: "50%", md: "40%" },
                py: 1.5,
                fontWeight: 600,
                bgcolor: "primary.main",
                color: "white",
                fontFamily: "Sora, sans-serif",
                "&:hover": {
                  bgcolor: "primary.dark",
                  transform: "scale(1.05)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

// === Reusable text field style ===
const textFieldStyles = {
  bgcolor: "background.dark",
  borderRadius: 1,
  "& .MuiInputBase-input": { color: "white" },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "grey.600",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "primary.main",
  },
  "& .MuiInputLabel-root": {
    color: "grey.400",
  },
  "& label.Mui-focused": {
    color: "primary.main",
  },
};
