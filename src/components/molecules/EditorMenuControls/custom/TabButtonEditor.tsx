import { MenuButton, RichTextEditorRef } from "mui-tiptap";
import { FormatIndentIncrease } from "@mui/icons-material"; // Ícone do Material-UI
import React from "react";

const TabButtonEditor = () => {
  const rteRef = React.useRef<RichTextEditorRef>(null);

  const handleInsertTab = () => {
    if (rteRef.current?.editor) {
      rteRef.current.editor.commands.insertContent("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    }
  };

  return (
    <>
      {/* Outros controles */}
      <MenuButton
        value="add-tab"
        tooltipLabel="Adicionar espaçamento de tabulação"
        size="small"
        onClick={handleInsertTab}
        IconComponent={FormatIndentIncrease} // Usa o ícone do Material-UI
      />
    </>
  );
};

export default TabButtonEditor;