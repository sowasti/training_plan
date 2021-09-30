import React, { ReactNode, useState } from "react";
import { Button, Div, FixedLayout, Group, Placeholder, List, Panel, PanelHeader, PanelHeaderBack, } from "@vkontakte/vkui";
import { Icon56ErrorOutline, Icon20Add } from '@vkontakte/icons';
import { Icon16PlayCircleFillAzure } from '@vkontakte/icons';
import { Icon20DeleteOutline } from '@vkontakte/icons';
import { withRouter } from 'react-router-vkminiapps';
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useActions } from "../hooks/useActions";
import RemoveAlert from "./RemoveAlert";
interface ITrainItemProps {
  id: string
  router: any
}

const TrainItemPage: React.FC<ITrainItemProps> = ({ id, router }) => {
  const [alert, setAlert] = useState<ReactNode | null>(null);
  const { activeTrain, trainPlan } = useTypeSelector(state => state.app);
  const { setTrainPlan } = useActions();

  const removeTrainFromPlan = () => {
    setAlert(<RemoveAlert
      text="Вы действительно хотите удалить эту тренировку?"
      onClose={() => setAlert(null)}
      action={() => {
        setTrainPlan(trainPlan.filter(item => item.id !== activeTrain.id));
        router.toPanel("mainPage");
      }}
    />);
  }
  return (
    <Panel id={id}>
      <PanelHeader
        left={<PanelHeaderBack onClick={() => router.toBack()} />}
      >
        {`(${activeTrain.daysWeek}) ${activeTrain.trainName}`}
      </PanelHeader>
      <Group style={{ paddingBottom: 60 }}>
        {activeTrain.exercisesToTrain.length === 0
          ? <Placeholder icon={<Icon56ErrorOutline width={50} height={50} />}>Для начала добавьте упражнения!</Placeholder>
          : <>
            <Div>
              <Button
                before={<Icon16PlayCircleFillAzure />}
                stretched
                size="m"
                mode="tertiary"
              >
                Начать тренировку
              </Button>
            </Div>
            <List>

            </List>
          </>
        }
      </Group>
      <FixedLayout vertical="bottom">
        <Div>
          <Button
            before={<Icon20Add />}
            stretched
            size="m"
            onClick={() => router.toPanel("muscleGroupPage")}
          >
            Добавить упражнения
          </Button>
          <div style={{ marginTop: 10 }}>
            <Button
              before={<Icon20DeleteOutline />}
              stretched
              size="m"
              mode="secondary"
              onClick={removeTrainFromPlan}
            >
              Удалить тренировку
            </Button>
          </div>
        </Div>
      </FixedLayout>
      {alert}
    </Panel>
  );
}

export default withRouter(TrainItemPage);