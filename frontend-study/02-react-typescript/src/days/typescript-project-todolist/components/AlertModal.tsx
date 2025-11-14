import { AlertModalProps } from '../types/props';

export default function AlertModal({ message }: AlertModalProps) {
  return (
    <div className="absolute top-5 left-[50%] translate-x-[50%] px-5 py-2.5 bg-gray-400 text-gray-100 rounded-md">
      {message}
    </div>
  );
}
