import {Router} from "express";
const router = Router();

// const contactsController = require("../controllers/contact.controller");
// router.post("/contact", contactsController.submitForm);
import {getContact} from "../controllers/getContact.coltroller.js";
import { authenticate } from "../middlewares/loginAuth.js";
router.route("/getSubmit").get(getContact, authenticate);

// module.exports = router;
export default router