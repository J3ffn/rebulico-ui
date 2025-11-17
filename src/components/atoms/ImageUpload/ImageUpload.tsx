import React from "react";
import styles from "./ImageUpload.module.css";
import fileIcon from "assets/images/createPost/fIle-icon.svg";
import { ToastContext } from "src/context/toast/Toast.context";

interface ImageUploadProps {
  onImageChange: (file: File | null) => void;
  stylesPersonalized?: React.CSSProperties;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageChange, stylesPersonalized }) => {
  const [imageData, setImageData] = React.useState<File>();
  const toastContext = React.useContext(ToastContext);
  const showToast = toastContext!.showToast;

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const fileData = event.target.files[0];
      if (fileData.type.split("/")[0] !== "image") {
        event.target.value = "";
        showToast("Apenas imagens são permitidas", "error");
        return;
      }
      setImageData(fileData);
      onImageChange(event.target.files[0]);
    } else {
      onImageChange(null);
    }
  };

  return (
    <div className={styles.imageUploadContainer} style={stylesPersonalized}>
      <label htmlFor="image-upload" className={styles.imageUploadLabel}>
        <img
          src={fileIcon}
          alt="Ícone de imagem"
          className={styles.imageIcon}
        />
        <span className={styles.imageUploadName}>
          {imageData?.name ?? "Selecione uma imagem..."}
        </span>
      </label>
      <input
        type="file"
        id="image-upload"
        accept="image/*"
        onChange={handleImageChange}
        className={styles.imageUploadInput}
      />
    </div>
  );
};

export default ImageUpload;
