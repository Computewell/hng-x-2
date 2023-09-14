import { Router } from "express";
import {
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
} from "../controllers/person.js";

const router = Router();

router.route("/").post(createPerson);
router.route("/:id").get(getPerson).patch(updatePerson).delete(deletePerson);

export default router;
