import { type EditorOptions } from "@tiptap/core";
import { Blockquote } from "@tiptap/extension-blockquote";
import { Bold } from "@tiptap/extension-bold";
import { BulletList } from "@tiptap/extension-bullet-list";
import { Code } from "@tiptap/extension-code";
import { CodeBlock } from "@tiptap/extension-code-block";
import { Color } from "@tiptap/extension-color";
import { Document } from "@tiptap/extension-document";
import { Dropcursor } from "@tiptap/extension-dropcursor";
import { FontFamily } from "@tiptap/extension-font-family";
import { Gapcursor } from "@tiptap/extension-gapcursor";
import { HardBreak } from "@tiptap/extension-hard-break";
import { Highlight } from "@tiptap/extension-highlight";
import { History } from "@tiptap/extension-history";
import { HorizontalRule } from "@tiptap/extension-horizontal-rule";
import { Italic } from "@tiptap/extension-italic";
import { Link } from "@tiptap/extension-link";
import { ListItem } from "@tiptap/extension-list-item";
import { Mention } from "@tiptap/extension-mention";
import { OrderedList } from "@tiptap/extension-ordered-list";
import { Paragraph } from "@tiptap/extension-paragraph";
import { Placeholder } from "@tiptap/extension-placeholder";
import { Strike } from "@tiptap/extension-strike";
import { Subscript } from "@tiptap/extension-subscript";
import { Superscript } from "@tiptap/extension-superscript";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import { TableRow } from "@tiptap/extension-table-row";
import { TaskItem } from "@tiptap/extension-task-item";
import { TaskList } from "@tiptap/extension-task-list";
import { Text } from "@tiptap/extension-text";
import { TextAlign } from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import { Underline } from "@tiptap/extension-underline";
import { useMemo } from "react";
import {
  FontSize,
  HeadingWithAnchor,
  LinkBubbleMenuHandler,
  ResizableImage,
  TableImproved,
} from "mui-tiptap";
import { mentionSuggestionOptions } from "../../components/organisms/MentionSuggestion/MentionSuggestionOptions";
import {
  CustomParagraph,
  CustomDivWrapperExtension,
} from "src/utiils/extension/TipTapExtension";

export type UseExtensionsOptions = {
  placeholder?: string;
};

const CustomLinkExtension = Link.extend({
  inclusive: false,
});

const CustomSubscript = Subscript.extend({
  excludes: "superscript",
});

const CustomSuperscript = Superscript.extend({
  excludes: "subscript",
});

/**
 * Um hook para fornecer um conjunto padrão de extensões úteis para o editor MUI-Tiptap.
 */
export default function useExtensions({
  placeholder,
}: UseExtensionsOptions = {}): EditorOptions["extensions"] {
  return useMemo(() => {
    return [
      TableImproved.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,

      BulletList,
      CodeBlock,
      Document,
      HardBreak,
      ListItem,
      OrderedList,
      Paragraph,
      CustomSubscript,
      CustomSuperscript,
      Text,
      Bold,
      Blockquote,

      Code,
      Italic,
      Underline,
      Strike,
      CustomLinkExtension.configure({
        // autolink é geralmente útil para transformar texto em links se eles
        // parecem ser URLs (como alguém digitar literalmente "example.com"),
        // embora venha com a ressalva de que se você então *remover* o link
        // do texto, e em seguida adicionar um espaço ou nova linha diretamente após o
        // texto, o autolink transformará o texto de volta em um link novamente. Não é ideal,
        // mas provavelmente ainda vale a pena ter o autolink ativado, e é assim que
        // muitas outras ferramentas também se comportam.
        autolink: true,
        linkOnPaste: true,
        openOnClick: false,
      }),
      LinkBubbleMenuHandler,

      // Extensões
      Gapcursor,
      HeadingWithAnchor,
      TextAlign.configure({
        types: ["heading", "paragraph", "image"],
      }),
      TextStyle,
      Color,
      FontFamily,
      FontSize,
      Highlight.configure({ multicolor: true }),
      HorizontalRule,

      ResizableImage,
      // Quando imagens são arrastadas, queremos mostrar o "cursor de queda" para onde elas irão
      // pousar
      Dropcursor,

      TaskList,
      TaskItem.configure({
        nested: true,
      }),

      Mention.configure({
        suggestion: mentionSuggestionOptions,
      }),

      Placeholder.configure({
        placeholder,
      }),

      // Usamos a extensão regular `History` (desfazer/refazer) quando não usamos
      // edição colaborativa
      History,
      CustomParagraph,
      // CustomDivWrapperExtension,
    ];
  }, [placeholder]);
}
