import { Zoom } from "react-awesome-reveal";
import MyButton from "../utils/myButton";

const Pricing = () => {
  const priceState = {
    prices: [100, 250, 300],
    position: ["Balcony", "Medium", "star"],
    desc: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, fugiat. Nobis, tenetur fuga magnam voluptatem nulla illo reiciendis, consequatur molestiae delectus obcaecati, praesentium ad repellat quos soluta. Iusto, reprehenderit! Ducimus?",
      "Odio, aperiam eligendi eaque adipisci saepe ipsam repudiandae quasi et qui iste neque temporibus provident voluptate ipsum recusandae, magnam quisquam nesciunt, eos corporis praesentium consequuntur! Aut enim iure consequuntur tenetur.",
      "Cupiditate cumque sit id possimus, veritatis, ullam laborum quo, nisi blanditiis voluptates eum recusandae aliquid. Quas fugit vero, sunt voluptate dignissimos aspernatur perferendis tempore eveniet exercitationem doloribus quaerat voluptatibus ducimus!",
    ],
    linkto: ["https://sales.ru", "https://nott.ru", "https://ssdaes.ru"],
    delay: [500, 0, 500],
  };

  const showBoxes = () =>
    priceState.prices.map((box, i) => (
      <Zoom
        key={i}
        className='pricing_item'
        delay={priceState.delay[i]}
      >
        <div className='pricing_inner_wrapper'>
          <div className='pricing_title'>
            <span>${priceState.prices[i]}</span>
            <span>{priceState.position[i]}</span>
          </div>
          <div className='pricing_description'>{priceState.desc[i]}</div>
          <div className='pricing_buttons'>
            <MyButton
              text='Purchase tickets'
              link={priceState.linkto[i]}
              style={{
                color: "#ffffff",
              }}
              iconTicket={true}
            />
          </div>
        </div>
      </Zoom>
    ));

  return (
    <div className='bck_black'>
      <div className='center_wrapper pricing_section'>
        <h2>Pricing</h2>
        <div className='pricing_wrapper'>{showBoxes()}</div>
      </div>
    </div>
  );
};

export default Pricing;
