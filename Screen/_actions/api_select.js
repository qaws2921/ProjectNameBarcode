import axios from "axios";
import { API_SELECT } from "./types";

export function api_select1(uri,dataTosubmit){
  console.log("시작");
  const todos = [];
  const request =axios.post(uri, dataTosubmit,
  {
    headers: {
      "Content-Type": `application/json`,
    },
  }
  )
  .then(response =>  response.data)
 

  return {
    type: API_SELECT,
    payload: request
  }

}