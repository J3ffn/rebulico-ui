import Input from "src/components/atoms/Input/Input";
import Label from "src/components/atoms/label/Label";
import { useForm } from "react-hook-form";

import styles from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "src/context/auth/auth.context";
import { useContext } from "react";
import { useToast } from "src/context/toast/Toast.context";

const LoginForm = () => {
  const authContext = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();
  const navigate = useNavigate();
  const toastContext = useToast();
  const showToast = toastContext!.showToast;

  const onSubmit = async (loginData: { email: string; password: string }) => {
    try {
      const response = await authContext?.login(
        loginData.email,
        loginData.password
      );

      if (response) {
        showToast("Login realizado com sucesso!", "success");
        navigate("/");
      }
    } catch (err: any) {
      showToast(err.message, "error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.login_form_container}
    >
      <div className={styles.login_form_email_container}>
        <Label text="E-mail" htmlFor="email" required>
          <Input
            id="email"
            placeholder="exemplo@email.com"
            {...register("email", { required: "E-mail obrigatório." })}
          />
        </Label>
        {errors.email && (
          <span style={{ color: "red", fontSize: "12px", marginTop: "2px" }}>
            {errors.email.message as string}
          </span>
        )}
      </div>

      <div className={styles.login_form_password_container}>
        <Label text="Senha" htmlFor="password" required>
          <Input
            id="password"
            type="password"
            placeholder="Digite até 8 caracteres"
            {...register("password", {
              required: "Senha obrigatória.",
              maxLength: { value: 8, message: "Limite de 8 caracteres." },
            })}
          />
        </Label>
        {errors.password && (
          <span style={{ color: "red", fontSize: "12px", marginTop: "2px" }}>
            {errors.password.message as string}
          </span>
        )}
      </div>

      <div className={styles.button_container}>
        <button>Entrar</button>
      </div>
    </form>
  );
};

export default LoginForm;
