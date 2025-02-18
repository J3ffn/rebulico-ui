import { useTheme } from "@mui/material";
import {
  MenuButton,
  MenuButtonAddTable,
  MenuButtonBlockquote,
  MenuButtonBold,
  MenuButtonBulletedList,
  MenuButtonCode,
  MenuButtonCodeBlock,
  MenuButtonEditLink,
  MenuButtonHighlightColor,
  MenuButtonHorizontalRule,
  MenuButtonImageUpload,
  MenuButtonIndent,
  MenuButtonItalic,
  MenuButtonOrderedList,
  MenuButtonRedo,
  MenuButtonRemoveFormatting,
  MenuButtonStrikethrough,
  MenuButtonSubscript,
  MenuButtonSuperscript,
  MenuButtonTaskList,
  MenuButtonTextColor,
  MenuButtonUnderline,
  MenuButtonUndo,
  MenuButtonUnindent,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectFontFamily,
  MenuSelectFontSize,
  MenuSelectHeading,
  MenuSelectTextAlign,
  isTouchDevice,
} from "mui-tiptap";
import { FormatIndentIncrease } from "@mui/icons-material";

export default function EditorMenuControls({
  handleNewImageFiles,
}: {
  handleNewImageFiles: any;
}) {
  const tema = useTheme();

  return (
    <MenuControlsContainer>
      <MenuSelectFontFamily
        options={[
          { label: "Comic Sans", value: "Comic Sans MS, Comic Sans" },
          { label: "Cursivo", value: "cursive" },
          { label: "Monoespaçado", value: "monospace" },
          { label: "Serif", value: "serif" },
        ]}
      />

      <MenuDivider />

      <MenuSelectHeading />

      <MenuDivider />

      <MenuSelectFontSize />

      <MenuDivider />

      <MenuButtonBold />
      <MenuButtonItalic />
      <MenuButtonUnderline />
      <MenuButtonStrikethrough />
      <MenuButtonSubscript />
      <MenuButtonSuperscript />

      <MenuDivider />

      <MenuButtonTextColor
        defaultTextColor={tema.palette.text.primary}
        swatchColors={[
          { value: "#000000", label: "Preto" },
          { value: "#ffffff", label: "Branco" },
          { value: "#888888", label: "Cinza" },
          { value: "#ff0000", label: "Vermelho" },
          { value: "#ff9900", label: "Laranja" },
          { value: "#ffff00", label: "Amarelo" },
          { value: "#00d000", label: "Verde" },
          { value: "#0000ff", label: "Azul" },
        ]}
      />
      <MenuButtonHighlightColor
        swatchColors={[
          { value: "#595959", label: "Cinza escuro" },
          { value: "#dddddd", label: "Cinza claro" },
          { value: "#ffa6a6", label: "Vermelho claro" },
          { value: "#ffd699", label: "Laranja claro" },
          // Amarelo puro combina com o padrão de `mark` do navegador, como ao usar Cmd+Shift+H
          { value: "#ffff00", label: "Amarelo" },
          { value: "#99cc99", label: "Verde claro" },
          { value: "#90c6ff", label: "Azul claro" },
          { value: "#8085e9", label: "Roxo claro" },
        ]}
      />

      <MenuDivider />

      <MenuButtonEditLink />

      <MenuDivider />

      <MenuSelectTextAlign />

      <MenuDivider />

      <MenuButtonOrderedList />
      <MenuButtonBulletedList />
      <MenuButtonTaskList />
      {isTouchDevice() && (
        <>
          <MenuButtonIndent />

          <MenuButtonUnindent />
        </>
      )}

      <MenuDivider />

      <MenuButtonBlockquote />

      <MenuDivider />

      <MenuButtonCode />
      <MenuButtonCodeBlock />

      <MenuDivider />

      <MenuButtonImageUpload onUploadFiles={handleNewImageFiles} />

      <MenuDivider />

      <MenuButtonHorizontalRule />
      <MenuButtonAddTable />

      <MenuDivider />

      <MenuButtonRemoveFormatting />

      <MenuDivider />

      <MenuButtonUndo />
      <MenuButtonRedo />
    </MenuControlsContainer>
  );
}
