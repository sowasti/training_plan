import React from "react";
import { Button, Cell, Div, FixedLayout, FormItem, FormLayout, Group, Header, Input, List, Panel, PanelHeader, PanelHeaderBack, Select } from "@vkontakte/vkui";
import { Icon20Add } from '@vkontakte/icons';
import { withRouter } from 'react-router-vkminiapps';
interface IAddProgramProps {
  id: string
  router: any
}

const AddProgramPage: React.FC<IAddProgramProps> = ({ id, router }) => {
  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={()=> router.toBack()}/>}>Добавление тренировки</PanelHeader>
      <FormLayout>
        <FormItem top="Введите название тренировки">
          <Input type="text" />
        </FormItem>
        <FormItem top="Выберите день недели">
          <Select
            value="monday"
            name="dayOfWeek"
            options={[
              { value: "monday", label: 'Понедельник' },
              { value: "tuesday", label: 'Вторник' },
              { value: "wednesday", label: 'Среда' },
              { value: "thursday", label: 'Четверг' },
              { value: "friday", label: 'Пятница' },
              { value: "saturday", label: 'Суббота' },
              { value: "sunday", label: 'Воскресенье' }
            ]}
          // onChange={handleInput}
          />
        </FormItem>
      </FormLayout>
      <Group style={{ paddingBottom: 60 }} header={<Header mode="secondary">Добавленные упражнения</Header>}>
        <List>
          <Cell removable>Присед</Cell>
          <Cell removable>Жим</Cell>
          <Cell removable>Выпады</Cell>
        </List>
      </Group>
      <FixedLayout vertical="bottom">
        <Div>
          <div style={{ marginBottom: 10 }}>
            <Button
              mode="secondary"
              stretched
              size="m"
              before={<Icon20Add />}
              onClick={()=> router.toPanel("muscleGroupPage")}
            >
              Добавить упражнения
            </Button>
          </div>
          <Button
            stretched
            size="m"
          >
            Сохранить программу
          </Button>
        </Div>
      </FixedLayout>
    </Panel>
  );
}

export default withRouter(AddProgramPage);