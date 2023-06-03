import React from "react";
import "./event.css";
import CreditCard from "../CreditCard/CreditCard";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from 'react';
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

function Event(value) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
 

  return (
    <div>
      <h1 className="headline-event">{value.value.kind}</h1>
      <div className="event-container">
        <div className="event-image">
          <img src={value.value.image} />
        </div>
        <div className="event-calender"></div>
        <div className="event-explane">{value.value.explanation}</div>
        <div>
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
              <CreditCard/>
            </Box>
          </Modal>
        </div>
        <div className="event-credit-card"></div>
      </div>
    </div>
  );
}

export default Event;
