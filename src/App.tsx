import React, { useEffect } from "react";
import { AdaptivityProvider, AppRoot, ConfigProvider, SplitCol, SplitLayout, View } from "@vkontakte/vkui";
import '@vkontakte/vkui/dist/vkui.css';
import MainPage from "./components/MainPage";
import AddProgramPage from "./components/AddProgramPage";
import MuscleGroupPage from "./components/MuscleGroupPage";
import AddExercisePage from "./components/AddExercisePage";
import TrainItemPage from "./components/TrainItemPage";
import ExercisePage from "./components/ExercisePage";
import { withRouter } from 'react-router-vkminiapps';
import { useActions } from "./hooks/useActions";

const muscleGroup = [
  {
    name: "Плечи",
    exercise: [
      {name: "Разведение гантелей стоя"},
      {name: "Разведение гантелей лежа на скамье"},
      {name: "Армейский жим из-за головы"},
      {name: "Армейский жим с груди стоя"},
      {name: "Жим в тренажере сидя"},      
      {name: "Отжимания стоя на руках"},
      {name: "Подъем гантелей перед собой"},
      {name: "Попеременный жим гантелей сидя"},
    ]
  },
  {
    name: "Руки",
    exercise: [
      {name: "Отжимания на брусьях"},
      {name: "Задние отжимания от скамьи"},
      {name: "Отжимания узким хватом"},
      {name: "Разгибания на трицепс в тренажере"},
      {name: "Отведение гантелей за себя"},
      {name: "Подьем гантелей на бицепс"},      
      {name: "Подтягивания на бицепс"},
      {name: "Подъем на бицепс в тренажере сидя"},
      {name: "Попеременный подъем гантелей на бицепс"},
    ]
  },
  {
    name: "Спина",
    exercise: [
      {name: "Подтягивания на перекладине широким хватом"},
      {name: "Тяга Т-штанги в наклоне стоя"},
      {name: "Тяга в тренажере нижнего блока сидя"},
      {name: "Тяга в тренажере верхнего блока сидя"},
      {name: "Тяга нижнего блока в никлоне стоя"},
      {name: "Тяга гантелей лежа на скамье животом"},     
    ]
  },
  {
    name: "Поясница",
    exercise: [
      {name: "Гиперэкстензия в тренажере"},
      {name: "Гиперэкстензия лежа на животе на полу"},
      {name: "Гиперэкстензия на блоке трос между ног"},
      {name: "Гиперэкстензия в тренажере Смита стоя"},
      {name: "Становая тяга на блоке"},
      {name: "Становая тяга со штангой"},      
      {name: "Становая тяга Сумо стопы разведены"},     
    ]
  },
  {
    name: "Грудь",
    exercise: [
      {name: "Жим в тренажере лежа"},
      {name: "Жим в тренажере сидя"},
      {name: "Жиим штанги на скамье под наклоном"},
      {name: "Жим штанги на ровной скамье"},
      {name: "Жим на обратной скамье"},
      {name: "Разведение гантелей на наклонной скамье"},      
      {name: "Разведение в тренажере Бабочка"},
      {name: "Отжимания на брусьях"},
      {name: "Отжимания широким хватом"},
    ]
  },
  {
    name: "Пресс",
    exercise: [
      {name: "Подъемы ног лежа"},
      {name: "Воздушный велосипед лежа"},
      {name: "Скручивания лежа на полу"},
      {name: "Боковые наклоны с гантелями"},
      {name: "Боковые подъемы туловищы на полу"},
      {name: "Скручивания Молитва на блоке"},      
      {name: "Обратное сворачивание с поднятыми ногами"},
      {name: "Повороты туловища со штангой стоя"},
      {name: "Подьемы ног на перекладине"},
    ]
  },
  {
    name: "Ягодицы",
    exercise: [
      {name: "Выпады с гантелями"},
      {name: "Присед со штангой"},
      {name: "Жим ногами в тренажере"},
      {name: "Отведение бедра назад"},
      {name: "Ягодичный мост в тренажере"},
      {name: "Ягодичный мост с блином лежа на полу"},      
      {name: "Отведение бедра в сторону"},
      {name: "Становая тяга"},
      {name: "Румынская тяга с узкой постановкой ног"},
    ]
  },
  {
    name: "Ноги",
    exercise: [
      {name: "Заход на скамью с гантелями"},
      {name: "Разгибание ног в тренажере"},
      {name: "Сгибание ног в тренажере"},
      {name: "Сведение ног в тренажере"},
      {name: "Подъемы на носки с гантелями"},
      {name: "Подьем гантелей на бицепс"},      
      {name: "Подтягивания на бицепс"},
      {name: "Подъем на бицепс в тренажере сидя"},
      {name: "Попеременный подъем гантелей на бицепс"},
    ]
  }  
]

interface IApp{
  router: any
}

const App: React.FC<IApp> = ({router}) => {
  const {setMuscleGroup} = useActions();

  useEffect(()=>{
   setMuscleGroup(muscleGroup);
  },[]);
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
