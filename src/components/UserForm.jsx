import React from "react";
import { useForm } from "react-hook-form";

const UserForm = ({ onSubmit }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const submitForm = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div>
        <label>Имя</label>
        <input type="text" {...register("name", { required: true })} />
        {errors.name && <span>Имя обязательно</span>}
      </div>
      <div>
        <label>Логин</label>
        <input type="text" {...register("username", { required: true })} />
        {errors.username && <span>Логин обязателен</span>}
      </div>
      <div>
        <label>Email</label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span>Email обязателен</span>}
      </div>
      <div>
        <label>Телефон</label>
        <input type="tel" {...register("phone", { required: true })} />
        {errors.phone && <span>Телефон обязателен</span>}
      </div>
      <div>
        <label>Веб-сайт (необязательно)</label>
        <input type="url" {...register("website")} />
      </div>
      <div>
        <button type="submit">Создать</button>
      </div>
    </form>
  );
};

export default UserForm;
