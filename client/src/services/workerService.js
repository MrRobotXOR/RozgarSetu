import api from "../utils/api";

export const getWorkers = async () => {
  const response = await api.get("/workers");
  return response.data;
};

export const getWorkerById = async (id) => {
  const response = await api.get(
    `/workers/${id}`
  );

  return response.data;
};

export const updateWorkerProfile =
  async (profileData) => {

    const token =
      localStorage.getItem("token");

    const response =
      await api.put(
        "/workers/profile",
        profileData,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data;
};

export const getWorkerProfile =
  async () => {

    const token =
      localStorage.getItem("token");

    const response =
      await api.get(
        "/workers/profile",
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data;
};