import { useState } from "react";
import { createJob } from "../../services/jobService";

const PostJob = () => {

  const [jobData, setJobData] =
    useState({
      title: "",
      description: "",
      location: "",
      salary: "",
    });

  const handleChange = (e) => {

    setJobData({
      ...jobData,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const data =
        await createJob(jobData);

      console.log(data);

      alert(
        "Job Posted Successfully"
      );

      setJobData({
        title: "",
        description: "",
        location: "",
        salary: "",
      });

    } catch (error) {

      console.log(
        error.response?.data
      );

    }
  };

  return (
    <div>

      <h1>
        Post New Job
      </h1>

      <form
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={jobData.title}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="description"
          placeholder="Description"
          value={jobData.description}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={jobData.location}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={jobData.salary}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Post Job
        </button>

      </form>

    </div>
  );
};

export default PostJob;