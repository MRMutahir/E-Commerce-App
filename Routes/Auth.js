import express from "express";
import sigin from "../Controller/Auth.js";

let router = express.Router();
router.get("/", sigin);
export default router;
