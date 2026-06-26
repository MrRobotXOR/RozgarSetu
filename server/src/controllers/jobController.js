import Job from "../models/Job.js";

export const createJob = async (req, res) => {
  try {
    const {
      title,
      description,
      salary,
      location,
    } = req.body;

   const job = await Job.create({
  title,
  description,
  salary,
  location,
  employer: req.user.id,
});

    res.status(201).json({
      success: true,
      job,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getJobs = async (req, res) => {
  
  try {
    const jobs = await Job.find();

    res.status(200).json({
      success: true,
      jobs,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getMyJobs = async (
  req,
  res
) => {

  try {

    const jobs = await Job.find({
      employer: req.user.id
    });

    res.status(200).json({
      success: true,
      jobs
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

export const deleteJob = async (
  req,
  res
) => {

  try {

    const job =
      await Job.findById(
        req.params.id
      );

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    await Job.findByIdAndDelete(
      req.params.id
    );

    res.json({
      success: true,
      message: "Job deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};