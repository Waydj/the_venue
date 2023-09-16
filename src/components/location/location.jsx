const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.2642240169102!2d20.509365303705355!3d54.708957698294505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e3161138163f45%3A0xf19a3a50ef98c1a2!2sK%C3%B6nigsberg%20Cathedral!5e0!3m2!1sen!2sru!4v1666818980344!5m2!1sen!2sru'
        width='100%'
        height='500px'
        frameBorder={0}
        loading='lazy'
        allowFullScreen
      ></iframe>
      <div className='location_tag'>
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
