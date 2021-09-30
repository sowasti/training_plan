import React from "react";
import { Avatar, Cell, Group, Header, List, Panel, PanelHeader, PanelHeaderBack, } from "@vkontakte/vkui";
import { Icon20ChevronRightOutline } from '@vkontakte/icons';
import { withRouter } from 'react-router-vkminiapps';
import { useTypeSelector } from "../hooks/useTypeSelector";
interface IAddExerciseProps {
  id: string
  router: any
}

const AddExercisePage: React.FC<IAddExerciseProps> = ({ id, router }) => {
  const { activeExercise, activeMuscleGroup } = useTypeSelector(state => state.app);

  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={() => router.toBack()} />}>{activeMuscleGroup}</PanelHeader>
      <Group style={{ paddingBottom: 60 }} header={<Header mode="secondary">Список упражнений</Header>}>
        <List>
          {activeExercise.map((item, i) =>
            <Cell
              key={i}
              before={<Avatar style={{ background: "#3f8ae0" }} size={10} />}
              after={<Icon20ChevronRightOutline />}
            >
              {item.name}
            </Cell>
          )}
        </List>
      </Group>
    </Panel>
  );
}

export default withRouter(AddExercisePage);