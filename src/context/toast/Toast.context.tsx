import React, { useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import Fade from '@mui/material/Fade';
import { TransitionProps } from "@mui/material/transitions";

interface ToastContextType {
  showToast: (message: string, severity?: string) => void;
}

export const ToastContext = React.createContext<ToastContextType | undefined>(
  undefined
);

export const ToastStorage = ({ children }: { children: React.ReactNode }) => {
  const [toast, setToast] = useState<{
    open: boolean;
    message: string;
    severity: string;
    Transition: React.ComponentType<
      TransitionProps & { children: React.ReactElement<any, any> }
    >;
  }>({
    open: false,
    message: "",
    severity: "info",
    Transition: Fade,
  });

  const showToast = (message: string, severity = "info") => {
    setToast({ open: true, message, severity, Transition: Fade });
  };

  const handleClose = (_: any, reason?: any) => {
    if (reason === "clickaway") return;
    setToast((prev) => ({ ...prev, open: false }));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={handleClose}
        TransitionComponent={toast.Transition}
        key={toast.Transition.name}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert
          onClose={handleClose}
          severity={toast.severity as any}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
};

export const useToast = () => React.useContext(ToastContext);
