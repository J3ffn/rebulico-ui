import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import IconText from "../IconText/IconText";

import postInformationIcon from "../../../assets/images/createPost/post-informations-icon.svg";

import styles from "./PostInformationDefine.module.css";
import Input from "src/components/atoms/Input/Input";
import Select from "src/components/atoms/select/Select";
import ImageUpload from "src/components/atoms/ImageUpload/ImageUpload";
import Label from "src/components/atoms/label/Label";
import { useForm } from "react-hook-form";
import { Tag } from "src/shared/models/Notice.model";

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
    reset,
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
  const imageInputRef = useRef<any>(null);

  const username = JSON.parse(localStorage.getItem("authInfo") || "{}")?.userInfo?.username;
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
      resetForm: () => {
        reset();
        setAnotherPerson(false);
        setValue("author", username, { shouldValidate: true });
        imageInputRef.current.reset();
      },
    }),
    [trigger, reset]
  );

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
        <Label text="Título" htmlFor="title" required>
          <Input
            id="title"
            stylesPersonalized={{ width: "100%" }}
            placeholder="Ex: Sorteio de carro se mostra ser golpe..."
            {...register("title", { required: "O título é obrigatório." })}
          />
          {errors.title && (
            <span style={{ color: "red", fontSize: "12px", marginTop: "2px" }}>{errors.title.message as string}</span>
          )}
        </Label>

        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <Select
            render={() => {
              return (
                <label htmlFor="tag">
                  Tag<span style={{ color: "red", marginLeft: '2px' }}>*</span>
                </label>
              );
            }}
            label="Tag *"
            placeholder="Selecionen uma Tag"
            options={props?.tags?.map((tag) => ({
              tag: tag as Tag,
              attributes: {},
            }))}
            attributes={{
              onChange: ({ target }) => {
                setValue("tag", target.value, { shouldValidate: true });
                props.setTag(props.tags.find((tag) => tag._id === target.value) as Tag);
              },
            }}
            register={register("tag", { required: "A tag é obrigatória." })}
          />
          {errors.tag && (
            <span style={{ color: "red", fontSize: "12px", marginTop: "2px" }}>{errors.tag.message as string}</span>
          )}
        </div>

        <Label text="Tempo de leitura" htmlFor="read-time" required>
          <Input
            id="read-time"
            stylesPersonalized={{ width: "100%" }}
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
            <span style={{ color: "red", fontSize: "12px", marginTop: "2px" }}>
              {errors.timeToRead.message as string}
            </span>
          )}
        </Label>
        <Label text="Autor" htmlFor="Another-person" required>
          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "5px" }}>
            <Input
              id={"Another-person"}
              {...register("author", {
                required: "O autor é obrigatório.",
              })}
              onChange={(e) => setAuthor(e.target.value)}
              ref={anotherPersonInputRef}
              stylesPersonalized={{ width: "100%" }}
              placeholder={!anotherPerson ? "Desabilitado" : "Digite o nome do autor..."}
              disabled={!anotherPerson}
              value={authorValue}
            />

            <input
              type="checkbox"
              id="radio-button-eu-mesmo"
              onChange={(e) => (e.target.checked ? setAnotherPerson(false) : setAnotherPerson(true))}
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                right: "10px",
                cursor: "pointer",
              }}
              checked={!anotherPerson}
            />
          </div>
          {errors.author && (
            <span style={{ color: "red", fontSize: "12px", marginTop: "2px" }}>{errors.author.message as string}</span>
          )}
        </Label>

        <Label text="Colaborador" htmlFor="colaborater">
          <Input id="colaborater" stylesPersonalized={{ width: "100%" }} {...register("collaborator")} />
        </Label>

        <Label text="Imagem principal" htmlFor="image-upload" required>
          <ImageUpload
            ref={imageInputRef}
            onImageChange={handleImageChange}
          />
        </Label>
      </div>
    </div>
  );
});

export default PostInformationDefine;
