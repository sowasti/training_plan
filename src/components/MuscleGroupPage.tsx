import React from "react";
import { CellButton, Group, Header, List, Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";
import { Icon56AccessibilityOutline } from '@vkontakte/icons';
import { withRouter } from "react-router-vkminiapps";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useActions } from "../hooks/useActions";
interface IMuscleGroupProps {
  id: string
  router: any
}

const MuscleGroupPage: React.FC<IMuscleGroupProps> = ({ id, router }) => {
  const { muscleGroup } = useTypeSelector(state => state.app);
  const { setActiveExercise, setActiveMuscleGroup } = useActions();

  const openMuscleGroup = (name: string) => {    
    switch (name) {
      case "Плечи":
        setActiveMuscleGroup(name);
        setActiveExercise(muscleGroup[0].exercise);
        break;
      case "Руки":
        setActiveMuscleGroup(name);
        setActiveExercise(muscleGroup[1].exercise);
        break;
      case "Спина":
        setActiveMuscleGroup(name);
        setActiveExercise(muscleGroup[2].exercise);
        break;
      case "Поясница":
        setActiveMuscleGroup(name);
        setActiveExercise(muscleGroup[3].exercise);
        break;
      case "Грудь":
        setActiveMuscleGroup(name);
        setActiveExercise(muscleGroup[4].exercise);
        break;
      case "Пресс":
        setActiveMuscleGroup(name);
        setActiveExercise(muscleGroup[5].exercise);
        break;
      case "Ягодицы":
        setActiveMuscleGroup(name);
        setActiveExercise(muscleGroup[6].exercise);
        break;
      case "Ноги":
        setActiveMuscleGroup(name);
        setActiveExercise(muscleGroup[7].exercise);
        break;
      default:
        break;
    }
    router.toPanel("addExercisePage");
  }
  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={() => router.toBack()} />}>База упражнений</PanelHeader>
      <Group header={<Header mode="secondary">Выберите группу мыщц</Header>}>
        <List>
          {muscleGroup.map((item, i) =>
            <CellButton
              key={i}
              before={<Icon56AccessibilityOutline width={32} height={32} />}
              onClick={() => openMuscleGroup(item.name)}
            >
              {item.name}
            </CellButton>
          )}
        </List>
      </Group>
    </Panel>
  );
}

export default withRouter(MuscleGroupPage);