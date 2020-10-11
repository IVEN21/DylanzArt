
import {
  logout,
} from "../BackendServices/authService";
function  Logout() {
  logout()
  window.location = "/";
  return null;
}

export default Logout;
