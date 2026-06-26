import api from "../utils/api";

export const sendMessage = async (
  receiver,
  text
) => {
  const response = await api.post(
    "/chat/send",
    {
      receiver,
      text,
    }
  );

  return response.data;
};

export const getMessages = async (
  userId
) => {
  const response = await api.get(
    `/chat/${userId}`
  );

  return response.data;
};

// NEW
export const getConversations =
  async () => {

    const response =
      await api.get(
        "/chat/conversations"
      );

    return response.data;
};