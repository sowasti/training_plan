import { AppActions, AppActionTypes, IState } from "../../types/app";

const initialState: IState = {
  trainName: "",
  daysWeek: "1",
  trainPlan: [],
  exercisesToTrain: [],
  activeTrain: {},
  muscleGroup: [],
  activeMuscleGroup: "",
  exercisesInMuscleGroup: [],
  activeExercise: {},
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
      return { ...state, exercisesToTrain: action.payload };
    case AppActionTypes.APP_SET_ACTIVE_TRAIN:
      return { ...state, activeTrain: action.payload };
    case AppActionTypes.APP_SET_MUSCLE_GROUP:
      return { ...state, muscleGroup: action.payload };
    case AppActionTypes.APP_SET_ACTIVE_MUSCLE_GROUP:
      return { ...state, activeMuscleGroup: action.payload };
    case AppActionTypes.APP_SET_EXERCISES_IN_MUSCLE_GROUP:
      return { ...state, exercisesInMuscleGroup: action.payload };
    case AppActionTypes.APP_SET_ACTIVE_EXERCISE:
      return { ...state, activeExercise: action.payload };
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