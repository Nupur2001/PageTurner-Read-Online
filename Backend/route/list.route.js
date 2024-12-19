import express from "express";
import { getList } from "../controller/list.controller.js";

const router = express.Router(); // Add parentheses
router.get("/", getList);
export default router; // Export the router
