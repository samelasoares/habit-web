import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { ReactNode } from "react";

interface ModalProps {
  buttonIcon: ReactNode;
  buttonTitle: string;
  componentReender: ReactNode;
  componentTitle: string;
  buttonStyle: string;
}

export function Modal({
  buttonStyle,
  buttonIcon,
  buttonTitle,
  componentTitle,
  componentReender,
}: ModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger type="button" className={buttonStyle}>
        {buttonIcon}
        {buttonTitle}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />

        <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Dialog.Close className="absolute right-6 top-6 text-zinc-400 rounded-lg hover:text-zinc-200">
            <X size={20} aria-label="Fechar" />
          </Dialog.Close>

          <Dialog.Title className="text-3xl loading-tight font-extrabold">
            {componentTitle}
          </Dialog.Title>

          {componentReender}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
