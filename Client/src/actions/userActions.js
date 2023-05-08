import { getSingle } from "../utils/apiRoutes"; 
import authService from '../utils/auth'
export const setCurrentUser = (user) => {
  return {
    type: 'SET_CURRENT_USER',
    payload: user,
  };
};

export const getCurrentUser = () => {
  return async (dispatch) => {
    const token = authService.loggedIn() ? authService.getToken() : null;
    try {
      const response = await getSingle(token)
      const user = await response.json()
      dispatch(setCurrentUser(user.foundUser));
    } catch (error) {
      console.error(error);
    }
  };
};