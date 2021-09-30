import React from "react";
import { Avatar, Cell } from "@vkontakte/vkui";
interface IProps {
  name: string
  days: string
  click(): void
}

const TrainPlanItem: React.FC<IProps> = ({ name, days, click }) => {
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