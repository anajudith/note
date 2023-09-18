import axios from "axios";

const api = axios.create({
  baseURL: "https://api.google.com",
});

export const useApi = () => ({
  validadeToken: async (token: string) => {
    return {
      user: { id: 3, name: "Jose", email: "jose@gmail.com" },
    };
    const response = await api.post("/validade", { token });
    return response.data;
  },
  singin: async (email: string, password: string) => {
    return {
      user: { id: 3, name: "Jose", email: "jose@gmail.com" },
      token: "123456789",
    };
    const response = await api.post("/singin", { email, password });
    return response.data;
  },
  logout: async () => {
    return { status: true };
    const response = await api.post("/logout");
    return response.data;
  },
});
