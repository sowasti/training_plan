import { Panel } from "@vkontakte/vkui";
import React from "react";

interface IMuscleGroupProps{
  id: string
}

const MuscleGroupPage: React.FC<IMuscleGroupProps> = ({id})=> {
  return (
    <Panel id={id}>
     
    </Panel>
  );
}

export default MuscleGroupPage;