import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import IconText from "../IconText/IconText";

import postInformationIcon from "../../../assets/images/createPost/post-informations-icon.svg";

import styles from "./PostInformationDefine.module.css";
import Input from "src/components/atoms/Input/Input";
import Select from "src/components/atoms/select/Select";
import ImageUpload from "src/components/atoms/ImageUpload/ImageUpload";
import Label from "src/components/atoms/label/Label";
import { useForm } from "react-hook-form";
import { Tag } from "src/shared/models/Notice.model";
// import { useCreateNotice } from "src/hooks/useContext/useCreateNotice";

interface PostInformationProps {
  onChange: (data: PostInformationForm) => void;
  initialData?: PostInformationForm;
  tags: Tag[];
  setTag: (tag: Tag) => void;
}

export interface PostInformationForm {
  title: string;
  tag: string;
  timeToRead: string;
  author: string;
  collaborator: string;
  principalImage: File | null;
}

const PostInformationDefine = forwardRef((props: PostInformationProps, ref) => {
  const {
    register,
    watch,
    trigger,
    setValue,
    formState: { errors },
  } = useForm<PostInformationForm>({
    defaultValues: props.initialData || {
      title: "",
      tag: "",
      timeToRead: "",
      author: "",
      principalImage: null,
    },
    mode: "onChange",
  });

  const username = JSON.parse(localStorage.getItem("authInfo") || "{}").userInfo
    .username;
  const authorValue = watch("author");

  useEffect(() => {
    const subscription = watch((value) => {
      props.onChange(value as PostInformationForm);
    });
    return () => subscription.unsubscribe();
  }, [watch, props.onChange]);

  const [anotherPerson, setAnotherPerson] = useState(false);
  const anotherPersonInputRef = useRef<any>(null);

  useEffect(() => {
    if (anotherPerson) {
      setValue("author", "", { shouldValidate: true });
      anotherPersonInputRef.current.focus();
      return;
    }

    setValue("author", username, { shouldValidate: true });
  }, [anotherPerson, username, setValue]);

  const setAuthor = (author: string) => {
    setValue("author", author, { shouldValidate: true });
  };

  useImperativeHandle(
    ref,
    () => ({
      validate: () => trigger(),
    }),
    [trigger]
  );

  // const { setNoticeField } = useCreateNotice();

  // function informationChange(field: string, value: string) {
  //   setNoticeField(field, value)
  // }

  const handleImageChange = (file: File | null) => {
    if (file) {
      setValue("principalImage", file, { shouldValidate: true });
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
          <Label text="Título" htmlFor="title" required>
            <Input
              id="title"
              stylesPersonalized={{ minWidth: "278px" }}
              placeholder="Ex: Sorteio de carro se mostra ser golpe..."
              {...register("title", { required: "O título é obrigatório." })}
            />
            {errors.title && (
              <span
                style={{ color: "red", fontSize: "12px", marginTop: "2px" }}
              >
                {errors.title.message as string}
              </span>
            )}
          </Label>

          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Select
              label="Tag"
              placeholder="Selecionen uma Tag"
              options={props?.tags?.map((tag) => ({
                tag: tag as Tag,
                attributes: {},
              }))}
              attributes={{
                onChange: ({ target }) => {
                  setValue("tag", target.value, { shouldValidate: true });
                  props.setTag(
                    props.tags.find((tag) => tag._id === target.value) as Tag
                  );
                },
              }}
              register={register("tag", { required: "A tag é obrigatória." })}
            />
            {errors.tag && (
              <span
                style={{ color: "red", fontSize: "12px", marginTop: "2px" }}
              >
                {errors.tag.message as string}
              </span>
            )}
          </div>

          <Label text="Tempo de leitura" htmlFor="read-time" required>
            <Input
              id="read-time"
              stylesPersonalized={{ width: "125px" }}
              placeholder="Tempo de leitura"
              {...register("timeToRead", {
                required: "O tempo de leitura é obrigatório.",
              })}
              onChange={(e) => {
                setValue("timeToRead", e.target.value.replace(/[^0-9]/g, ""), {
                  shouldValidate: true,
                });
              }}
            />
            {errors.timeToRead && (
              <span
                style={{ color: "red", fontSize: "12px", marginTop: "2px" }}
              >
                {errors.timeToRead.message as string}
              </span>
            )}
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
                  checked={!anotherPerson}
                  type="radio"
                  id="radio-button-eu-mesmo"
                  name="autor"
                  onChange={() => setAnotherPerson(false)}
                />
                Eu mesmo
              </label>
              <label htmlFor="radio-button-outra-pessoa">
                <input
                  checked={anotherPerson}
                  type="radio"
                  id="radio-button-outra-pessoa"
                  name="autor"
                  onChange={() => setAnotherPerson(true)}
                />
                Outra pessoa
              </label>
              <label
                htmlFor="Another-person"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "5px",
                }}
              >
                <Input
                  id={"Another-person"}
                  {...register("author", {
                    required: "O autor é obrigatório.",
                  })}
                  onChange={(e) => setAuthor(e.target.value)}
                  ref={anotherPersonInputRef}
                  stylesPersonalized={{ display: "inline" }}
                  placeholder={
                    !anotherPerson
                      ? "Desabilitado"
                      : "Digite o nome do autor..."
                  }
                  disabled={!anotherPerson}
                  value={authorValue}
                />
                {errors.author && (
                  <span
                    style={{ color: "red", fontSize: "12px", marginTop: "2px" }}
                  >
                    {errors.author.message as string}
                  </span>
                )}
              </label>
            </div>
          </div>
          <Label text="Colaborador" htmlFor="colaborater">
            <Input
              id="colaborater"
              stylesPersonalized={{ width: "125px" }}
              {...register("collaborator")}
            />
          </Label>

          <Label text="Imagem principal" htmlFor="image-upload">
            <ImageUpload
              onImageChange={handleImageChange}
              // stylesPersonalized={{ marginTop: "20px" }}
            />
          </Label>
        </div>
      </div>
    </div>
  );
});

export default PostInformationDefine;
