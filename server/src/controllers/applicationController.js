import Application from "../models/Application.js";
import Job from "../models/Job.js";



// Apply for a job
export const applyJob = async (req, res) => {
  try {
    const { jobId } = req.body;

    const alreadyApplied = await Application.findOne({
      worker: req.user.id,
      job: jobId,
    });

    if (alreadyApplied) {
      return res.status(400).json({
        message: "Already Applied",
      });
    }

    const application = await Application.create({
      worker: req.user.id,
      job: jobId,
    });

    res.status(201).json({
      success: true,
      application,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get all applications (Admin)
export const getApplications = async (req, res) => {
  try {
    const applications = await Application.find()
      .populate("worker")
      .populate("job");

    res.status(200).json({
      success: true,
      applications,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update application status
export const updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const application = await Application.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.status(200).json({
      success: true,
      application,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get logged-in worker applications
export const getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      worker: req.user.id,
    }).populate("job");

    res.status(200).json({
      success: true,
      applications,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getEmployerApplicants = async (req, res) => {
  try {

    console.log("EMPLOYER ID:", req.user.id);

    const jobs = await Job.find({
      employer: req.user.id,
    });

    console.log("JOBS:", jobs);

    const jobIds = jobs.map(job => job._id);

    console.log("JOB IDS:", jobIds);

    const applications =
      await Application.find({
        job: { $in: jobIds },
      })
      .populate("worker")
      .populate("job");

    console.log(
      "APPLICATIONS:",
      applications
    );

    res.status(200).json({
      success: true,
      applications,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};