import React from "react";
import IconText from "../IconText/IconText";

import postInformationIcon from "../../../assets/images/createPost/post-informations-icon.svg";

import styles from "./PostInformationDefine.module.css";
import Input from "src/components/atoms/Input/Input";
import { Input as InputMUI } from "@mui/material";
import Select from "src/components/atoms/select/Select";
import ImageUpload from "src/components/atoms/ImageUpload/ImageUpload";
import Label from "src/components/atoms/label/Label";
import { Button, Chip, IconButton } from "@mui/material";
import { Add, Check } from "@mui/icons-material";
import { useCreateNotice } from "src/hooks/useContext/useCreateNotice";
import { convertFileToBase64 } from "src/utiils/converters/Base64";
import { findAllTags } from "src/shared/api/endpoints/tags/Tags.endpoints";
import { CreateNoticeContextType } from "src/context/createNotice/CreateNotice.context";

type ChipData = {
  name: string;
  isEditing: boolean;
};

type TagsSelectionData = {
  id: string;
  name: string;
  slug: string;
};

const PostInformationDefine = () => {
  const { notice, setNoticeField } = useCreateNotice();
  const [chipList, setChipList] = React.useState<ChipData[]>([]);
  const [chipAddStage, setChipAddStage] = React.useState(false);
  const [chipAddInput, setChipAddInput] = React.useState("");
  const [tagsSelection, setTagsSelection] = React.useState<TagsSelectionData[]>(
    []
  );

  // const { setNoticeField } = useCreateNotice();

  // function informationChange(field: string, value: string) {
  //   setNoticeField(field, value)
  // }

  const fetchTags = React.useCallback(async () => {
    const data = await findAllTags();
    setTagsSelection(data);
  }, []);

  React.useEffect(() => {
    fetchTags();
  }, []);

  React.useEffect(() => {
    const mapped = chipList.map((item) => {
      return { name: item.name };
    });
    setNoticeField("collaborators", mapped);
  }, [chipList]);

  const handleImageChange = async (file: File | null) => {
    if (file) {
      console.log("Imagem selecionada:", file);
      setNoticeField("bannerImage", await convertFileToBase64(file));
    }
  };

  const handleAddChip = () => {
    setChipList([...chipList, { name: "", isEditing: true }]);
    setChipAddStage(false);
    const mapped = chipList.map((item) => {
      return { name: item.name };
    });
    setNoticeField("collaborators", mapped);
  };

  const handleConfirmEdit = (index: number, newLabel: string) => {
    if (newLabel.trim() === "") return;

    const updatedChips = chipList.map((chip, idx) =>
      idx === index
        ? { ...chip, name: newLabel.trim(), isEditing: false }
        : chip
    );
    setChipList(updatedChips);
  };

  React.useEffect(() => {
    console.log("CHIPLIST");
    console.log(chipList);
  }, [chipList]);

  const chipOnDelete = (index: number) => {
    console.log(index);
    const updatedChips = chipList.filter((_, idx) => idx !== index);
    console.log("ACHADO");
    console.log(updatedChips);
    setChipList(updatedChips);
  };

  const changeOption = (type: "tag" | "project", value: any) => {
    console.log("first");
    setNoticeField(type, value);
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
          <Label
            text="Título"
            htmlFor="title"
            required
            sxLabel={{
              // width: "85%",
              minWidth: "280px",
              flexGrow: 2,
            }}
          >
            <Input
              id="title"
              placeholder="Ex: Sorteio de carro se mostra ser golpe..."
              props={{
                onChange: (event) =>
                  setNoticeField("title", event.target.value),
              }}
            />
          </Label>

          <label htmlFor="">
            Imagem principal
            <ImageUpload
              onImageChange={handleImageChange}
              stylesPersonalized={{ minWidth: "190px" }}
            />
          </label>
        </div>
        <div
          className={`${styles.postInformation__form_line} ${styles.postInformation__form_secondLine}`}
        >
          <div className={styles.postInformation__form_secondLine_author}>
            <Select
              label="Projeto"
              placeholder="Selecione o Projeto"
              options={[
                // TRAZER DO BACK AS TAGS PARA MOSTRAGEM
                {
                  name: "Noticia",
                  id: "1",
                },
                {
                  name: "Reportagem",
                  id: "2",
                },
                {
                  name: "Resenha",
                  id: "3",
                },
              ]}
              onChangeOption={(option) => changeOption("project", option)}
              attributes={{
                required: true,
              }}
            />
            <Select
              label="Tag"
              placeholder="Selecione a Tag"
              options={tagsSelection}
              onChangeOption={(option) => {
                changeOption("tag", option);
              }}
              attributes={{
                required: true,
              }}
            />
            <div className={styles.post_content_adicionar_autores_container}>
              <Label text="Colaboradores">
                <div style={{ display: "flex", height: "100%" }}>
                  <div className={styles.post_content_autores_container}>
                    {/* Melhorar o botão visualmente */}
                    {chipList.map((chip, index) =>
                      chip.isEditing ? (
                        <Chip
                          key={index}
                          label={
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <InputMUI
                                disableUnderline={true}
                                id={`chip-input-${index}`}
                                sx={{
                                  maxWidth: "140px",
                                }}
                                value={chip.name}
                                inputProps={{
                                  onChange: (event: any) => {
                                    console.log("MUDOU");
                                    const updatedChips = [...chipList];
                                    updatedChips[index].name =
                                      event.target.value;
                                    setChipList(updatedChips);
                                  },
                                  onKeyPress: (event) => {
                                    if (event.key === "Enter") {
                                      handleConfirmEdit(index, chip.name);
                                    }
                                  },
                                }}
                                placeholder="Digite o nome"
                              />
                              <IconButton
                                onClick={() =>
                                  handleConfirmEdit(index, chip.name)
                                }
                                size="small"
                                sx={{ marginLeft: "5px" }}
                              >
                                <Check />
                              </IconButton>
                            </div>
                          }
                          sx={{
                            margin: "auto 0",
                            backgroundColor: "#f0f0f0",
                          }}
                          onDelete={() => chipOnDelete(index)}
                        />
                      ) : (
                        <Chip
                          key={index}
                          label={chip.name}
                          onDelete={() => chipOnDelete(index)}
                          sx={{ margin: "5px" }}
                        />
                      )
                    )}
                  </div>
                  {/* <div
                    className={styles.post_content_add_button_container}
                  ></div> */}
                </div>
              </Label>
              <Button
                sx={{
                  width: "max-content",
                  background: "#194e93",
                  textTransform: "capitalize",
                  color: "#fff",
                  padding: "10px 15px",
                  borderRadius: "25px",
                  height: "30px",
                  margin: "auto 0",
                }}
                onClick={() => {
                  handleAddChip();
                }}
                endIcon={<Add onClick={handleAddChip} />}
              >
                Adicionar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostInformationDefine;
