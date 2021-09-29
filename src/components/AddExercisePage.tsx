import React from "react";
import { Button, Div, FixedLayout, Group, IconButton, List, Panel, PanelHeader, PanelHeaderBack, SimpleCell } from "@vkontakte/vkui";
import { Icon24AddOutline } from '@vkontakte/icons';
import { withRouter } from 'react-router-vkminiapps';
import { useTypeSelector } from "../hooks/useTypeSelector";
interface IAddExerciseProps {
  id: string
  router: any
}

const AddExercisePage: React.FC<IAddExerciseProps> = ({ id, router }) => {
  const {exercise} = useTypeSelector(state=> state.app);
  console.log(exercise);
  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={()=> router.toBack()}/>}>hjhjhlljl</PanelHeader>
      <Group style={{ paddingBottom: 60 }}>
      <List>
        {exercise.map((item, i)=>
           <SimpleCell key={i} disabled after={<IconButton>< Icon24AddOutline /></IconButton>}>{item.name}</SimpleCell>
          )}
          {/* <SimpleCell disabled after={<IconButton>< Icon24AddOutline /></IconButton>}>Присед</SimpleCell>
          <SimpleCell disabled after={<IconButton>< Icon24AddOutline /></IconButton>}>Жим</SimpleCell>
          <SimpleCell disabled after={<IconButton>< Icon24AddOutline /></IconButton>}>Выпады</SimpleCell>
          <SimpleCell disabled after={<IconButton>< Icon24AddOutline /></IconButton>}>Отведение бедра</SimpleCell> */}
        </List>
      </Group>
      <FixedLayout vertical="bottom">
        <Div>
          <Button stretched mode='tertiary' size="m" onClick={()=> router.toPanel("addProgramPage")}>Вернуться к добавлению программы</Button>
        </Div>
      </FixedLayout>
    </Panel>
  );
}

export default withRouter(AddExercisePage);