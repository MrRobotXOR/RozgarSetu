import api from "../utils/api";

// Apply for a job
export const applyJob = async (jobId) => {

  const token =
    localStorage.getItem("token");

  const response =
    await api.post(
      "/applications",
      { jobId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

  return response.data;
};

// Worker applications
export const getMyApplications =
  async () => {

    const token =
      localStorage.getItem("token");

    const response =
      await api.get(
        "/applications/my-applications",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

    return response.data;
  };

// All applications
export const getApplications =
  async () => {

    const token =
      localStorage.getItem("token");

    const response =
      await api.get(
        "/applications",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

    return response.data;
  };

// Employer applicants
export const getEmployerApplicants =
  async () => {

    const token =
      localStorage.getItem("token");

    const response =
      await api.get(
        "/applications/employer",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

    return response.data;
  };

// Accept / Reject
export const updateApplicationStatus =
  async (id, status) => {

    const token =
      localStorage.getItem("token");

    const response =
      await api.put(
        `/applications/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

    return response.data;
  };