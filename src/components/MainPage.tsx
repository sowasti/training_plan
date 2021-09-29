import React, { ReactNode, useState } from "react";
import {  Button, Div, FixedLayout, Group, List, Panel, PanelHeader, Placeholder } from "@vkontakte/vkui";
import { Icon56ErrorOutline } from '@vkontakte/icons';
import { withRouter } from 'react-router-vkminiapps';
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useActions } from "../hooks/useActions";
import TrainPlanItem from "./TrainPlanItem";
import RemoveAlert from "./RemoveAlert";
interface IMainProps {
  id: string
  router: any
}

const MainPage: React.FC<IMainProps> = ({ id, router }) => {
  const [alert, setAlert] = useState<ReactNode>(null);
  const { trainPlan } = useTypeSelector(state => state.app);
  const { setTrainPlan, setActiveTrain } = useActions();
  
  const removeTrainFromPlan = (id: number)=>{
    setAlert(<RemoveAlert
      text="Вы действительно хотите удалить эту тренировку?"
      onClose={()=>setAlert(null)}
      action={()=> setTrainPlan(trainPlan.filter(item=> item.id !== id))}
    />);   
  }
  const openTrain = (id: number)=>{
    const program = trainPlan.filter(item=> item.id === id); 
    console.log(program)   
    setActiveTrain(program[0]);
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
                  remove={()=>removeTrainFromPlan(item.id)}
                  click={()=>openTrain(item.id)}
                />               
              )}
            </List>
          </Group>
        }
      </div>
      <FixedLayout vertical="bottom">
        <Div>
          <Button stretched size="l" onClick={() => router.toPanel("addProgramPage")}>Добавить программу</Button>
        </Div>
      </FixedLayout>
      {alert}
    </Panel>

  );
}

export default withRouter(MainPage);