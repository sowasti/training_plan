import React from "react";
import { Group, Header, List, Panel, PanelHeader, PanelHeaderBack, } from "@vkontakte/vkui";
import { withRouter } from 'react-router-vkminiapps';
import { useTypeSelector } from "../hooks/useTypeSelector";
import ExerciseItem from "./ExerciseItem";
interface IAddExerciseProps {
  id: string
  router: any
}

const AddExercisePage: React.FC<IAddExerciseProps> = ({ id, router }) => {
  const { activeExercise, activeMuscleGroup } = useTypeSelector(state => state.app);
  const openExercise = () => {

  }
  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={() => router.toBack()} />}>{activeMuscleGroup}</PanelHeader>
      <Group style={{ paddingBottom: 60 }} header={<Header mode="secondary">Список упражнений</Header>}>
        <List>
          {activeExercise.map((item, i) =>
            <ExerciseItem
              key={i}
              name={item.name}
              openExercise={openExercise}
            />
          )}
        </List>
      </Group>
    </Panel>
  );
}

export default withRouter(AddExercisePage);