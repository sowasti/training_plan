import React from "react";
import { Button, Div, FixedLayout, Group, IconButton, List, Panel, PanelHeader, PanelHeaderBack, SimpleCell } from "@vkontakte/vkui";
import { Icon24CancelOutline, Icon20Add, Icon24Play } from '@vkontakte/icons';
import { Icon16PlayCircleFillAzure } from '@vkontakte/icons';
import { Icon24DeleteOutlineAndroid } from '@vkontakte/icons';
interface ITrainItemProps {
  id: string
}

const TrainItemPage: React.FC<ITrainItemProps> = ({ id }) => {
  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack />}>Пн/Спина грудь</PanelHeader>
      <Group style={{ paddingBottom: 60 }}>
        <Div>
          <Button stretched mode="tertiary" size="m" before={<Icon16PlayCircleFillAzure/>}>Начать тренировку</Button>
        </Div>
        <List>
          <SimpleCell after={<IconButton>< Icon24CancelOutline /></IconButton>}>Присед</SimpleCell>
          <SimpleCell after={<IconButton>< Icon24CancelOutline /></IconButton>}>Жим</SimpleCell>
          <SimpleCell after={<IconButton>< Icon24CancelOutline /></IconButton>}>Скручивания</SimpleCell>
          <SimpleCell after={<IconButton>< Icon24CancelOutline /></IconButton>}>Отжимания</SimpleCell>
        </List>
      </Group>
      <FixedLayout vertical="bottom">
        <Div>
          <Button before={<Icon20Add />} stretched size="l">Добавить упражнения</Button>
        </Div>
      </FixedLayout>
    </Panel>
  );
}

export default TrainItemPage;