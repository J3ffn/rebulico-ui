import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import IconText from "../IconText/IconText";

import postInformationIcon from "../../../assets/images/createPost/post-informations-icon.svg";

import styles from "./PostInformationDefine.module.css";
import Input from "src/components/atoms/Input/Input";
import Select from "src/components/atoms/select/Select";
import ImageUpload from "src/components/atoms/ImageUpload/ImageUpload";
import Label from "src/components/atoms/label/Label";
import { useForm } from "react-hook-form";
import { Category, Tag } from "src/shared/models/Notice.model";

interface PostInformationProps {
  onChange: (data: PostInformationForm) => void;
  initialData?: PostInformationForm;
  tags: Tag[];
  setTag: (tag: Tag) => void;
  categories: Category[];
  setCategory: (category: Category) => void;
}

export interface PostInformationForm {
  title: string;
  tag: string;
  category: string;
  author: string;
  collaborators: string;
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
      category: "",
      author: "",
      collaborators: "",
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
        setValue("collaborators", "", { shouldValidate: true });
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
            placeholder="Selecione uma Tag"
            options={props?.tags?.map((tag) => ({
              name: tag.name,
              value: String(tag._id),
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

        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <Select
            render={() => {
              return (
                <label htmlFor="category">
                  Categoria<span style={{ color: "red", marginLeft: '2px' }}>*</span>
                </label>
              );
            }}
            label="Categoria *"
            placeholder="Selecionen uma Categoria"
            options={props?.categories?.map((category) => ({
              name: category.name,
              value: String(category._id),
              attributes: {},
            }))}
            attributes={{
              onChange: ({ target }) => {
                setValue("category", target.value, { shouldValidate: true });
                props.setCategory(props.categories.find((category) => category._id === target.value) as Category);
              },
            }}
            register={register("category", { required: "A categoria é obrigatória." })}
          />
          {errors.category && (
            <span style={{ color: "red", fontSize: "12px", marginTop: "2px" }}>{errors.category.message as string}</span>
          )}
        </div>

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

        <Label text="Colaborador" htmlFor="collaborators">
          <Input id="collaborators" stylesPersonalized={{ width: "100%" }} {...register("collaborators")} />
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
