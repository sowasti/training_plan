import React from "react";
import { Button, Div, FixedLayout, FormItem, FormLayout, Input, Panel, PanelHeader, PanelHeaderBack, Select } from "@vkontakte/vkui";
import { withRouter } from 'react-router-vkminiapps';
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useActions } from "../hooks/useActions";
import { ITrainTtems } from "../types/app";
interface IProps {
  id: string
  router: any
}

const AddProgramPage: React.FC<IProps> = ({ id, router }) => {
  const { daysWeek, trainName, trainPlan } = useTypeSelector(state => state.app);
  const { setTrainName, setDaysWeek, setTrainPlan } = useActions();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    switch (e.target.name) {
      case "trainName":
        setTrainName(e.target.value);
        break;
      case "daysWeek":
        setDaysWeek(e.target.value);
        break;
      default:
        break;
    }
  }
  const addProgram = () => {
    const program: ITrainTtems = {
      id: Date.now(),
      trainName,
      daysWeek,
      exercisesToTrain: []
    };
    setTrainPlan([...trainPlan, program]);
    router.toPanel("mainPage");

  }
  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={() => router.toBack()} />}>Добавление тренировки</PanelHeader>
      <FormLayout style={{ paddingBottom: 60 }}>
        <FormItem top="Введите название тренировки">
          <Input
            type="text"
            name="trainName"
            onChange={handleInput}
            value={trainName}
          />
        </FormItem>
        <FormItem top="Выберите день недели">
          <Select
            name="daysWeek"
            options={[
              { value: "1", label: 'Понедельник' },
              { value: "2", label: 'Вторник' },
              { value: "3", label: 'Среда' },
              { value: "4", label: 'Четверг' },
              { value: "5", label: 'Пятница' },
              { value: "6", label: 'Суббота' },
              { value: "7", label: 'Воскресенье' }
            ]}
            onChange={handleInput}
            value={daysWeek}
          />
        </FormItem>
      </FormLayout>
      <FixedLayout vertical="bottom">
        <Div>
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