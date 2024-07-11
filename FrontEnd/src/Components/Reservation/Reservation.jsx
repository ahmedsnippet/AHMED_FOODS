import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./Reservation.css";
import axios from "axios";
const Reservation = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        "http://localhost:8000/api/v1/reservation/sendmessage",
        { firstName, lastName, email, phone },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success("Message Sent!");
      setfirstName("");
      setlastName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div className="main-content">
        <div className="left-col">
          <img src="./reservation.png" />
        </div>
        <div className="right-col">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value);
              }}
            />
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="number"
              placeholder="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <div className="btn">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <Toaster position="top-right" />
    </>
  );
};

export default Reservation;
