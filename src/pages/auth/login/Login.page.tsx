import styles from "./LoginPage.module.css";
import LoginForm from "src/components/organisms/Auth/Login/LoginForm";

import imageDetailLogin from "../../../assets/images/auth/imagem-Professora.jpg";

const LoginPage = () => {
  return (
    <div className={styles.login_page_container}>
      <div className={styles.login_form_container}>
        {/* &#128075; => 👋 */}
        <div className={styles.login_form_message}>
          <h1>Bem vindo(a) de volta! &#128075;</h1>
          <p>
            Um novo dia está aqui. É o seu dia de moldar!
          </p>
        </div>
        <LoginForm />
      </div>
      <div className={styles.login_detail_page}>
        <img src={imageDetailLogin} alt="Folhas de palmeira" />
      </div>
    </div>
  );
};

export default LoginPage;
