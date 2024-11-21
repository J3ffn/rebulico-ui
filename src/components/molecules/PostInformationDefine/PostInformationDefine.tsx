import React from "react";
import IconText from "../IconText/IconText";

import postInformationIcon from "../../../assets/images/createPost/post-informations-icon.svg";

import styles from "./PostInformationDefine.module.css";
import Input from "src/components/atoms/Input/Input";
import Select from "src/components/atoms/select/Select";
import ImageUpload from "src/components/atoms/ImageUpload/ImageUpload";
import Label from "src/components/atoms/label/Label";
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
          <Label text="Título:" htmlFor="title" required>
            <Input
              id="title"
              stylesPersonalized={{ minWidth: "278px" }}
              placeholder="Ex: Sorteio de carro se mostra ser golpe..."
            />
          </Label>

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

          <Label text="Tempo de leitura:" htmlFor="read-time" required>
            <Input
              id="read-time"
              stylesPersonalized={{ width: "125px" }}
              placeholder="Tempo de leitura"
            />
          </Label>
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
                  id={"Anouther-person"}
                  ref={anotherPersonInputRef}
                  stylesPersonalized={{ display: "inline" }}
                  placeholder={
                    !anoutherPerson
                      ? "Desabilitado"
                      : "Digite o nome do autor..."
                  }
                  disabled={!anoutherPerson}
                />
              </label>
            </div>
          </div>
          <Label text="Colaborador:" htmlFor="colaborater">
            <Input id="colaborater" stylesPersonalized={{ width: "125px" }} />
          </Label>

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
