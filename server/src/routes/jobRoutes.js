import express from "express";
import protect from "../middleware/authMiddleware.js";

import {
  createJob,
  getJobs,
  getMyJobs,
  deleteJob,
} from "../controllers/jobController.js";

import authorizeRoles from "../middleware/roleMiddleware.js";

const router = express.Router();

// Public
router.get("/", getJobs);

// Employer jobs
router.get(
  "/my-jobs",
  protect,
  authorizeRoles("employer"),
  getMyJobs
);

// Create job
router.post(
  "/",
  protect,
  authorizeRoles("employer"),
  createJob
);

// Delete job
router.delete(
  "/:id",
  protect,
  authorizeRoles("employer"),
  deleteJob
);

export default router;