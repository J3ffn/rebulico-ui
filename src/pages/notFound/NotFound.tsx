import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>Desculpe, essa página não existe.</p>
      <p className={styles.link} onClick={() => navigate("/")}>Volte para a página inicial.</p>
    </div>
  );
};

export default NotFound;
