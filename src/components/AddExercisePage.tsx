import React from "react";
import {  Group, Header, List, Panel, PanelHeader, PanelHeaderBack, } from "@vkontakte/vkui";
import { withRouter } from 'react-router-vkminiapps';
import { useActions } from "../hooks/useActions";
import { useTypeSelector } from "../hooks/useTypeSelector";
import ExerciseItem from "./ExerciseItem";
interface IProps {
  id: string
  router: any
}

const AddExercisePage: React.FC<IProps> = ({ id, router }) => {
  const { exercisesInMuscleGroup, activeMuscleGroup } = useTypeSelector(state => state.app);
  const { setActiveExercise} = useActions();

  const openExercise = (item: Object)=>{
    setActiveExercise(item);
    router.toPanel("exercisePage");
  }
  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={() => router.toBack()} />}>{activeMuscleGroup}</PanelHeader>
      <Group style={{ paddingBottom: 60 }} header={<Header mode="secondary">Список упражнений</Header>}>
        <List>
          {exercisesInMuscleGroup.map((item, i) =>
            <ExerciseItem
              key={i}
              name={item.name}
              openExercise={()=> openExercise(item)}
            />
          )}
        </List>
      </Group>
    </Panel>
  );
}

export default withRouter(AddExercisePage);