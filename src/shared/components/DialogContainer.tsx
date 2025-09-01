import { useDialogManager } from '../hooks/useDialogManager';
import ConfirmationDialog from './ConfirmationDIalog';

export const DialogContainer: React.FC = () => {
  const { dialogs, hideDialog } = useDialogManager();

  return (
    <>
      {Array.from(dialogs.entries()).map(([dialogId, dialogState]) => {
        if (!dialogState.visible || !dialogState.config) {
          return null;
        }
        const { config } = dialogState;
        return <ConfirmationDialog title={config.title} />;
      })}
    </>
  );
};
