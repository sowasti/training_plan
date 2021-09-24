import { Panel } from "@vkontakte/vkui";
import React from "react";

interface IAddProgramProps{
  id: string
}

const AddProgramPage: React.FC<IAddProgramProps> = ({id})=> {
  return (
    <Panel id={id}>
     
    </Panel>
  );
}

export default AddProgramPage;