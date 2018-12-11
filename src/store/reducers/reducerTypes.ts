// in auth reducer
interface ILoginPayload {
  // for IAuthAction
  userId: string;
  password: string;
}

interface IAuthAction {
  // action type
  type: string;
  payload: ILoginPayload;
}

interface IStateUser {
  // for IAuthState
  name?: string;
  studentId?: string;
}

interface IAuthState {
  // auth state type
  session?: string;
  user?: IStateUser;
}
