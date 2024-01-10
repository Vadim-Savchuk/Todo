import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import { emailConfig, passwordConfig } from 'utils/validation';

import s from './LoginPage.module.css';

type Inputs = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { register, formState, handleSubmit, reset } = useForm<Inputs>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<Inputs> = data => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <section className={s.offer}>
      <div className={s.auth}>
        <div className={s.header}>
          <h1 className="title">Welcome back</h1>
          <p className="description">Log in to start using</p>
        </div>

        <form className={s.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          <label className={s.label}>
            <span className={s.name}>Email*</span>

            <input
              type="email"
              className={s.input}
              placeholder="example@gmail.com"
              {...register('email', emailConfig)}
            />

            <div className={s.error}>
              {formState.errors.email && (
                <p>{formState.errors.email.message}</p>
              )}
            </div>
          </label>
          <label className={s.label}>
            <span className={s.name}>Password*</span>

            <input
              type="password"
              className={s.input}
              placeholder="******"
              {...register('password', passwordConfig)}
            />

            <div className={s.error}>
              {formState.errors.password && (
                <p>{formState.errors.password.message}</p>
              )}
            </div>
          </label>
          <div className={s.box}>
            <Link to="/register" className="button">
              To register
            </Link>
            <button
              type="submit"
              className="button"
              disabled={!formState.isValid}
            >
              Log-in
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
