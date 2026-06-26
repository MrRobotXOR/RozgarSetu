import { useEffect, useState } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";

import {
  getJobs,
} from "../../services/jobService";

import {
  applyJob,
} from "../../services/applicationService";

const NearbyJobs = () => {

  const [jobs, setJobs] =
    useState([]);

  const fetchJobs =
    async () => {

      try {

        const data =
          await getJobs();

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

  const handleApply =
    async (jobId) => {

      try {

        await applyJob(jobId);

        alert(
          "Applied Successfully"
        );

      } catch (error) {

        alert(
          error.response?.data?.message
        );

      }

    };

  return (

    <DashboardLayout role="worker">

      <h1 className="text-3xl font-bold mb-6">
        Nearby Jobs
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {jobs.map((job) => (

          <div
            key={job._id}
            className="bg-white p-6 rounded-xl shadow"
          >

            <h3 className="font-bold">
              {job.title}
            </h3>

            <p>
              {job.location}
            </p>

            <p>
              ₹{job.salary}
            </p>

            <button
              onClick={() =>
                handleApply(
                  job._id
                )
              }
              className="mt-4 bg-teal-700 text-white px-4 py-2 rounded"
            >
              Apply
            </button>

          </div>

        ))}

      </div>

    </DashboardLayout>

  );
};

export default NearbyJobs;