import { Button } from "@mui/material";
import TicketIcon from "../../resources/images/icons/ticket.png";

const MyButton = (props) => {
  return (
    <Button
      href={props.link}
      variant='contained'
      size={props.size ? props.size : "Large"}
      style={{
        background: "#8e8e8e",
        color: "#ffffff",
        ...props.style,
      }}
    >
      {props.iconTicket ? (
        <img
          src={TicketIcon}
          className='iconImage'
          alt='icon button'
        />
      ) : null}

      {props.text}
    </Button>
  );
};

export default MyButton;
