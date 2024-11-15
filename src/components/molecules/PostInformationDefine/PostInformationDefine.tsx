import React from "react";
import IconText from "../IconText/IconText";

import postInformationIcon from "../../../assets/images/createPost/post-informations-icon.svg";

import styles from "./PostInformationDefine.module.css";
import Input from "src/components/atoms/Input/Input";
import Select from "src/components/atoms/select/Select";
import ImageUpload from "src/components/atoms/ImageUpload/ImageUpload";
// import { useCreateNotice } from "src/hooks/useContext/useCreateNotice";

const PostInformationDefine = () => {
  const [anoutherPerson, setAnoutherPerson] = React.useState(false);
  const anotherPersonInputRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (anoutherPerson && anotherPersonInputRef.current) {
      anotherPersonInputRef.current.focus();
    }
  }, [anoutherPerson]);

  // const { setNoticeField } = useCreateNotice();

  // function informationChange(field: string, value: string) {
  //   setNoticeField(field, value)
  // }

  const handleImageChange = (file: File | null) => {
    if (file) {
      console.log("Imagem selecionada:", file);
    }
  };

  return (
    <div className={styles.postInformation_container}>
      <IconText
        iconProps={{
          imageSrc: postInformationIcon,
          ariaLabel: "Ícone do campo de informações da postagem",
        }}
        text="Informações da postagem:"
      />
      <div className={styles.postInformation_form_container}>
        <div
          className={`${styles.postInformation__form_line} ${styles.postInformation__form_firstLine}`}
        >
          <Input
            attributes={{
              name: "Título",
              placeholder: "Ex: Sorteio de carro se mostra ser golpe...",
              style: { minWidth: "278px" },
            }}
          />
          <Select
            label="Tag"
            placeholder="Selecionen uma Tag"
            options={[
              { name: "Noticia" },
              { name: "Documentário" },
              { name: "Resenha" },
            ]}
            attributes={{
              onChange: ({ target }) => {
                console.log(target.value);
              },
            }}
          />
          <Input
            attributes={{ name: "Tempo de leitura:", type: "number" }}
            width="125px"
          />
        </div>
        <div
          className={`${styles.postInformation__form_line} ${styles.postInformation__form_secondLine}`}
        >
          <div className={styles.postInformation__form_secondLine_author}>
            <span>Autor</span>
            <div
              className={styles.postInformation__form_secondLine_author_options}
            >
              <label htmlFor="radio-button-eu-mesmo">
                <input
                  checked={!anoutherPerson}
                  type="radio"
                  id="radio-button-eu-mesmo"
                  name="autor"
                  onChange={() => setAnoutherPerson(false)}
                />
                Eu mesmo
              </label>
              <label htmlFor="radio-button-outra-pessoa">
                <input
                  checked={anoutherPerson}
                  type="radio"
                  id="radio-button-outra-pessoa"
                  name="autor"
                  onChange={() => setAnoutherPerson(true)}
                />
                Outra pessoa
                <Input
                  ref={anotherPersonInputRef}
                  attributes={{
                    style: { display: "inline" },
                    disabled: !anoutherPerson,
                    placeholder: !anoutherPerson
                      ? "Desabilitado"
                      : "Digite o nome do autor...",
                    autoFocus: !anoutherPerson,
                  }}
                />
              </label>
            </div>
          </div>
          <Input
            attributes={{ name: "Colaborador:", type: "text" }}
            width="125px"
          />
          <label htmlFor="">
            Imagem principal
            <ImageUpload
              onImageChange={handleImageChange}
              // stylesPersonalized={{ marginTop: "20px" }}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default PostInformationDefine;
