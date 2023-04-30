import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./AlertToastify.module.css";

const AlertToastify = () => {
  return (
    <div>
      <ToastContainer newestOnTop limit={4} />
    </div>
  );
};

export default AlertToastify;
