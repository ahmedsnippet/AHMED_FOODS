import { Reservation } from "../Model/reservationModel.js";

const sendReservation = async (req, res) => {
  const { firstName, lastName, email, phone } = req.body;
  // console.log(email);

  if (!firstName || !lastName || !email || !phone) {
    return res.status(400).json({
      message: "Please FillFull Form !",
    });
  }

  const reservation = await Reservation.create({
    firstName,
    lastName,
    email,
    phone,
  });
  await reservation.save();

  return res.status(200).json({
    message: "Reservation Sent Successfully",
  });

  // try {
  //   const reservation = await Reservation.create({
  //     firstName,
  //     lastName,
  //     email,
  //     phone,
  //   });

  //   await reservation.save();

  //   return res.status(200).json({
  //     message: "Reservation Sent Successfully",
  //   });
  // } catch (error) {
  //   console.log(error);
  // }
};

export { sendReservation };
