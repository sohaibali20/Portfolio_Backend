import { Contact } from "../models/contact.models.js";
const getContact = async (req, res, next) => {
  try {
    // const { fullName, email, message } = req.body;
    // console.log(req.body); // Log the request body for debugging

    const contacts = await Contact.find({})
    res.status(201).json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export { getContact };