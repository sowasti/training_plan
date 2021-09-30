import React from "react";
import { Avatar, Cell } from "@vkontakte/vkui";
import { Icon20ChevronRightOutline } from '@vkontakte/icons';
interface IProps {
  name: string
  openExercise(): void
}

const ExerciseItem: React.FC<IProps> = ({ name, openExercise }) => {
  return (
    <Cell
      before={<Avatar style={{ background: "#3f8ae0" }} size={10} />}
      after={<Icon20ChevronRightOutline />}
      onClick={openExercise}
    >
      {name}
    </Cell>
  );
}

export default ExerciseItem