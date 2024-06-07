import React, { createContext, useContext } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import styles from "./dialog.module.css";

export const DialogContext = createContext<{
  portalRef: HTMLDivElement | null;
}>({ portalRef: null });

export function DialogProvider({ children }: any) {
  const portalRef = React.useRef<HTMLDivElement>(null);

  return (
    <DialogContext.Provider value={{ portalRef: portalRef.current }}>
      {children}
      <div
        ref={portalRef}
        className={styles.DialogPortal}
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          border: "2px solid red",
        }}
      />
    </DialogContext.Provider>
  );
}

export const DialogComponent: React.FC<
  React.PropsWithChildren<{
    dialogTitle: string;
    dialogTrigger: React.ReactNode;
    bottomButton?: React.ReactNode;
  }>
> = ({ children, bottomButton, dialogTrigger, dialogTitle }) => {
  const dialogContext = useContext(DialogContext);
  return (
    <Dialog.Root defaultOpen={false}>
      <Dialog.Trigger asChild>{dialogTrigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={`${styles.DialogOverlay}`} />
        <Dialog.Content className={`${styles.DialogContent}`}>
          <Dialog.Title className={`${styles.DialogTitle}`}>
            {dialogTitle}
          </Dialog.Title>
          {/* <Dialog.Description className={`${styles.DialogDescription}`}>
            
          </Dialog.Description> */}
          <div className={styles.DialogDescription}>{children}</div>
          {bottomButton}
          <Dialog.Close asChild>
            <button className={`${styles.IconButton}`}>&#x2715;</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
