import React from "react";
import {  CellButton, Group, Header, List, Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";
import { Icon56AccessibilityOutline } from '@vkontakte/icons';
import { withRouter } from "react-router-vkminiapps";

const muscleGroup = [
  {
    name: "Плечи",
    exercise: []
  },
  {
    name: "Руки",
    exercise: []
  },
  {
    name: "Спина",
    exercise: []
  },
  {
    name: "Поясница",
    exercise: []
  },
  {
    name: "Грудь",
    exercise: []
  },
  {
    name: "Пресс",
    exercise: []
  },
  {
    name: "Ягодицы",
    exercise: []
  },
  {
    name: "Ноги",
    exercise: []
  }  
]
interface IMuscleGroupProps {
  id: string
  router: any
}

const MuscleGroupPage: React.FC<IMuscleGroupProps> = ({ id, router }) => {
  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={()=> router.toBack()}/>}>База упражнений</PanelHeader>
      <Group header={<Header mode="secondary">Выберите группу мыщц</Header>}>
        <List>
          {muscleGroup.map(item =>
            <CellButton before={<Icon56AccessibilityOutline width={32} height={32} />}>{item.name}</CellButton>
          )}
        </List>
      </Group>
    </Panel>
  );
}

export default withRouter(MuscleGroupPage);