import http from "./http";
import { apiEndpoint } from "./config.json";
import { toast } from "react-toastify";

const key = "user";

export async function login(username, password) {
  try {
    const promise = await http.post(apiEndpoint + "/author/login", {
      username,
      password,
    });
    if (promise.data.status === 404) {
      toast.error("Username not found");
    } else if (promise.data.status === 401) {
      toast.error("Incorrect password");
    } else {
      localStorage.setItem(key, JSON.stringify(promise.data));
      window.location="/"
    }
  } catch (err) {
    toast.error("Server Down :( ");
  }
}

export function getCurrrentUser() {
  return JSON.parse(localStorage.getItem(key));
}

export function logout() {
  localStorage.clear();
}
