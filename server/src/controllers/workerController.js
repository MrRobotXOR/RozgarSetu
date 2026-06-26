import User from "../models/User.js";

export const getWorkers = async (req, res) => {
  try {

    const workers = await User.find({
      role: "worker",
    });

    res.json({
      success: true,
      workers,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

export const updateWorkerProfile =
  async (req, res) => {

    try {

      const worker =
        await User.findByIdAndUpdate(
          req.user.id,
          req.body,
          { new: true }
        );

      res.json({
        success: true,
        worker,
      });

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }
};
export const getWorkerProfile =
  async (req, res) => {

    try {

      const worker =
        await User.findById(
          req.user.id
        );

      res.json({
        success: true,
        worker,
      });

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }
};
export const getWorkerById = async (
  req,
  res
) => {
  try {

    const worker =
      await User.findById(
        req.params.id
      );

    if (!worker) {
      return res.status(404).json({
        message: "Worker not found",
      });
    }

    res.json({
      success: true,
      worker,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};