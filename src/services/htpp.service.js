import axios from "axios";
import { url_base } from "@/config/index.js";

export function http() {
  const instance = axios.creat({
    baseURL: url_base,
  });
}
