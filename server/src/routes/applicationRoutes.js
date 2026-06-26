import express from "express";
import protect from "../middleware/authMiddleware.js";
import authorizeRoles from "../middleware/roleMiddleware.js";

import {
  applyJob,
  getApplications,
  updateApplicationStatus,
  getMyApplications,
  getEmployerApplicants,
  withdrawApplication,
} from "../controllers/applicationController.js";

const router = express.Router();

// Worker applies for a job
router.post(
  "/",
  protect,
  authorizeRoles("worker"),
  applyJob
);

// Worker withdraw application
router.delete(
  "/:jobId",
  protect,
  authorizeRoles("worker"),
  withdrawApplication
);

// Worker gets own applications
router.get(
  "/my-applications",
  protect,
  authorizeRoles("worker"),
  getMyApplications
);

// Employer applicants
router.get(
  "/employer",
  protect,
  authorizeRoles("employer"),
  getEmployerApplicants
);

// Admin gets all applications
router.get(
  "/",
  getApplications
);

// Update application status
router.put(
  "/:id",
  updateApplicationStatus
);

export default router;