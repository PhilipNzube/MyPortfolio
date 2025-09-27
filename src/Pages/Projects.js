import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

import Proj2Img from "../images/Proj2Img.png";
import Proj3Img from "../images/Proj3Img.png";
import Proj4Vid from "../videos/Time Switch Ability Video.mp4";
import Proj5Vid from "../videos/UIManagement System Video.mp4";
import Proj6Vid from "../videos/Fight System Video.mp4";
import Proj7Vid from "../videos/Dialogue System Video.mp4";
import Proj8Vid from "../videos/InteractionSystem Video.mp4";
import Proj10Img from "../images/Proj10Img.png";
import Proj12Img from "../images/Proj12Img.png";
import Proj13Img from "../images/Proj13Img.png";
import FlutterImg from "../images/FlutterImg.png";
import PlayButton from "../images/Play Button.png";
import CardComponent from "../Components/Card";

export default function Projects({ navHeight = 64 }) {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

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
          opacity: 0.035,
          animation: "bgScroll 60s linear infinite",
          "@keyframes bgScroll": {
            from: { backgroundPosition: "0 0" },
            to: { backgroundPosition: "1000px 1000px" },
          },
        }}
      />

      {/* === Foreground Content === */}
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
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
          My Projects
        </Typography>

        <FormControl
          sx={{
            width: { xs: "100%", sm: "250px" },
            mb: 5,
            bgcolor: "grey.800",
            borderRadius: 1,
            "& .MuiInputBase-root": {
              color: "white",
              borderRadius: 1,
            },
            "& .MuiSelect-icon": { color: "white" },
            "& .MuiInputLabel-root": { color: "grey.400" },
            "& .MuiInputLabel-root.Mui-focused": { color: "primary.main" },
          }}
        >
          <InputLabel id="filter-label">Filter Projects</InputLabel>
          <Select
            labelId="filter-label"
            id="Filter"
            value={filter}
            label="Filter Projects"
            onChange={handleFilterChange}
            sx={{ color: "white" }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="ReactJS">ReactJS</MenuItem>
            <MenuItem value="C#">C#</MenuItem>
            <MenuItem value="Flutter">Flutter</MenuItem>
          </Select>
        </FormControl>

        <Box
          id="ProjCards"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: { xs: "center", md: "flex-start" },
            px: { xs: 1, sm: 2 },
          }}
        >
          {/* === C# Projects === */}
          {(filter === "All" || filter === "C#") && (
            <>
              <CardComponent
                image={Proj2Img}
                hasVC="True"
                VC="https://github.com/PhilipNzube/Robot-Dodge"
                VCText="View Code"
                ProjText="ROBOT DODGE"
                ProjInfo="C#"
                hasImage="True"
              />
              <CardComponent
                image={Proj3Img}
                hasVC="True"
                VC="https://github.com/PhilipNzube/Anim-Scene"
                VCText="View Code"
                ProjText="ANIM SCENE"
                ProjInfo="C#"
                hasImage="True"
              />
              <CardComponent
                vid={Proj4Vid}
                hasPlayBut="True"
                PlayButSrc={PlayButton}
                PlayButText="PLAY VIDEO"
                VC="https://github.com/PhilipNzube/TimeSwitchAbility"
                VCText="View Code"
                ProjText="TIME SWITCH SYSTEM"
                ProjInfo="C#"
              />
              <CardComponent
                vid={Proj5Vid}
                hasPlayBut="True"
                PlayButSrc={PlayButton}
                PlayButText="PLAY VIDEO"
                VC="https://github.com/PhilipNzube/UIManagementSystem"
                VCText="View Code"
                ProjText="UI MANAGEMENT SYSTEM"
                ProjInfo="C#"
              />
              <CardComponent
                vid={Proj6Vid}
                hasPlayBut="True"
                PlayButSrc={PlayButton}
                PlayButText="PLAY VIDEO"
                VC="https://github.com/PhilipNzube/FightingSystem"
                VCText="View Code"
                ProjText="FIGHT SYSTEM"
                ProjInfo="C#"
              />
              <CardComponent
                vid={Proj7Vid}
                hasPlayBut="True"
                PlayButSrc={PlayButton}
                PlayButText="PLAY VIDEO"
                VC="https://github.com/PhilipNzube/DialogueSystem"
                VCText="View Code"
                ProjText="DIALOGUE SYSTEM"
                ProjInfo="C#"
              />
              <CardComponent
                vid={Proj8Vid}
                hasPlayBut="True"
                PlayButSrc={PlayButton}
                PlayButText="PLAY VIDEO"
                VC="https://github.com/PhilipNzube/InteractionSystem"
                VCText="View Code"
                ProjText="INTERACTION SYSTEM"
                ProjInfo="C#"
              />
            </>
          )}

          {/* === ReactJS Projects === */}
          {(filter === "All" || filter === "ReactJS") && (
            <>
              <CardComponent
                image={Proj10Img}
                hasVLS="True"
                hasVC="True"
                VLS="https://paylect-web-app.netlify.app"
                VLSText="View Live Site"
                VC="https://github.com/PhilipNzube/PayLect-App"
                VCText="View Code"
                ProjText="PAYLECT"
                ProjInfo="ReactJS"
                hasImage="True"
              />
              <CardComponent
                image={Proj12Img}
                hasVLS="True"
                VLS="https://signal-web-app.netlify.app"
                VLSText="View Live Site"
                ProjText="SIGNAL LAB"
                ProjInfo="ReactJS"
                hasImage="True"
              />
              <CardComponent
                image={Proj13Img}
                hasVLS="True"
                VLS="https://escrow-based-marketplace.netlify.app/"
                VLSText="View Live Site"
                ProjText="SHOPLECT"
                ProjInfo="ReactJS"
                hasImage="True"
              />
              <CardComponent
                image={Proj14Img}
                hasVLS="True"
                VLS="https://naija-luxury-homes.netlify.app/"
                VLSText="View Live Site"
                ProjText="NAIJA LUXURY HOMES"
                ProjInfo="ReactJS"
                hasImage="True"
              />
            </>
          )}

          {/* === Flutter Projects === */}
          {(filter === "All" || filter === "Flutter") && (
            <>
              <CardComponent
                image={FlutterImg}
                hasVC="True"
                VC="https://github.com/PhilipNzube/facial_attendance"
                VCText="View Code"
                ProjText="FACIAL ATTENDANCE"
                ProjInfo="Flutter"
                hasImage="True"
              />
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
}
