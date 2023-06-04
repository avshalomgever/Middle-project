import React from "react";
import "./event.css";
import CreditCard from "../CreditCard/CreditCard";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState} from "react";
import CalendarPick from "../calendar/Calendar"; 
import data from '../../../dataEvent.json'
import { useParams } from "react-router-dom";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Event() {
  let { id } = useParams();
  const [data1, setData1] = useState(data.data);
  let objById = data1.find((obj) => obj.zpid == id);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      
      <div className="event-container">
        
        <div className="event-description">
        <h1 className="headline-event">{objById.kind}</h1>
          <div className="event-image">
            <img src={objById.image} />
          </div>
          <div className="event-calender"></div>
          <div className="event-explane">{objById.explanation}</div>
          <div className="event-credit-card">
            <Button className="event-button" onClick={handleOpen}>
              Open modal
            </Button>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <CreditCard />
              </Box>
            </Modal>
          </div>
        </div>
        <div className="calendar">
          <CalendarPick />
        </div>
      </div>
    </div>
  );
}

export default Event;
