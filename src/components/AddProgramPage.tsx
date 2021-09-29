import React from "react";
import { Button, Cell, Div, FixedLayout, FormItem, FormLayout, Group, Header, Input, List, Panel, PanelHeader, PanelHeaderBack, Select } from "@vkontakte/vkui";
import { Icon20Add } from '@vkontakte/icons';
import { withRouter } from 'react-router-vkminiapps';
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useActions } from "../hooks/useActions";
interface IAddProgramProps {
  id: string
  router: any
}

const AddProgramPage: React.FC<IAddProgramProps> = ({ id, router }) => {
  const { daysWeek, trainName, trainPlan } = useTypeSelector(state => state.app);
  const { setTrainName, setDaysWeek, setTrainPlan } = useActions();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    switch (e.target.name) {
      case "trainName":
        setTrainName(e.target.value);
        break;
      case "daysWeek":
        console.log(daysWeek)
        console.log(e.target.name)
        console.log(e.target.value)
        setDaysWeek(e.target.value);
        break;
      default:
        break;
    }
  }
  const addProgram = ()=>{
    const program = {
      id: Date.now(),
      trainName,
      daysWeek,
      exercisesTrain: [] 
    };
    setTrainPlan([...trainPlan, program]);
    router.toPanel("mainPage");

  }
  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={() => router.toBack()} />}>Добавление тренировки</PanelHeader>
      <FormLayout>
        <FormItem top="Введите название тренировки">
          <Input type="text" name="trainName" onChange={handleInput} value={trainName}/>
        </FormItem>
        <FormItem top="Выберите день недели">
          <Select
            value={daysWeek}
            name="daysWeek"
            options={[
              { value: "Пн", label: 'Понедельник' },
              { value: "Вт", label: 'Вторник' },
              { value: "Ср", label: 'Среда' },
              { value: "Чт", label: 'Четверг' },
              { value: "Пт", label: 'Пятница' },
              { value: "Сб", label: 'Суббота' },
              { value: "Вс", label: 'Воскресенье' }
            ]}
            onChange={handleInput}
          />
        </FormItem>
      </FormLayout>
      {!true
        ? <Group style={{ paddingBottom: 60 }} header={<Header mode="secondary">Добавленные упражнения</Header>}>
          <List>
            <Cell removable>Присед</Cell>
            <Cell removable>Жим</Cell>
            <Cell removable>Выпады</Cell>
          </List>
        </Group>
        : null
      }
      <FixedLayout vertical="bottom">
        <Div>
          <div style={{ marginBottom: 10 }}>
            <Button
              mode="secondary"
              stretched
              size="m"
              before={<Icon20Add />}
              onClick={() => router.toPanel("muscleGroupPage")}
            >
              Добавить упражнения
            </Button>
          </div>
          <Button
            stretched
            size="m"
            onClick={addProgram}
          >
            Сохранить программу
          </Button>
        </Div>
      </FixedLayout>
    </Panel>
  );
}

export default withRouter(AddProgramPage);