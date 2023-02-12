import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import { Grid, Theme } from "@mui/material";
import LinkBehavior from "../../atoms/theme/overrides/LinkBehavior";
import NavList from "../../molecules/nav/list/NavList";
import NavButton from "../../molecules/nav/button/NavButton";

const Header = ({ navItems, logo, drawerWidth = 240 }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navButtonProps = navItems.map((button, index, { length }) => ({
    ...button,
    ...(index === length - 1 && {
      variant: "contained",
      disableElevation: true,
      sx: { color: "#fff !important" },
    }),
  }));
  const listItemsProps = navItems.map(({ label, to }) => ({
    listItemTextProps: { primary: label },
    listItemProps: {
      disablePadding: true,
      component: LinkBehavior,
      to,
    },
  }));

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} alignItems="center">
      {logo}
      <Divider />
      <NavList
        listItemsProps={listItemsProps}
        listProps={{ sx: { "& .MuiListItem-root": { color: "#000000" } } }}
      />
    </Box>
  );

  return (
    <AppBar position="sticky" color="inherit">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item width="20rem">
            {logo}
          </Grid>
          <Grid item xs sx={{ display: "flex", justifyContent: "flex-end" }}>
            <NavButton
              navProps={{
                sx: {
                  display: { xs: "none", sm: "block" },
                  "& .MuiButton-root": {
                    color: "text.primary",
                  },
                },
              }}
              buttonsProps={navButtonProps}
            />
            {/* Mobile Menu */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box component="nav">
              <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: "block", sm: "none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
              >
                {drawer}
              </Drawer>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
