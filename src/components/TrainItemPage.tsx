import React from "react";
import { Button, Div, FixedLayout, Group, IconButton, List, Panel, PanelHeader, PanelHeaderBack, SimpleCell } from "@vkontakte/vkui";
import { Icon24CancelOutline, Icon20Add } from '@vkontakte/icons';
import { Icon16PlayCircleFillAzure } from '@vkontakte/icons';

import { withRouter } from 'react-router-vkminiapps';
import { useTypeSelector } from "../hooks/useTypeSelector";
interface ITrainItemProps {
  id: string
  router: any
}

const TrainItemPage: React.FC<ITrainItemProps> = ({ id, router }) => {
  const {activeTrain} = useTypeSelector(state=> state.app);

  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={()=> router.toBack()}/>}>{`(${activeTrain.daysWeek}) ${activeTrain.trainName}`}</PanelHeader>
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
          <Button before={<Icon20Add />} stretched size="l" onClick={()=> router.toPanel("muscleGroupPage")}>Добавить упражнения</Button>
        </Div>
      </FixedLayout>
    </Panel>
  );
}

export default withRouter(TrainItemPage);