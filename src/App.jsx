import Featured from "./components/featured";
import Footer from "./components/header_footer/footer";
import Header from "./components/header_footer/header";
import Highlights from "./components/highlights";
import Location from "./components/location/location";
import Pricing from "./components/pricing";
import VenueInfo from "./components/venueInfo";
import { Element } from "react-scroll";

function App() {
  return (
    <>
      <Header />
      <Element name='featured'>
        <Featured />
      </Element>
      <Element name='venueInfo'>
        <VenueInfo />
      </Element>
      <Element name='highlight'>
        <Highlights />
      </Element>
      <Element name='pricing'>
        <Pricing />
      </Element>
      <Element name='location'>
        <Location />
      </Element>
      <Footer />
    </>
  );
}

export default App;
