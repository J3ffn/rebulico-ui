import React from "react";
import styles from "./ImageUpload.module.css";
import fileIcon from "assets/images/createPost/fIle-icon.svg";

interface ImageUploadProps {
  onImageChange: (file: File | null) => void;
  stylesPersonalized?: React.CSSProperties;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageChange, stylesPersonalized }) => {
  const [imageData, setImageData] = React.useState<File>();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const fileData = event.target.files[0];
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
