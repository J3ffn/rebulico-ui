// import { DefaultNotice, NoticesWithDetails } from "src/utiils/mocks/Notices";

import { DefaultNotice, NoticesWithDetails } from "src/utiils/mocks/Notices";

// const BASE_URL = import.meta.env.VITE_API_URL;

export const getPrincipalsPosts = async () => {
  // try {
  //   const response = await fetch(`${BASE_URL}/principals/notices`);
  //   if (!response.ok) {
  //     return {
  //       error: response.body,
  //     }
  //   }
  //   return response.json();
  // } catch (error: any) {
  //   return {
  //     error: error.message,
  //   }
  // }

  return {
    highlight: {
      id: "63f2b1c2",
      title: "A luta do MLB em João Pessoa está longe de seu fim",
      author: {
        id: "1234",
        name: "Aquila Silva",
        imageSrc:
          "https://i.postimg.cc/V6kZDcFk/Screenshot-2024-10-27-123629.png",
      },
      read_time: 6,
      media: {
        type: "image",
        url: "https://i.ibb.co/4dPnVzp/ttpng.png",
        alt: "Imagem descritiva",
      },
      published_at: "2024-10-21T12:00:00",
      tag: {
        text: "REPORTAGEM",
        color: "#FF8000",
      },
      categorie: "UFPB pelo avesso",
      summary: "Uma breve introdução ou resumo da notícia em destaque.",
    },
    latest_news: [
      {
        id: "63f2b1c3",
        title: "Maternidade e universidade, uma rima que não deu certo",
        initialText:
          "Na universidade experimentamos o primeiro sopro de independência, um ...",
        read_time: 3,
        media: {
          type: "image",
          url: "https://i.ibb.co/CvmHtzh/maternidade-e-universidade.jpg",
          alt: "Descrição da imagem",
        },
        published_at: "2024-10-20T14:00:00",
        tag: {
          text: "REPORTAGEM",
          color: "#FF8000",
        },
        categorie: "UFPB pelo avesso",
      },
      {
        id: "63f2b1c4",
        title:
          "Resistência e conquista: Os desafios dos povos indígenas na universidade",
        initialText:
          "Na simbologia das formas, o círculo representa para muitos estudiosos ...",
        read_time: 5,
        media: {
          type: "image",
          url: "https://i.ibb.co/q16MkMs/OSDESAFIOS-DOSPOVOSIND-GENAS-NAUNIVERSIDADE.png",
          alt: "Descrição da imagem",
        },
        published_at: "2024-10-20T10:00:00",
        tag: {
          text: "REPORTAGEM",
          color: "#FF8000",
        },
        categorie: "UFPB pelo avesso",
      },
      {
        id: "63f2b1c5",
        title: "O quanto você gasta para poder continuar a sonhar?",
        initialText:
          "Imagine só, na sociedade em que vivemos, até a mais “Valente” das princesas ...",
        read_time: 5,
        media: {
          type: "image",
          url: "https://i.ibb.co/yWFrk23/Oquanto-voc-gasta-para-poder-continuar-a-sonhar.png",
          alt: "Descrição da imagem",
        },
        published_at: "2024-10-20T10:00:00",
        tag: {
          text: "REPORTAGEM",
          color: "#FF8000",
        },
        categorie: "UFPB pelo avesso",
      },
    ],
    recent_updates: [
      {
        id: "63f2b1c7",
        title: "Indignação contra o reitor cresce nos corredores do CCTA",
        author: {
          id: "7890",
          name: "Autor Exemplo 3",
        },
        read_time: 4,
        media: {
          type: "image",
          url: "https://i.ibb.co/VTmMww9/as12.png",
          alt: "Imagem ilustrativa",
        },
        published_at: "2024-10-21T08:30:00",
        tag: {
          text: "RAPIDINHAS",
          color: "#F6D517",
        },
        categorie: "Notícia",
      },
      {
        id: "63f2b1c8",
        title:
          "Educando sobre maconha: Associações e comunidade acadêmica lutam pela conscientização ...",
        read_time: 5,
        media: {
          type: "image",
          url: "https://i.ibb.co/qNtDYGT/materia-maconha.jpg",
          alt: "Imagem representativa",
        },
        published_at: "2024-10-21T09:00:00",
        tag: {
          text: "Culturas midiáticas",
          color: "#931981",
        },
        categorie: "Resenha crítica",
      },
    ],
    latest_posts: [
      {
        id: "63f2b1c6",
        title: "Entre idas e vindas, um pêndulo de cristal que não brilha",
        author: {
          id: "4567",
          name: "Aquila Silva",
        },
        read_time: 3,
        media: {
          type: "image",
          url: "https://s2-casaejardim.glbimg.com/A3rDbjvesQfoOrGqrB-Gtzqc-2k=/0x0:1400x2100/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_a0b7e59562ef42049f4e191fe476fe7d/internal_photos/bs/2023/R/y/A96FwoTDOWV2DuleZHeQ/radiestesia-pendulo-reequilibrio-de-energias.jpg",
          alt: "Descrição da imagem",
        },
        published_at: "2024-10-20T18:00:00",
        tag: "Notícia",
      },
      {
        id: "63f2b1c6",
        title:
          "Marcha da Consciência Negra celebra avanços e critica a violência",
        author: {
          id: "5678",
          name: "José Soares",
        },
        read_time: 3,
        media: {
          type: "image",
          url: "https://opara.nyc3.cdn.digitaloceanspaces.com/ponte/uploads/2024/11/20234153/WhatsApp-Image-2024-11-20-at-16.46.04-852x500.webp",
          alt: "Descrição da imagem",
        },
        published_at: "2024-10-20T17:00:00",
        tag: "Notícia",
      },
    ],
    stories: [
      {
        name: "Conheça mais sobre o projeto",
        imageSrc: "https://i.ibb.co/5W06hPP/Capa-teste.png",
      },
      {
        name: "Garimpo Ilegal",
        imageSrc: "https://i.ibb.co/4PsF2px/Garimpo.png",
      },
      {
        name: "A luta do MLB em João Pessoa",
        imageSrc:
          "https://www.adorama.com/alc/wp-content/uploads/2024/08/dibakar-roy-9iFvm_KQTo4-unsplash-825x465.jpg",
      },
    ],
  };
};

export const getNotice = async (idPost: string) => {
  // try {
  //   const response = await fetch(`${BASE_URL}/notice/${idPost}`)
  //   if (!response.ok) {
  //     return {
  //       error: response.body
  //     }
  //   }
  //   return response.json();
  // } catch (error: any) {
  //   return {
  //     error: error.message,
  //   }
  // }
  const postFinded = NoticesWithDetails[idPost];

  if (!postFinded) {
    return DefaultNotice;
  }

  return postFinded;
};

export const createPost = async (postData: object) => {
  // ... Ainda para fazer
  return postData;
};

// function buildReturn(data, error = null) {
//   return {
//     haveError: error && true,
//     data: data
//   }
// }
