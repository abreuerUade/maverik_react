import axios from "axios";
import storage from "@/services/shared/storage";
import { getConfig } from "@/services/shared/config";

export const tokenName = "maverik-auth-token";
const config = getConfig();

export const getAxiosClient = () => {
  let headers = {};
  const token = storage.get(tokenName);
  if (token) {
    headers = { Authorization: `Bearer ${token}` }
  }
  return axios.create({
    baseURL: config.api_url,
    timeout: 60000,
    headers,
  });
};