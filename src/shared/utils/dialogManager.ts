import { logger } from './logger';

export interface DialogConfig {
  id: string;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  confirmButtonColor?: string;
  cancelButtonColor?: string;
  destructive?: boolean;
  onConfirm: () => void;
  onCancel?: () => void;
}

export interface DialogState {
  visible: boolean;
  config: DialogConfig | null;
}

class DialogManager {
  private dialogs: Map<string, DialogState> = new Map();
  private listeners: Set<(dialogs: Map<string, DialogState>) => void> =
    new Set();

  hideDialog(dialogId: string): void {
    logger.info(`[DialogManager] Hiding dialog: ${dialogId}`);

    const dialog = this.dialogs.get(dialogId);
    if (dialog) {
      dialog.visible = false;
      this.notifyListeners();
    }
  }
  
  private notifyListeners(): void {
    this.listeners.forEach(listener => {
      listener(new Map(this.dialogs));
    });
  }
}

export const dialogManager = new DialogManager();
export default dialogManager;
