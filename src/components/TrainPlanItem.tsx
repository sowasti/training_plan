import React from "react";
import { Avatar, IconButton, SimpleCell } from "@vkontakte/vkui";
import { Icon24DeleteOutline } from "@vkontakte/icons";

interface ITrainPlanItemProps{
  name: string
  days: string
  remove(): void 
}

const TrainPlanItem: React.FC<ITrainPlanItemProps> = ({name, days, remove}) => {
  return (
    <SimpleCell
      before={<Avatar style={{ background: "#2787f5" }} size={32}><p style={{ color: "white" }}>{days}</p></Avatar>}
      after={<IconButton onClick={remove}>< Icon24DeleteOutline /></IconButton>}
    >
      {name}
    </SimpleCell>
  )
}

export default TrainPlanItem