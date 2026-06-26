import express from "express";
import {
  getWorkers,
  updateWorkerProfile,
  getWorkerProfile,
  getWorkerById,
} from "../controllers/workerController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getWorkers);

router.put(
  "/profile",
  protect,
  updateWorkerProfile
);
router.get(
  "/profile",
  protect,
  getWorkerProfile
);
router.get(
  "/:id",
  getWorkerById
);
export default router;