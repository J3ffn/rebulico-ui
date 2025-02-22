import { Extension, Node } from "@tiptap/core";

const CustomParagraph = Node.create({
  name: "customParagraph",

  group: "block",
  content: "inline*",

  parseHTML() {
    return [{ tag: "p" }];
  },

  renderHTML({ node }) {
    if (node.content.size === 0) {
      return ["p", {}, 0];
    }
    return ["p", {}, 0];
  },

  // addKeyboardShortcuts() {
  //   return {
  //     Enter: ({ editor }) => {
  //       console.log(editor.$doc.content);

  //       editor.commands.insertContent("<p><br>");
  //       // editor.commands.insertContent("<br>");
  //       return true;
  //     },
  //   };
  // },
});

// const TabExtension = Extension.create({
//   name: "tabHandler",

//   addKeyboardShortcuts() {
//     return {
//       Tab: () => {
//         this.editor.commands.insertContent(
//           "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
//         );
//         return true; // Evita o comportamento padrão do navegador
//       },
//     };
//   },
// });

const CustomDivWrapperExtension = Extension.create({
  name: "customDivWrapper",

  addKeyboardShortcuts() {
    return {
      Enter: ({ editor }) => {
        // Quando "Enter" for pressionado, encapsula o conteúdo em <div>
        const htmlContent = editor.getHTML();
        const wrappedContent = `<div>${htmlContent.replace(
          /<\/?br\/?>/g,
          ""
        )}</div>`;
        editor.commands.setContent(wrappedContent);
        return true;
      },
    };
  },

  addStorage() {
    return {
      // Customizações adicionais para manipular elementos
      transformPtoDiv: (content: string) => {
        return `<div>${content.replace(
          /<p>(.*?)<\/p>/g,
          "<p>$1</p><br>"
        )}</div>`;
      },
    };
  },
});

export { CustomParagraph, CustomDivWrapperExtension };
