import { Contact } from "../models/contact.models.js";
const submitForm = async (req, res, next) => {
  try {
    const { fullName, email, message } = req.body;
    console.log(req.body); // Log the request body for debugging

    // Basic validations
    // if (!firstName || !lastName || !email || !message) {
    //   return res
    //     .status(400)
    //     .json({ message: "Name, email, and message are required fields" });
    // }

    // Create a new contact instance
    const newContact = new Contact({
      fullName: fullName,
      email: email,
      message: message,
    });

    // Log the new contact for debugging
    console.log('Saving new contact:', newContact);

    // Save the contact to the database
    await newContact.save();

    res.status(201).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export { submitForm };
