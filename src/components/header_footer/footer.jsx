import { Fade } from "react-awesome-reveal";

function Footer() {
  return (
    <footer className='bck_red'>
      <Fade
        triggerOnce
        delay={500}
      >
        <div className='font_reghteous footer_logo_venue'>The Venue</div>
        <div className='footer_copyright'>
          The venue 2022 all right reserved
        </div>
      </Fade>
    </footer>
  );
}

export default Footer;
