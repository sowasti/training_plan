import React from "react";
import { Button, Div, FixedLayout, FormItem, FormLayout, Group, Header,Input, Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";
import { Icon36Done } from '@vkontakte/icons';
interface IExerciseProps {
  id: string
}

const ExercisePage: React.FC<IExerciseProps> = ({ id }) => {
  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack />}>Скручивания лежа</PanelHeader>
      <Group header={<Header mode="secondary">Заполните данные по упражнению</Header>}>
        <FormLayout style={{paddingBottom: 60}}>
          <FormItem top="Количество подходов">
            <Input type="number" />
          </FormItem>
          <FormItem top="1 подход">
            <div style={{ display: "flex", justifyContent: 'space-between' }}>
              <p>Вес</p>
              <Input type="number" />
              <p>Повторений</p>
              <Input type="number" />
            </div>
          </FormItem>
          <FormItem top="2 подход">
            <div style={{ display: "flex", justifyContent: 'space-between' }}>
              <p>Вес</p>
              <Input type="number" />
              <p>Повторений</p>
              <Input type="number" />
            </div>
          </FormItem>
          <FormItem top="3 подход">
            <div style={{ display: "flex", justifyContent: 'space-between' }}>
              <p>Вес</p>
              <Input type="number" />
              <p>Повторений</p>
              <Input type="number" />
            </div>
          </FormItem>
        </FormLayout>
        <FixedLayout>
          <Div>
            <Button><Icon36Done /></Button>
          </Div>
        </FixedLayout>
      </Group>
    </Panel>
  );
}

export default ExercisePage;