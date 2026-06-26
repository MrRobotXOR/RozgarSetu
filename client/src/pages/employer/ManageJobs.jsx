import { useEffect, useState }
from "react";

import DashboardLayout
from "../../components/dashboard/DashboardLayout";

import {
  getMyJobs,
  deleteJob,
}
from "../../services/jobService";

const ManageJobs = () => {

  const [jobs,
    setJobs] =
    useState([]);

  const fetchJobs =
    async () => {

      try {

        const data =
          await getMyJobs();
          console.log("MY JOBS RESPONSE:", data);

        setJobs(
          data.jobs
        );

      } catch (error) {

        console.log(error);

      }

    };

  useEffect(() => {

    fetchJobs();

  }, []);

  const handleDelete =
    async (jobId) => {

      try {

        await deleteJob(
          jobId
        );

        alert(
          "Job Deleted"
        );

        fetchJobs();

      } catch (error) {

        console.log(
          error.response?.data
        );

      }

    };

  return (
    <DashboardLayout role="employer">

      <h1 className="text-3xl font-bold mb-6">
        Manage Jobs
      </h1>

      <div className="space-y-4">

        {jobs.map((job) => (

          <div
            key={job._id}
            className="bg-white p-5 rounded-xl shadow flex justify-between"
          >

            <div>

              <h3 className="font-bold">
                {job.title}
              </h3>

              <p>
                {job.location}
              </p>

              <p>
                ₹{job.salary}
              </p>

            </div>

            <button
              onClick={() =>
                handleDelete(
                  job._id
                )
              }
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </DashboardLayout>
  );
};

export default ManageJobs;