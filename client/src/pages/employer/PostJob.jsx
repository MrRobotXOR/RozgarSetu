import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import { createJob } from "../../services/jobService";

const PostJob = () => {

  const navigate = useNavigate();

  const currentUser = JSON.parse(
    localStorage.getItem("user")
  );

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

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const data =
          await createJob(
            jobData
          );

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

        navigate(
          "/employer/dashboard"
        );

      } catch (error) {

        console.log(
          error.response?.data
        );

      }

    };

  return (

    <DashboardLayout
      role={currentUser?.role}
    >

      <div className="min-h-full flex items-center justify-center px-6 py-10">

        <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">

          <h1 className="text-3xl font-bold text-center text-gray-800">

            Post New{" "}

            <span className="text-teal-700">
              Job
            </span>

          </h1>

          <form
            onSubmit={
              handleSubmit
            }
            className="mt-8 space-y-5"
          >

            <input
              type="text"
              name="title"
              placeholder="Job Title"
              value={jobData.title}
              onChange={
                handleChange
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-700"
            />

            <textarea
              name="description"
              placeholder="Description"
              value={
                jobData.description
              }
              onChange={
                handleChange
              }
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-700 resize-none"
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={
                jobData.location
              }
              onChange={
                handleChange
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-700"
            />

            <input
              type="text"
              name="salary"
              placeholder="e.g. ₹10,000 - ₹20,000 / month"
              value={
                jobData.salary
              }
              onChange={
                handleChange
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-700"
            />

            <button
              type="submit"
              className="w-full bg-teal-700 text-white py-3 rounded-lg font-semibold hover:bg-teal-800 transition"
            >
              Post Job
            </button>

          </form>

        </div>

      </div>

    </DashboardLayout>

  );

};

export default PostJob;