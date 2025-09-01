import { useState, useCallback } from 'react';
import { dialogManager, DialogConfig, DialogState, DialogManager } from '../utils/dialogManager';

export const useDialogManager = () => {
  const [dialogs, setDialogs] = useState<Map<string, DialogState>>(new Map());

  const hideDialog = useCallback((dialogId: string) => {
    dialogManager.hideDialog(dialogId);
  }, []);

  const showConfirmActionDialog = useCallback((
    title: string,
    message: string,
    onConfirm: () => void,
    onCancel?: () => void,
    option?: {
      confirmText?: string;
      cancelText?: string;
      destructive?: boolean;
    }
  ) =>{
    const config = DialogManager.createConfirmationDialog(title, message, onConfirm, onCancel, options);
    showDialog(config);
  }, [showDialog]);

  return {
    dialogs,
    hideDialog,
  };
};
