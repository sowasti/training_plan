import React from "react";
import { Avatar, Button, Div, FixedLayout, Group, IconButton, List, Panel, PanelHeader, Placeholder, SimpleCell } from "@vkontakte/vkui";
import { Icon24DeleteOutline, Icon56ErrorOutline } from '@vkontakte/icons';
import { withRouter } from 'react-router-vkminiapps';
import { useTypeSelector } from "../hooks/useTypeSelector";
interface IMainProps {
  id: string
  router: any
}

const MainPage: React.FC<IMainProps> = ({ id, router }) => {
  const {trainPlan} = useTypeSelector(state=> state.app);

  return (
    <Panel id={id}>
      <PanelHeader>План тренировок</PanelHeader>
      <div style={{paddingBottom: 60}}>
      {trainPlan.length === 0
        ? <Placeholder stretched icon={<Icon56ErrorOutline />}>У вас еще нет созданных программ!</Placeholder>
        :  <Group>
        <List>
          {trainPlan.map(item=>
           <SimpleCell
             before={<Avatar style={{background: "#2787f5"}} size={32}><p style={{color: "white"}}>{item.daysWeek}</p></Avatar>}
             after={<IconButton>< Icon24DeleteOutline /></IconButton>}
          >
            {item.trainName}
          </SimpleCell>
          //   <Cell 
          //   expandable 
          //   before={<Avatar style={{background: "#2787f5"}} size={32}><p style={{color: "white"}}>{item.daysWeek}</p></Avatar>}
          //   removable
          // >
          //   {item.trainName}
          // </Cell>
            )}         
        </List>
      </Group>
      }
      </div>
      <FixedLayout vertical="bottom">
        <Div>
          <Button stretched size="l" onClick={()=> router.toPanel("addProgramPage")}>Добавить программу</Button>
        </Div>
      </FixedLayout>
    </Panel>

  );
}

export default withRouter(MainPage);