import React from "react";
import { Button, Div, FixedLayout, Group, IconButton, List, Panel, PanelHeader, PanelHeaderBack, SimpleCell } from "@vkontakte/vkui";
import { Icon24AddOutline } from '@vkontakte/icons';
interface IAddExerciseProps {
  id: string
}

const AddExercisePage: React.FC<IAddExerciseProps> = ({ id }) => {
  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack />}>Ягодицы</PanelHeader>
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
          <Button stretched size="l">Вернуться к добавлению программы</Button>
        </Div>
      </FixedLayout>
    </Panel>
  );
}

export default AddExercisePage;