import React from "react";
import { AdaptivityProvider, AppRoot, ConfigProvider, View } from "@vkontakte/vkui";
import '@vkontakte/vkui/dist/vkui.css';
import MainPage from "./components/MainPage";
import AddProgramPage from "./components/AddProgramPage";
import MuscleGroupPage from "./components/MuscleGroupPage";
import AddExercisePage from "./components/AddExercisePage";
import TrainItemPage from "./components/TrainItemPage";
import ExercisePage from "./components/ExercisePage";

const App: React.FC = () => {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>          
              <View activePanel="addProgram">
                <MainPage id="main" />
                <AddProgramPage id="addProgram" />
                <MuscleGroupPage id="muscleGroup" />
                <AddExercisePage id="addExercise" />
                <TrainItemPage id="train" />
                <ExercisePage id="exercise" />
              </View>          
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

export default App;
