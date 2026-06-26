import { useEffect, useState } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";

import {
  getJobs,
} from "../../services/jobService";

import {
  applyJob,
  withdrawApplication,
  getMyApplications,
} from "../../services/applicationService";

const NearbyJobs = () => {

  const [jobs, setJobs] =
    useState([]);

  const [
    appliedJobs,
    setAppliedJobs,
  ] = useState([]);

  const fetchJobs =
    async () => {

      try {

        const data =
          await getJobs();

        setJobs(
          data.jobs || []
        );

      } catch (error) {

        console.log(error);

      }

    };

  const fetchApplications =
    async () => {

      try {

        const data =
          await getMyApplications();

        const ids =
          data.applications.map(
            (app) =>
              app.job._id
          );

        setAppliedJobs(ids);

      } catch (error) {

        console.log(error);

      }

    };

  useEffect(() => {

    fetchJobs();

    fetchApplications();

  }, []);

  const handleApply =
    async (jobId) => {

      try {

        await applyJob(jobId);

        setAppliedJobs(
          (prev) => [
            ...prev,
            jobId,
          ]
        );

        alert(
          "Applied Successfully"
        );

      } catch (error) {

        alert(
          error.response?.data?.message
        );

      }

    };

  const handleWithdraw =
    async (jobId) => {

      try {

        await withdrawApplication(
          jobId
        );

        setAppliedJobs(
          (prev) =>
            prev.filter(
              (id) =>
                id !== jobId
            )
        );

        alert(
          "Application Withdrawn"
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

        {jobs.map((job) => {

          const isApplied =
            appliedJobs.includes(
              job._id
            );

          return (

            <div
              key={job._id}
              className="bg-white p-6 rounded-xl shadow"
            >

              <h3 className="font-bold text-lg">
                {job.title}
              </h3>

              <p className="mt-2 text-gray-600">
                {job.location}
              </p>

              <p className="mt-2 font-semibold">
                ₹{job.salary}
              </p>

              {isApplied ? (

                <button
                  onClick={() =>
                    handleWithdraw(
                      job._id
                    )
                  }
                  className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
                >
                  Withdraw
                </button>

              ) : (

                <button
                  onClick={() =>
                    handleApply(
                      job._id
                    )
                  }
                  className="mt-4 w-full bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-lg transition"
                >
                  Apply
                </button>

              )}

            </div>

          );

        })}

      </div>

    </DashboardLayout>

  );

};

export default NearbyJobs;