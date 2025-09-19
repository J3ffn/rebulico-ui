// import { DefaultNotice, NoticesWithDetails } from "src/utiils/mocks/Notices";

import { DefaultNotice, NoticesWithDetails } from "src/utiils/mocks/Notices";

// import { DefaultNotice, NoticesWithDetails } from "src/utiils/mocks/Notices";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getPrincipalsPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/principals/posts`);
    if (!response.ok) {
      return {
        error: response.body,
      }
    }
    return response.json();
  } catch (error: any) {
    return {
      error: error.message,
    }
  }

  // return {
  //   highlight: {
  //     id: "63f2b1c0",
  //     title: "Dom Quixote de la Alhandra e seus moinhos de vento",
  //     author: {
  //       id: "1234",
  //       name: "Cleyton Ferreira",
  //       imageSrc:
  //         "https://i.postimg.cc/V6kZDcFk/Screenshot-2024-10-27-123629.png",
  //     },
  //     read_time: 6,
  //     media: {
  //       type: "image",
  //       url: "https://i.ibb.co/SBzvVbP/Whats-App-Image-2024-11-26-at-12-25-08-ca8eb226.jpg",
  //       alt: "Imagem descritiva",
  //     },
  //     published_at: "2024-10-21T12:00:00",
  //     tag: {
  //       text: "REPORTAGEM",
  //       color: "#FF8000",
  //     },
  //     categorie: "UFPB pelo avesso",
  //     summary: "Uma breve introdução ou resumo da notícia em destaque.",
  //   },
  //   latest_news: [
  //     {
  //       id: "63f2b1c3",
  //       title: "Maternidade e Universidade, uma rima que não deu certo",
  //       initialText:
  //         "Na universidade experimentamos o primeiro sopro de independência, um ...",
  //       read_time: 3,
  //       media: {
  //         type: "image",
  //         url: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/A411/production/_126210024_gettyimages-482136885.jpg.webp",
  //         alt: "Descrição da imagem",
  //       },
  //       published_at: "2024-10-20T14:00:00",
  //       tag: {
  //         text: "REPORTAGEM",
  //         color: "#FF8000",
  //       },
  //       categorie: "UFPB pelo avesso",
  //     },
  //     {
  //       id: "63f2b1c4",
  //       title:
  //         "Resistência e conquista: os desafios dos povos indígenas na UFPB",
  //       initialText:
  //         "Na simbologia das formas, o círculo representa para muitos estudiosos ...",
  //       read_time: 5,
  //       media: {
  //         type: "image",
  //         url: "https://i.ibb.co/q16MkMs/OSDESAFIOS-DOSPOVOSIND-GENAS-NAUNIVERSIDADE.png",
  //         alt: "Descrição da imagem",
  //       },
  //       published_at: "2024-10-20T10:00:00",
  //       tag: {
  //         text: "REPORTAGEM",
  //         color: "#FF8000",
  //       },
  //       categorie: "UFPB pelo avesso",
  //     },
  //     {
  //       id: "63f2b1c1",
  //       title:
  //         "Fazenda Mucatu: 50 anos da luta pela primeira reforma agrária da Paraíba",
  //       initialText:
  //         "No próximo ano, completam-se 50 anos da desapropriação e reforma ...",
  //       author: {
  //         id: "1234",
  //         name: "Aquila Silva",
  //         imageSrc:
  //           "https://i.postimg.cc/V6kZDcFk/Screenshot-2024-10-27-123629.png",
  //       },
  //       read_time: 6,
  //       media: {
  //         type: "image",
  //         url: "https://i.ibb.co/1sW91F7/Whats-App-Image-2024-11-25-at-22-34-51-a30085b8.jpg",
  //         alt: "Imagem descritiva",
  //       },
  //       published_at: "2024-10-21T12:00:00",
  //       tag: {
  //         text: "REPORTAGEM",
  //         color: "#FF8000",
  //       },
  //       categorie: "UFPB pelo avesso",
  //       summary: "Uma breve introdução ou resumo da notícia em destaque.",
  //     },
  //   ],
  //   recent_updates: [
  //     {
  //       id: "63f2b1c2",
  //       title: "A luta do MLB em João Pessoa está longe de seu fim",
  //       author: {
  //         id: "1234",
  //         name: "Aquila Silva",
  //         imageSrc:
  //           "https://i.postimg.cc/V6kZDcFk/Screenshot-2024-10-27-123629.png",
  //       },
  //       read_time: 6,
  //       media: {
  //         type: "image",
  //         url: "https://i.ibb.co/4dPnVzp/ttpng.png",
  //         alt: "Imagem descritiva",
  //       },
  //       published_at: "2024-10-21T12:00:00",
  //       tag: {
  //         text: "REPORTAGEM",
  //         color: "#FF8000",
  //       },
  //       summary: "Uma breve introdução ou resumo da notícia em destaque.",
  //     },
  //     {
  //       id: "63f2b1c8",
  //       title:
  //         "Educando sobre maconha: Associações e comunidade acadêmica lutam pela conscientização ...",
  //       read_time: 5,
  //       media: {
  //         type: "image",
  //         url: "https://i.ibb.co/JmzSnv0/Whats-App-Image-2024-11-26-at-12-52-25-a932931d.jpg",
  //         alt: "Imagem representativa",
  //       },
  //       published_at: "2024-10-21T09:00:00",
  //       tag: {
  //         text: "REPORTAGEM",
  //         color: "#FF8000",
  //       },
  //       categorie: "UFPB pelo avesso",
  //     },
  //   ],
  //   latest_posts: [
  //     {
  //       id: "63f2b1c6",
  //       title: "Entre idas e vindas, um pêndulo de cristal que não brilha",
  //       author: {
  //         id: "4567",
  //         name: "Maria Azevedo",
  //       },
  //       read_time: 3,
  //       media: {
  //         type: "image",
  //         url: "https://s2-casaejardim.glbimg.com/A3rDbjvesQfoOrGqrB-Gtzqc-2k=/0x0:1400x2100/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_a0b7e59562ef42049f4e191fe476fe7d/internal_photos/bs/2023/R/y/A96FwoTDOWV2DuleZHeQ/radiestesia-pendulo-reequilibrio-de-energias.jpg",
  //         alt: "Descrição da imagem",
  //       },
  //       published_at: "2024-10-20T18:00:00",
  //       tag: "Notícia",
  //     },
  //     {
  //       id: "63f2b1c5",
  //       title: "O quanto você gasta para poder continuar a sonhar?",
  //       author: {
  //         id: "4567",
  //         name: "Henry Mychel",
  //       },
  //       read_time: 5,
  //       media: {
  //         type: "image",
  //         url: "https://i.ibb.co/yWFrk23/Oquanto-voc-gasta-para-poder-continuar-a-sonhar.png",
  //         alt: "Descrição da imagem",
  //       },
  //       published_at: "2024-10-20T10:00:00",
  //       tag: "Notícia",
  //     },
  //   ],
  //   stories: [
  //     {
  //       name: "Conheça mais sobre o projeto",
  //       imageSrc: "https://i.ibb.co/5W06hPP/Capa-teste.png",
  //     },
  //     {
  //       name: "Garimpo Ilegal",
  //       imageSrc: "https://i.ibb.co/4PsF2px/Garimpo.png",
  //     },
  //     {
  //       name: "Batalha da paz",
  //       imageSrc:
  //         "https://www.adorama.com/alc/wp-content/uploads/2024/08/dibakar-roy-9iFvm_KQTo4-unsplash-825x465.jpg",
  //     },
  //   ],
  // };
};

export const getNotice = async (idPost: string) => {
  try {
    const response = await fetch(`${BASE_URL}/post/${idPost}`);
    if (!response.ok) {
      return {
        error: response.body,
      };
    }
    return response.json();
  } catch (error: any) {
    return {
      error: error.message,
    };
  }

  // const postFinded = NoticesWithDetails[idPost];

  // if (!postFinded) {
  //   return DefaultNotice;
  // }

  // return postFinded;
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
