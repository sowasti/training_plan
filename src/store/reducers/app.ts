import { AppActions, AppActionTypes, IState } from "../../types/app";

const initialState: IState = {
  trainName: "",
  daysWeek: "Пн",
  trainPlan: [],
  exercisesTrain: [],
  muscleGroup: [],
  exercise: [],
  sets: 3,
  weigth: "",
  count: ""
}

export default function reducer(state: IState = initialState, action: AppActions): IState {
  switch (action.type) {
    case AppActionTypes.APP_SET_TRAIN_NAME:
      return { ...state, trainName: action.payload };
    case AppActionTypes.APP_SET_DAYS_WEEK:
      return { ...state, daysWeek: action.payload };
    case AppActionTypes.APP_SET_TRAIN_PLAN:
      return { ...state, trainPlan: action.payload };
    case AppActionTypes.APP_SET_EXERCISE_TRAIN:
      return { ...state, exercisesTrain: action.payload };
    case AppActionTypes.APP_SET_MUSCLE_GROUP:
      return { ...state, muscleGroup: action.payload };
    case AppActionTypes.APP_SET_EXERCISE:
      return { ...state, exercise: action.payload };
    case AppActionTypes.APP_SET_SETS:
      return { ...state, sets: action.payload };
    case AppActionTypes.APP_SET_WEIGTH:
      return { ...state, weigth: action.payload };
    case AppActionTypes.APP_SET_COUNT:
      return { ...state, count: action.payload };
    default:
      return state;
  }
}