import React from "react";
import { Button, Div, FixedLayout, Group, IconButton, List, Panel, PanelHeader, PanelHeaderBack, SimpleCell } from "@vkontakte/vkui";
import { Icon24AddOutline } from '@vkontakte/icons';
import { withRouter } from 'react-router-vkminiapps';
interface IAddExerciseProps {
  id: string
  router: any
}

const AddExercisePage: React.FC<IAddExerciseProps> = ({ id, router }) => {
  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={()=> router.toBack()}/>}>Ягодицы</PanelHeader>
      <Group style={{ paddingBottom: 60 }}>
      <List>
          <SimpleCell disabled after={<IconButton>< Icon24AddOutline /></IconButton>}>Присед</SimpleCell>
          <SimpleCell disabled after={<IconButton>< Icon24AddOutline /></IconButton>}>Жим</SimpleCell>
          <SimpleCell disabled after={<IconButton>< Icon24AddOutline /></IconButton>}>Выпады</SimpleCell>
          <SimpleCell disabled after={<IconButton>< Icon24AddOutline /></IconButton>}>Отведение бедра</SimpleCell>
        </List>
      </Group>
      <FixedLayout vertical="bottom">
        <Div>
          <Button stretched size="l" onClick={()=> router.toPanel("addProgramPage")}>Вернуться к добавлению программы</Button>
        </Div>
      </FixedLayout>
    </Panel>
  );
}

export default withRouter(AddExercisePage);