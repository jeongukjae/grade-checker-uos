export interface IAuthAction {
  // action type
  type: string;
  payload: IAuthState | Error;
}

export interface IStateUser {
  // for IAuthState
  name?: string;
  studentId?: string;
}

export interface IAuthState {
  // auth state type
  session?: string;
  user?: IStateUser;
  error?: Error;
}

const ACTION_LOGIN = "AUTH_LOGIN";
const ACTION_LOGIN_FAIL = "AUTH_LOGIN_FAIL";
const ACTION_LOGOUT = "AUTH_LOGOUT";

const initialState: IAuthState = {
  error: undefined,
  session: undefined,
  user: undefined
};

export default (state = initialState, action: IAuthAction): IAuthState => {
  switch (action.type) {
    case ACTION_LOGIN:
      return {
        error: undefined,
        ...(action.payload as IAuthState)
      };

    case ACTION_LOGIN_FAIL:
      return {
        error: action.payload as Error,
        ...state
      };

    case ACTION_LOGOUT:
      return {
        error: undefined,
        session: undefined,
        user: undefined
      };

    default:
      return state;
  }
};

export function loginComplete(session: string, user: IStateUser) {
  return { type: ACTION_LOGIN, session, user };
}

export function failLogin(error: Error) {
  return {
    error,
    type: ACTION_LOGIN_FAIL
  };
}

export function logoutComplete() {
  return { type: ACTION_LOGOUT };
}
