import React from "react";
import { Button, Div, FixedLayout, Group, IconButton, List, Panel, PanelHeader, PanelHeaderBack, SimpleCell } from "@vkontakte/vkui";
import { Icon24AddOutline } from '@vkontakte/icons';
import { withRouter } from 'react-router-vkminiapps';
import { useTypeSelector } from "../hooks/useTypeSelector";
interface IAddExerciseProps {
  id: string
  router: any
}

const AddExercisePage: React.FC<IAddExerciseProps> = ({ id, router }) => {
  const {activeExercise} = useTypeSelector(state=> state.app); 
  console.log(activeExercise)
  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={()=> router.toBack()}/>}>fhfggdhgfh</PanelHeader>
      <Group style={{ paddingBottom: 60 }}>
      <List>
        {activeExercise.map((item, i)=>
           <SimpleCell key={i} disabled after={<IconButton>< Icon24AddOutline /></IconButton>}>{item.name}</SimpleCell>
          )}          
        </List>
      </Group>
      <FixedLayout vertical="bottom">
        <Div>
          <Button stretched mode='tertiary' size="m" onClick={()=> router.toPanel("addProgramPage")}>Вернуться к добавлению программы</Button>
        </Div>
      </FixedLayout>
    </Panel>
  );
}

export default withRouter(AddExercisePage);