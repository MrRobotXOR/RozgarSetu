import { useEffect, useState } from "react";
import { getJobs } from "../../services/jobService";
import { applyJob } from "../../services/applicationService";

const SearchJobs = () => {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {

    const fetchJobs = async () => {

      try {

        const data = await getJobs();

        console.log(
          "Jobs Response:",
          data
        );

        setJobs(data.jobs);

      } catch (error) {

        console.log(
          "Jobs Error:",
          error
        );

      }

    };

    fetchJobs();

  }, []);

  const handleApply = async (jobId) => {

    try {

      const data =
        await applyJob(jobId);

      alert(
        "Applied Successfully"
      );

      console.log(
        "Application:",
        data
      );

    } catch (error) {

      console.log(
        error.response?.data
      );

      alert(
        error.response?.data?.message ||
        "Failed To Apply"
      );

    }

  };

  return (
    <div>

      <h1>
        Available Jobs
      </h1>

      {jobs.map((job) => (

        <div
          key={job._id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            margin: "10px",
            borderRadius: "8px",
          }}
        >

          <h3>
            {job.title}
          </h3>

          <p>
            Location:
            {" "}
            {job.location}
          </p>

          <p>
            Salary:
            ₹
            {job.salary}
          </p>

          <button
            onClick={() =>
              handleApply(job._id)
            }
          >
            Apply Now
          </button>

        </div>

      ))}

    </div>
  );
};

export default SearchJobs;