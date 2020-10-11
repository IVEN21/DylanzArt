import { apiEndpoint } from "./config.json";
import http from "./http";
export const getDrawings = async () => {
 
    const { data } = await http.get(apiEndpoint + "/gallery");
    return data;
  
 
};
