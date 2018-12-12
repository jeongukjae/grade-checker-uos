export interface IGradesAction {
  type: string;
  payload: IGrade[] | Error;
}

export interface IGradesState {
  grades?: IGrade[];
  isFetching: boolean;
  error?: Error;
}

export interface IGrade {
  subject: string; // 과목명
  professor: string; // 교수
  grade: string; // 학점 (3 or 2)
  mark: string; // 받은 학점
  div: string; // 구분
}

const ACTION_FETCH_GRADES = "GRADES_FETCH";
const ACTION_COMPLETE_FETCH = "GRADES_COMPLETE_FETCH";
const ACTION_FETCH_ERROR = "GRADES_FETCH_ERROR";

const initialState: IGradesState = {
  error: undefined,
  grades: undefined,
  isFetching: false
};

export default (state = initialState, action: IGradesAction): IGradesState => {
  switch (action.type) {
    case ACTION_FETCH_GRADES:
      return {
        ...state,
        error: undefined,
        isFetching: true
      };
    case ACTION_COMPLETE_FETCH:
      return {
        error: undefined,
        grades: action.payload as IGrade[],
        isFetching: false
      };
    case ACTION_FETCH_ERROR:
      return {
        ...state,
        error: action.payload as Error
      };
    default:
      return state;
  }
};

export function fetchGrades() {
  return {
    type: ACTION_FETCH_GRADES
  };
}

export function completeFetchingGrades(grades: IGrade[]) {
  return {
    grades,
    type: ACTION_COMPLETE_FETCH
  };
}

export function failFetchingGrades(error: Error) {
  return {
    error,
    type: ACTION_FETCH_GRADES
  };
}
