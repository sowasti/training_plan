import { Panel } from "@vkontakte/vkui";
import React from "react";

interface IExerciseProps{
  id: string
}

const ExercisePage: React.FC<IExerciseProps> = ({id})=> {
  return (
    <Panel id={id}>
     
    </Panel>
  );
}

export default ExercisePage;