import { Panel } from "@vkontakte/vkui";
import React from "react";

interface IMainProps{
  id: string
}

const MainPage: React.FC<IMainProps> = ({id}) => {
  return (
   <Panel id={id}>
     
   </Panel>

  );
}

export default MainPage;