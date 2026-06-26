import express from "express";
import protect from "../middleware/authMiddleware.js";

import {
  applyJob,
  getApplications,
  updateApplicationStatus,
  getMyApplications,
  getEmployerApplicants,
} from "../controllers/applicationController.js";

import authorizeRoles from "../middleware/roleMiddleware.js";

const router = express.Router();

// Worker applies for a job
router.post(
  "/",
  protect,
  authorizeRoles("worker"),
  applyJob
);

// Worker gets own applications
router.get(
  "/my-applications",
  protect,
  authorizeRoles("worker"),
  getMyApplications
);
router.get(
  "/employer",
  protect,
  authorizeRoles("employer"),
  getEmployerApplicants
);

// Admin gets all applications
router.get("/", getApplications);

// Update application status
router.put(
  "/:id",
  updateApplicationStatus
);



export default router;