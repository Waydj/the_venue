import { Drawer, List, ListItemButton } from "@mui/material";
import { scroller } from "react-scroll";

const SideDrawer = (props) => {
  const links = [
    { where: "featured", value: "To top" },
    { where: "venueInfo", value: "Venue Info" },
    { where: "highlight", value: "Highlight" },
    { where: "pricing", value: "Pricing" },
    { where: "location", value: "Location" },
  ];

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 100,
      delay: 100,
      smooth: true,
      offset: -150,
    });
    props.toogle(false);
  };

  const renderItem = (item) => {
    return (
      <ListItemButton
        onClick={() => scrollToElement(item.where)}
        key={item.where}
      >
        {item.value}
      </ListItemButton>
    );
  };
  return (
    <Drawer
      anchor='right'
      open={props.open}
      onClose={() => props.toogle(false)}
    >
      <List component='nav'>{links.map((item) => renderItem(item))}</List>
    </Drawer>
  );
};

export default SideDrawer;
