import React from "react";
import { Avatar, Button, Cell, Div, FixedLayout, Group, List, Panel, PanelHeader, Placeholder } from "@vkontakte/vkui";
import { Icon56ErrorOutline } from '@vkontakte/icons';
import { withRouter } from 'react-router-vkminiapps';
interface IMainProps {
  id: string
  router: any
}

const MainPage: React.FC<IMainProps> = ({ id, router }) => {
  return (
    <Panel id={id}>
      <PanelHeader>План тренировок</PanelHeader>
      <div style={{paddingBottom: 60}}>
      {!true
        ? <Placeholder stretched icon={<Icon56ErrorOutline />}>У вас еще нет созданных программ!</Placeholder>
        :  <Group>
        <List>
          <Cell 
            expandable 
            before={<Avatar style={{background: "#2787f5"}} size={32}><p style={{color: "white"}}>Пн</p></Avatar>}
            removable
          >
            Грудь спина
          </Cell>
          <Cell 
            expandable 
            before={<Avatar style={{background: "#ffa000"}} size={32}><p style={{color: "white"}}>Ср</p></Avatar>}
            removable
          >
            Ноги ягодицы
          </Cell>
          <Cell 
            expandable 
            before={<Avatar style={{background: "#4bb34b"}} size={32}><p style={{color: "white"}}>Пт</p></Avatar>}
            removable
          >
              Бицепс трицепс
          </Cell>
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