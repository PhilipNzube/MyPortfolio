import { useRef, useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  IconButton,
  Fade,
  Chip,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import StoreIcon from "@mui/icons-material/Store";

export default function CardComponent(props) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const vidRef = useRef(null);

  const handleActivateOverlay = () => {
    setIsOverlayOpen(true);
  };

  const handleDeactivateOverlay = () => {
    setIsOverlayOpen(false);
    if (isPlaying && vidRef.current) {
      vidRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handlePlayPause = () => {
    if (vidRef.current) {
      if (isPlaying) {
        vidRef.current.pause();
      } else {
        vidRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "45%", md: "30%" },
        minHeight: 300,
        display: "flex",
        flexDirection: "column",
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: "grey.900",
        color: "common.white",
        position: "relative",
        transition: "transform 0.3s ease",
        "&:hover": { transform: "scale(1.02)" },
      }}
      onClick={handleActivateOverlay}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component={props.hasImage === "True" ? "img" : "video"}
          src={props.hasImage === "True" ? props.image : props.vid}
          alt={props.hasImage === "True" ? "Project Image" : "Project Video"}
          ref={props.hasImage !== "True" ? vidRef : null}
          sx={{
            height: 180,
            objectFit: "cover",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
          loop
        />
        {props.hasGPS === "True" && (
          <Chip
            icon={<StoreIcon />}
            label="Play Store"
            size="small"
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              bgcolor: "rgba(18, 18, 18, 0.9)",
              backdropFilter: "blur(8px)",
              color: "bisque",
              border: "1px solid rgba(255, 228, 196, 0.4)",
              fontWeight: 600,
              fontSize: "0.7rem",
              height: "28px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
              zIndex: 2,
              "& .MuiChip-icon": {
                color: "bisque",
              },
              "&:hover": {
                bgcolor: "rgba(18, 18, 18, 0.95)",
                borderColor: "rgba(255, 228, 196, 0.6)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.6)",
              },
            }}
          />
        )}
      </Box>
      <Fade in={isOverlayOpen} timeout={300}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 180,
            bgcolor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            zIndex: 3,
            animation: isOverlayOpen
              ? "ProjOverlayAnim 0.3s ease-in"
              : "ProjOverlayAnimOut 0.3s ease-out",
            "@keyframes ProjOverlayAnim": {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 },
            },
            "@keyframes ProjOverlayAnimOut": {
              "0%": { opacity: 1 },
              "100%": { opacity: 0 },
            },
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleDeactivateOverlay();
          }}
        >
          {props.hasVLS === "True" && (
            <Button
              href={props.VLS}
              variant="outlined"
              sx={{
                mb: 1,
                color: "white",
                borderColor: "grey.300",
                "&:hover": { bgcolor: "grey.800", borderColor: "grey.300" },
              }}
            >
              {props.VLSText}
            </Button>
          )}
          {props.hasGPS === "True" && (
            <Button
              href={props.GPS}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{
                mb: props.hasVLS === "True" ? 1 : 0,
                color: "white",
                borderColor: "grey.300",
                "&:hover": { bgcolor: "grey.800", borderColor: "grey.300" },
              }}
            >
              {props.GPSText || "View on Play Store"}
            </Button>
          )}
          {props.hasPlayBut === "True" ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                border: 1,
                borderColor: "grey.300",
                borderRadius: 1,
                p: 1,
                "&:hover": { bgcolor: "grey.800" },
              }}
              onClick={(e) => {
                e.stopPropagation();
                handlePlayPause();
              }}
            >
              <IconButton sx={{ color: "white" }}>
                {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
              </IconButton>
              <Typography>
                {isPlaying ? "PAUSE VIDEO" : "PLAY VIDEO"}
              </Typography>
            </Box>
          ) : (
            props.hasVC === "True" && (
              <Button
                href={props.VC}
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "grey.300",
                  "&:hover": { bgcolor: "grey.800", borderColor: "grey.300" },
                }}
              >
                {props.VCText}
              </Button>
            )
          )}
        </Box>
      </Fade>
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "bisque", textAlign: "center", mb: 1 }}
        >
          {props.ProjText}
        </Typography>
        <Typography
          variant="body2"
          align="center"
          sx={{
            border: 1,
            borderColor: "grey.300",
            borderRadius: 1,
            p: 0.5,
            width: "fit-content",
            alignSelf: "center",
            color: "bisque",
          }}
        >
          {props.ProjInfo}
        </Typography>
      </CardContent>
    </Card>
  );
}
