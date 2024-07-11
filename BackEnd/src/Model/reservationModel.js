import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema(
  {
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validates: [validator.isEmail, "Provide a Valid Email"],
  },
  phone: {
    type: String,
    required: true,
  },
}
);

export const Reservation = mongoose.model("Reservations", reservationSchema);
