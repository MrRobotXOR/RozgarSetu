import { useState,useEffect } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";



import {
  updateWorkerProfile,
  getWorkerProfile,
} from "../../services/workerService";

const WorkerProfile = () => {

  const [profile,
    setProfile] =
    useState({
      name: "",
      skill: "",
      location: "",
      experience: "",
      expectedSalary: "",
      availability: "Available",
    });
    useEffect(() => {

  const fetchProfile =
    async () => {

      try {

        const data =
          await getWorkerProfile();

        setProfile({
          name:
            data.worker?.name || "",
          skill:
            data.worker?.skill || "",
          location:
            data.worker?.location || "",
          experience:
            data.worker?.experience || "",
          expectedSalary:
            data.worker?.expectedSalary || "",
          availability:
            data.worker?.availability ||
            "Available",
        });

      } catch (error) {

        console.log(error);

      }

    };

  fetchProfile();

}, []);

  const handleChange =
    (e) => {

      setProfile({
        ...profile,
        [e.target.name]:
          e.target.value,
      });

    };

  const handleSubmit =
    async () => {

      try {

        const data =
          await updateWorkerProfile(
            profile
          );

        console.log(data);

        alert(
          "Profile Updated Successfully"
        );

      } catch (error) {

        console.log(
          error.response?.data
        );

      }

    };

  return (
    <DashboardLayout role="worker">

      <h1 className="text-3xl font-bold mb-6">
        Worker Profile
      </h1>

      <div className="bg-white p-8 rounded-xl shadow">

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={profile.name}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="skill"
            placeholder="Skill"
            value={profile.skill}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={profile.location}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            name="experience"
            placeholder="Experience"
            value={profile.experience}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            name="expectedSalary"
            placeholder="Expected Salary"
            value={profile.expectedSalary}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <select
            name="availability"
            value={profile.availability}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          >
            <option>
              Available
            </option>

            <option>
              Busy
            </option>
          </select>

        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 bg-teal-700 text-white px-6 py-3 rounded-lg"
        >
          Save Profile
        </button>

      </div>

    </DashboardLayout>
  );
};

export default WorkerProfile;