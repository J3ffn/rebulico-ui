import Input from "src/components/atoms/Input/Input";
import Label from "src/components/atoms/label/Label";

import styles from "./LoginForm.module.css"

const LoginForm = () => {
  return (
    <form action="" method="post" className={styles.login_form_container}>
      <div className={styles.login_form_email_container}>
        <Label text="E-mail" htmlFor="email" required>
          <Input id="email" placeholder="exemplo@email.com" />
        </Label>
      </div>

      <div className={styles.login_form_password_container}>
        <Label text="Senha" htmlFor="password" required>
          <Input
            id="password"
            type="password"
            placeholder="Digite até 8 caracteres"
          />
        </Label>
      </div>
      
      <div className={styles.button_container}>
        <button>Entrar</button>
      </div>
    </form>
  );
};

export default LoginForm;
