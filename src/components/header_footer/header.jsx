import { AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SideDrawer from "./SideDrawer";
import { useEffect, useState } from "react";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [headerShow, setHeaderShow] = useState(false);

  const toogleDrawer = (value) => {
    setDrawerOpen(value);
  };

  const scrollHandler = () => {
    if (window.scrollY) {
      setHeaderShow(true);
    } else {
      setHeaderShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <AppBar
      position='fixed'
      style={{
        backgroundColor: headerShow ? "#2f2f2f" : "transparent",
        boxShadow: "none",
        padding: "10px 0px",
      }}
    >
      <Toolbar>
        <div className='header_logo'>
          <div className='font_reghteous header_logo_venue'>The Venue</div>
          <div className='header_logo_title'>musical events</div>
        </div>
        <IconButton
          aria-label='Menu'
          color='inherit'
          onClick={() => toogleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <SideDrawer
          open={drawerOpen}
          toogle={(value) => toogleDrawer(value)}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
