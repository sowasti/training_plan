import React from "react";
import { Avatar, Cell } from "@vkontakte/vkui";
interface ITrainPlanItemProps{
  name: string
  days: string
  remove(): void 
  click(): void
}

const TrainPlanItem: React.FC<ITrainPlanItemProps> = ({name, days, remove, click}) => {
  return (    
    <Cell
      before={<Avatar style={{ background: "#2787f5" }} size={32}><p style={{ color: "white" }}>{days}</p></Avatar>}     
      onClick={click}
    >
      {name}
    </Cell>
  )
}

export default TrainPlanItem