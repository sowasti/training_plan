import React from "react";
import { AppRoot, View } from "@vkontakte/vkui";
import MainPage from "./components/MainPage";
import AddProgramPage from "./components/AddProgramPage";
import MuscleGroupPage from "./components/MuscleGroupPage";
import AddExercisePage from "./components/AddExercisePage";
import TrainItemPage from "./components/TrainItemPage";
import ExercisePage from "./components/ExercisePage";

const App: React.FC = () => {
  return (
    <AppRoot>
      <View activePanel="main">
        <MainPage id="main"/>
        <AddProgramPage id="addProgram"/>
        <MuscleGroupPage id="muscleGroup"/>
        <AddExercisePage id="addExercise"/>
        <TrainItemPage id="train"/>
        <ExercisePage id="exercise"/>
      </View>
    </AppRoot>
  );
}

export default App;
