import React from "react";
import { Button, Div, FixedLayout, Group, Placeholder, List, Panel, PanelHeader, PanelHeaderBack} from "@vkontakte/vkui";
import { Icon56ErrorOutline, Icon20Add } from '@vkontakte/icons';
import { Icon16PlayCircleFillAzure } from '@vkontakte/icons';

import { withRouter } from 'react-router-vkminiapps';
import { useTypeSelector } from "../hooks/useTypeSelector";
interface ITrainItemProps {
  id: string
  router: any
}

const TrainItemPage: React.FC<ITrainItemProps> = ({ id, router }) => {
  const { activeTrain} = useTypeSelector(state => state.app);
  
  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={() => router.toBack()} />}>{`(${activeTrain.daysWeek}) ${activeTrain.trainName}`}</PanelHeader>
      <Group style={{ paddingBottom: 60 }}>
        {activeTrain.exercisesTrain.length === 0
          ? <Placeholder stretched icon={<Icon56ErrorOutline />}>Нет добавленных упражнений для начала тренировки!</Placeholder>
          : <>
            <Div>
              <Button stretched mode="tertiary" size="m" before={<Icon16PlayCircleFillAzure />}>Начать тренировку</Button>
            </Div>
            <List>
              {/* {exercisesTrain.map(item =>
                <CellButton>{item.nameExercise}</CellButton>
              )} */}
            </List>
          </>
        }
      </Group>
      <FixedLayout vertical="bottom">
        <Div>
          <Button before={<Icon20Add />} stretched size="l" onClick={() => router.toPanel("muscleGroupPage")}>Добавить упражнения</Button>
        </Div>
      </FixedLayout>
    </Panel>
  );
}

export default withRouter(TrainItemPage);