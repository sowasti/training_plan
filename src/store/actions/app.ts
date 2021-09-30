import {
  AppActions,
  AppActionTypes,
  ISetActiveExercise,
  ISetActiveTrain,
  ISetCount,
  ISetDaysWeek, 
  ISetExerciseTrain,
  ISetMuscleGroup,
  ISetSets,
  ISetTrainName,
  ISetTrainPlan,
  ISetWeigth
} from "../../types/app";

export const setTrainName = (payload: ISetTrainName['payload']): AppActions => {
  return {
    type: AppActionTypes.APP_SET_TRAIN_NAME,
    payload
  }
}
export const setDaysWeek = (payload: ISetDaysWeek['payload']) => {
  return {
    type: AppActionTypes.APP_SET_DAYS_WEEK,
    payload
  }
}
export const setTrainPlan = (payload: ISetTrainPlan['payload']) => {
  return {
    type: AppActionTypes.APP_SET_TRAIN_PLAN,
    payload
  }
}
export const setExercisesTrain = (payload: ISetExerciseTrain['payload']) => {
  return {
    type: AppActionTypes.APP_SET_EXERCISE_TRAIN,
    payload
  }
}
export const setActiveTrain = (payload: ISetActiveTrain['payload']) => {
  return {
    type: AppActionTypes.APP_SET_ACTIVE_TRAIN,
    payload
  }
}
export const setMuscleGroup = (payload: ISetMuscleGroup['payload']) => {
  return {
    type: AppActionTypes.APP_SET_MUSCLE_GROUP,
    payload
  }
}
export const setActiveExercise = (payload: ISetActiveExercise['payload']) => {
  return {
    type: AppActionTypes.APP_SET_ACTIVE_EXERCISE,
    payload
  }
}
export const setSets = (payload: ISetSets['payload']) => {
  return {
    type: AppActionTypes.APP_SET_SETS,
    payload
  }
}
export const setWeigth = (payload: ISetWeigth['payload']) => {
  return {
    type: AppActionTypes.APP_SET_WEIGTH,
    payload
  }
}
export const setCount = (payload: ISetCount['payload']) => {
  return {
    type: AppActionTypes.APP_SET_COUNT,
    payload
  }
}