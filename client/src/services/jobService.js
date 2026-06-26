import api from "../utils/api";

export const getJobs = async () => {
  const response = await api.get("/jobs");
  return response.data;
};

export const createJob = async (jobData) => {

  const token =
    localStorage.getItem("token");

  const response =
    await api.post(
      "/jobs",
      jobData,
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );

  return response.data;
};
export const getMyJobs =
  async () => {

    const token =
      localStorage.getItem("token");

    const response =
      await api.get(
        "/jobs/my-jobs",
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data;
};

export const deleteJob =
  async (jobId) => {

    const token =
      localStorage.getItem("token");

    const response =
      await api.delete(
        `/jobs/${jobId}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data;
};