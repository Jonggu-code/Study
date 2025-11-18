export interface ConfirmModalProps {
  text: string;
  onConfirm: () => void;
  onCancel: () => void;
  showAlert: (msg: string) => void;
}
