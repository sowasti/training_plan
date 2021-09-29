export interface ITrainTtems {
  id: number
  trainName: string
  daysWeek: string
  exercisesTrain: IExercisesTrain[]
}
export interface IExercisesTrain {
  nameExercise: string
  countApproach: number
  approachItems: IApproachItems[]
}
export interface IApproachItems {
  set: number
  weigth: number
  count: number
}

export interface IMuscleGroup {
  nameMuscleGroup: string
  exercise: any[]
}
export interface IExercise {
  nameExercise: string
  muscleGroup: string
}

export interface IState {
  trainName: string
  daysWeek: string
  trainPlan: ITrainTtems[]
  exercisesTrain: IExercisesTrain[]
  activeTrain: any
  muscleGroup: IMuscleGroup[]
  exercise: IExercise[]
  sets: number
  weigth: number | string
  count: number | string
}

export enum AppActionTypes {
  APP_SET_TRAIN_NAME = 'APP/SET_TRAIN_NAME',
  APP_SET_DAYS_WEEK = 'APP/SET_DAYS_WEEK',
  APP_SET_TRAIN_PLAN = 'APP/SET_TRAIN_PLAN',
  APP_SET_EXERCISE_TRAIN = 'APP/SET_EXERCISE_TRAIN',
  APP_SET_ACTIVE_TRAIN = 'APP/SET_ACTIVE_TRAIN',
  APP_SET_MUSCLE_GROUP = 'APP/SET_MUSCLE_GROUP',
  APP_SET_EXERCISE = 'APP/SET_EXERCISE',
  APP_SET_SETS = 'APP/SET_SETS',
  APP_SET_WEIGTH = 'APP/SET_WEIGTH',
  APP_SET_COUNT = 'APP/SET_COUNT'
}

export interface ISetTrainName {
  type: AppActionTypes.APP_SET_TRAIN_NAME
  payload: string
}
export interface ISetDaysWeek {
  type: AppActionTypes.APP_SET_DAYS_WEEK
  payload: string
}
export interface ISetTrainPlan {
  type: AppActionTypes.APP_SET_TRAIN_PLAN
  payload: ITrainTtems[]
}
export interface ISetExerciseTrain {
  type: AppActionTypes.APP_SET_EXERCISE_TRAIN
  payload: IExercisesTrain[]
}
export interface ISetActiveTrain {
  type: AppActionTypes.APP_SET_ACTIVE_TRAIN
  payload: any
}
export interface ISetMuscleGroup {
  type: AppActionTypes.APP_SET_MUSCLE_GROUP
  payload: IMuscleGroup[]
}
export interface ISetExercise {
  type: AppActionTypes.APP_SET_EXERCISE
  payload: IExercise[]
}
export interface ISetSets {
  type: AppActionTypes.APP_SET_SETS
  payload: number
}
export interface ISetWeigth {
  type: AppActionTypes.APP_SET_WEIGTH
  payload: number
}
export interface ISetCount {
  type: AppActionTypes.APP_SET_COUNT
  payload: number
}

export type AppActions = ISetTrainName | ISetDaysWeek | ISetTrainPlan | ISetExerciseTrain | ISetActiveTrain | ISetMuscleGroup | ISetExercise | ISetSets | ISetWeigth | ISetCount;