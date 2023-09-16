import { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import MyButton from "../utils/myButton";

const Discount = () => {
  const [start, setStart] = useState(0);
  const end = 30;

  const percentage = () => {
    if (start < end) {
      setStart((prevCount) => prevCount + 1);
    }
  };

  useEffect(() => {
    if (start > 0 && start < 30) {
      setTimeout(() => {
        setStart((prevCount) => prevCount + 1);
      }, 30);
    }
  }, [start]);

  return (
    <div className='center_wrapper'>
      <div className='discount_wrapper'>
        <Fade
          onVisibilityChange={(inView) => {
            if (inView) {
              percentage();
            }
          }}
        >
          <div className='discount_percentage'>
            <span>{start}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide right>
          <div className='discount_description'>
            <h3>Purchase ticket before 20th June</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              delectus saepe hic aut nihil, tenetur soluta quisquam facilis
              quibusdam labore, quo earum iusto quis et. Ipsam quidem
              necessitatibus debitis hic.
            </p>
            <MyButton
              text='Purchase tickets'
              link='https://google.com'
              size='small'
              style={{
                background: "#ffa800",
                color: "#ffffff",
              }}
              iconTicket={true}
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Discount;
