import { Panel } from "@vkontakte/vkui";
import React from "react";

interface ITrainItemProps{
  id: string
}

const TrainItemPage: React.FC<ITrainItemProps> = ({id})=> {
  return (
    <Panel id={id}>
     
    </Panel>
  );
}

export default TrainItemPage;