import React from "react";
import { connect } from 'react-redux';
import {
  Button, Div, FixedLayout, FormItem, FormLayout, FormLayoutGroup, Group, Header, Input, Panel, PanelHeader, PanelHeaderBack
} from "@vkontakte/vkui";
import { withRouter } from 'react-router-vkminiapps';
import { RootState } from "../store/reducers";

type TProps = RootState['app'] & {
  id: string
  router: any
}
class ExercisePage extends React.Component<TProps>{
  constructor(props: TProps) {
    super(props);
    this.state = {
      sets: ""
    }
  }
  render() {
    const { id, router, activeExercise } = this.props;
    return (
      <Panel id={id}>
        <PanelHeader left={<PanelHeaderBack onClick={() => router.toBack()} />}>{activeExercise.name}</PanelHeader>
        <Group header={<Header mode="secondary">Заполните данные по упражнению</Header>}>
          <FormLayout style={{ paddingBottom: 60 }}>
            <FormItem bottom="Киличество подходов">
              <Input
                type="number"
                name="sets"
              />
            </FormItem>
            <Header mode="tertiary">1 подход</Header>
            <FormLayoutGroup mode="horizontal">
              <FormItem bottom="Введите вес">
                <Input
                  type="number"
                  name="weigth"
                />
              </FormItem>
              <FormItem bottom="Сколько повторений">
                <Input
                  type="number"
                  name="count"
                />
              </FormItem>
            </FormLayoutGroup>
            <Header mode="tertiary">2 подход</Header>
            <FormLayoutGroup mode="horizontal">
              <FormItem bottom="Введите вес">
                <Input
                  type="number"
                  name="weigth"
                />
              </FormItem>
              <FormItem bottom="Сколько повторений">
                <Input
                  type="number"
                  name="count"
                />
              </FormItem>
            </FormLayoutGroup>
            <Header mode="tertiary">3 подход</Header>
            <FormLayoutGroup mode="horizontal">
              <FormItem bottom="Введите вес">
                <Input
                  type="number"
                  name="weigth"
                />
              </FormItem>
              <FormItem bottom="Сколько повторений">
                <Input
                  type="number"
                  name="count"
                />
              </FormItem>
            </FormLayoutGroup>
          </FormLayout>
          <FixedLayout vertical="bottom">
            <Div>
              <Button stretched size="m">Добавить</Button>
            </Div>
          </FixedLayout>
        </Group>
      </Panel>
    );
  }
}

// const ExercisePage: React.FC<IExerciseProps> = ({ id, router }) => {
//   const { activeExercise } = useTypeSelector(state => state.app);
//   return (
//     <Panel id={id}>
//       <PanelHeader left={<PanelHeaderBack onClick={() => router.toBack()} />}>{activeExercise.name}</PanelHeader>
//       <Group header={<Header mode="secondary">Заполните данные по упражнению</Header>}>
//         <FormLayout style={{ paddingBottom: 60 }}>
//           <FormItem bottom="Киличество подходов">
//             <Input type="number" name="sets" />
//           </FormItem>
//           <Header mode="tertiary">1 подход</Header>
//           <FormLayoutGroup mode="horizontal">
//             <FormItem bottom="Введите вес">
//               <Input type="number" name="weigth" />
//             </FormItem>
//             <FormItem bottom="Сколько повторений">
//               <Input type="number" name="count" />
//             </FormItem>
//           </FormLayoutGroup>
//           <Header mode="tertiary">2 подход</Header>
//           <FormLayoutGroup mode="horizontal">
//             <FormItem bottom="Введите вес">
//               <Input type="number" name="weigth" />
//             </FormItem>
//             <FormItem bottom="Сколько повторений">
//               <Input type="number" name="count" />
//             </FormItem>
//           </FormLayoutGroup>
//           <Header mode="tertiary">3 подход</Header>
//           <FormLayoutGroup mode="horizontal">
//             <FormItem bottom="Введите вес">
//               <Input type="number" name="weigth" />
//             </FormItem>
//             <FormItem bottom="Сколько повторений">
//               <Input type="number" name="count" />
//             </FormItem>
//           </FormLayoutGroup>
//         </FormLayout>
//         <FixedLayout vertical="bottom">
//           <Div>
//             <Button stretched size="m">Добавить</Button>
//           </Div>
//         </FixedLayout>
//       </Group>
//     </Panel>
//   );
// }

const mapStateToProps = (state: RootState) => {
  return {
    ...state.app
  }
}

export default connect(mapStateToProps)(withRouter(ExercisePage));