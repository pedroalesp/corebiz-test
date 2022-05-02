import { useState } from "react";
import axios from "axios";

import { StyledForm } from "../assets/styles/styles";

export const Form = () => {
  const [form, setValues] = useState({ name: "", email: "" });
  const base_url = "https://corebiz-test.herokuapp.com/api/v1/newsletter";

  const handleChange = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(base_url, { email: form.email, name: form.name })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>¡Únete a nuestras novedades y promociones!</h2>
      <div>
        <input
          name="name"
          onChange={handleChange}
          aria-label="Name"
          type="text"
          placeholder="Ingresa tu nombre"
          minLength="2"
          maxLength="40"
          required
        />
        <input
          name="email"
          onChange={handleChange}
          aria-label="Email"
          type="email"
          placeholder="Ingresa tu email"
          required
        />
        <button type="submit">Suscribirme</button>
      </div>
    </StyledForm>
  );
};
