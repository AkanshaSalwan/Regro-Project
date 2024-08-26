import React from "react";
import './style.css';
import Button from "@mui/material/Button";

const Newsletter = () => {
  return (
    <>
      <div className="newsLetterBanner">
        <input type="text" placeholder="your email address.." />
        <Button className="bg-g">Subscribe</Button>
      </div>
    </>
  );
};

export default Newsletter;
