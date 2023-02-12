import axios from "axios";
import { url_base, API_KEY } from "@/config/index.js";

export function http() {
  const instance = axios.create({
    baseURL: url_base,
    params: {
      api_key: API_KEY,
    },
    Headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return instance;
}
