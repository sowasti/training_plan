import React from "react";
import { Button, Div, FixedLayout, Group, List, Panel, PanelHeader, Placeholder } from "@vkontakte/vkui";
import { Icon56ErrorOutline } from '@vkontakte/icons';
import { withRouter } from 'react-router-vkminiapps';
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useActions } from "../hooks/useActions";
import TrainPlanItem from "./TrainPlanItem";
interface IProps {
  id: string
  router: any
}

const MainPage: React.FC<IProps> = ({ id, router }) => {
  const { trainPlan } = useTypeSelector(state => state.app);
  const { setActiveTrain } = useActions();

  const openTrain = (item: Object) => {
    setActiveTrain(item);
    router.toPanel("trainItemPage");
  }
  return (
    <Panel id={id}>
      <PanelHeader>План тренировок</PanelHeader>
      <div style={{ paddingBottom: 60 }}>
        {trainPlan.length === 0
          ? <Placeholder stretched icon={<Icon56ErrorOutline />}>У вас еще нет созданных программ!</Placeholder>
          : <Group>
            <List>
              {trainPlan.map(item =>
                <TrainPlanItem
                  key={item.id}
                  name={item.trainName}
                  days={item.daysWeek}
                  click={() => openTrain(item)}
                />
              )}
            </List>
          </Group>
        }
      </div>
      <FixedLayout vertical="bottom">
        <Div>
          <Button
            stretched
            size="m"
            onClick={() => router.toPanel("addProgramPage")}
          >
            Добавить программу
          </Button>
        </Div>
      </FixedLayout>
    </Panel>

  );
}

export default withRouter(MainPage);