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
  const { setActiveExercise } = useActions();

  const openMuscleGroup = (name: string) => {    
    switch (name) {
      case "Плечи":
        setActiveExercise(muscleGroup[0].exercise);
        break;
      case "Руки":
        setActiveExercise(muscleGroup[1].exercise);
        break;
      case "Спина":
        setActiveExercise(muscleGroup[2].exercise);
        break;
      case "Поясница":
        setActiveExercise(muscleGroup[3].exercise);
        break;
      case "Грудь":
        setActiveExercise(muscleGroup[4].exercise);
        break;
      case "Пресс":
        setActiveExercise(muscleGroup[5].exercise);
        break;
      case "Ягодицы":
        setActiveExercise(muscleGroup[6].exercise);
        break;
      case "Ноги":
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