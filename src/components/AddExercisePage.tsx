import { Panel } from "@vkontakte/vkui";
import React from "react";

interface IAddExerciseProps{
  id: string
}

const AddExercisePage: React.FC<IAddExerciseProps> = ({id})=> {
  return (
    <Panel id={id}>
     
    </Panel>
  );
}

export default AddExercisePage;