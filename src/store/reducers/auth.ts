import { ACTION_LOGIN, ACTION_LOGOUT } from "../actionTypes";

const initialState: IAuthState = {
  session: undefined,
  user: undefined
};

export default (state = initialState, action: IAuthAction): IAuthState => {
  switch (action.type) {
    case ACTION_LOGIN:
      const { userId, password } = action.payload;

      return state;

    case ACTION_LOGOUT:
      return {
        session: undefined,
        user: undefined
      };

    default:
      return state;
  }
};
