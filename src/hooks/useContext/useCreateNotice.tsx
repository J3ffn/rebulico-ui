import React from "react";
import { CreateNoticeContext } from "src/context/createNotice/CreateNotice.context";

// Hook para usar o contexto
export const useCreateNotice = () => {
  const context = React.useContext(CreateNoticeContext);
  if (context === undefined) {
    throw new Error(
      "useCreateNotice must be used within a CreateNoticeStorage"
    );
  }
  return context;
};
