import axiosInstance from "@/config/axios";

export const getMe = (token: string | null) => {
  return axiosInstance.get("auth/me", {
    headers: {
      Authorization: token,
    },
  });
};

export const login = (username: string, password: string) => {
  return axiosInstance.post("auth/login", {
    username,
    password,
  });
};

export const register = (name: string, username: string, password: string) => {
  return axiosInstance.post("auth/register", {
    name,
    username,
    password,
  });
};

export const getAvailableGames = (token: string) => {
  return axiosInstance.get("game/available-games", {
    headers: {
      Authorization: token,
    },
  });
};

export const getDifficultiesGames = (token: string) => {
  return axiosInstance.get("game/difficulties", {
    headers: {
      Authorization: token,
    },
  });
};

export const startGame = (token: string, type: string, difficulty: string) => {
  return axiosInstance.post(
    "game/start",
    {
      type,
      difficulty,
    },
    {
      headers: {
        Authorization: token,
      },
    }
  );
};
