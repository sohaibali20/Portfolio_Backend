import {Router} from "express";
const router = Router();

// const contactsController = require("../controllers/contact.controller");
// router.post("/contact", contactsController.submitForm);
import {submitForm} from "../controllers/contact.controller.js";
router.route("/submit").post(submitForm);

// module.exports = router;
export default router