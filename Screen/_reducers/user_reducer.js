import { API_SELECT } from "../_actions/types";


export default function (state = {}, action) {
    switch (action.type) {
      case API_SELECT:
          return {...state, data: action.payload}
        break;
      default:
        return state
    }
}