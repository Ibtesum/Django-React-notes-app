import React from "react";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <Link to="/notes/new" className="floating-button">
      <IoIosAdd />
    </Link>
  );
};

export default AddButton;
