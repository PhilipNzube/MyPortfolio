import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../images/Logo.png";

export default function NavBar({ navHeight = 64 }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleNameClick = () => {};

  const navLinks = [
    { to: "/About", label: "ABOUT", id: "About" },
    { to: "/Projects", label: "PROJECTS", id: "Projects" },
    { to: "/Contact", label: "CONTACT", id: "Contact" },
  ];

  return (
    <>
      <AppBar
        id="MainNavBar"
        position="fixed"
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 1.5, sm: 3 },
          height: navHeight,
          bgcolor: "background.paper",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.85))",
          borderBottom: "1px solid #ccc",
          boxShadow: 4,
          zIndex: 1100,
        }}
      >
        {/* Logo */}
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Box
            component="img"
            src={Logo}
            alt="Logo"
            onClick={handleNameClick}
            sx={{
              height: navHeight * 0.5,
              cursor: "pointer",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.05)" },
            }}
          />
        </NavLink>

        {/* Desktop Navigation */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 4,
            alignItems: "center",
          }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.to}
              style={({ isActive }) => ({
                position: "relative",
                textDecoration: "none",
                color: isActive ? "#1976d2" : "#222",
                fontWeight: 600,
                fontSize: "1rem",
                letterSpacing: "0.5px",
              })}
            >
              {({ isActive }) => (
                <Typography
                  variant="body1"
                  sx={{
                    transition: "all 0.3s ease",
                    position: "relative",
                    px: 1,
                    pb: 0.5,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: 0,
                      width: isActive ? "100%" : "0%",
                      height: "2px",
                      bgcolor: "primary.main",
                      transition: "width 0.3s ease",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                    "&:hover": {
                      color: "primary.main",
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  {link.label}
                </Typography>
              )}
            </NavLink>
          ))}
        </Box>

        {/* Hamburger Icon */}
        <IconButton
          id="HamBurger"
          onClick={handleDrawerToggle}
          sx={{
            display: { xs: "block", md: "none" },
            fontSize: navHeight * 0.5,
            color: "#222",
            "&:hover": { bgcolor: "grey.100" },
          }}
        >
          <MenuIcon fontSize="inherit" />
        </IconButton>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            bgcolor: "background.paper",
            boxShadow: 4,
            p: 2,
          },
        }}
      >
        <Box>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              color: "grey.900",
              alignSelf: "flex-end",
              mb: 1,
              "&:hover": { bgcolor: "grey.100" },
            }}
          >
            <CloseIcon />
          </IconButton>
          <List>
            {navLinks.map((link) => (
              <ListItem
                key={link.id}
                component={NavLink}
                to={link.to}
                onClick={handleDrawerToggle}
                sx={{
                  justifyContent: "center",
                  py: 2,
                  "&.active .MuiTypography-root": {
                    color: "primary.main",
                    textDecoration: "underline",
                    textUnderlineOffset: "6px",
                  },
                  "&:hover": {
                    bgcolor: "grey.100",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    variant: "h6",
                    color: "grey.900",
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
