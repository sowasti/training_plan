import React from "react";
import { Alert } from "@vkontakte/vkui";

interface IProps {
  text: string
  onClose(): void
  action(): void
}

const RemoveAlert: React.FC<IProps> = ({ text, onClose, action }) => {
  return (
    <Alert
      actions={[{
        title: 'Отмена',
        autoclose: true,
        mode: 'cancel'
      }, {
        title: 'Удалить',
        autoclose: true,
        mode: 'destructive',
        action: action,
      }]}
      actionsLayout="horizontal"
      onClose={onClose}
      header="Подтвердите действие"
      text={text}
    />
  );
}

export default RemoveAlert;