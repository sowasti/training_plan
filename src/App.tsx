import React from "react";
import { AdaptivityProvider, AppRoot, ConfigProvider, SplitCol, SplitLayout, View } from "@vkontakte/vkui";
import '@vkontakte/vkui/dist/vkui.css';
import MainPage from "./components/MainPage";
import AddProgramPage from "./components/AddProgramPage";
import MuscleGroupPage from "./components/MuscleGroupPage";
import AddExercisePage from "./components/AddExercisePage";
import TrainItemPage from "./components/TrainItemPage";
import ExercisePage from "./components/ExercisePage";
import { withRouter } from 'react-router-vkminiapps';

interface IApp{
  router: any
}

const App: React.FC<IApp> = ({router}) => {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout>
            <SplitCol>
              <View activePanel={router.activePanel}>
                <MainPage id="mainPage" />
                <AddProgramPage id="addProgramPage" />
                <MuscleGroupPage id="muscleGroupPage" />
                <AddExercisePage id="addExercisePage" />
                <TrainItemPage id="trainItemPage" />
                <ExercisePage id="exercisePage" />
              </View>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

export default withRouter(App);
