import { Validator } from "vee-validate";

const dictionary = {
  custom: {
    email: {
      required: "Correo es requerido",
    },
    name: {
      required: () => "Nombre es requerido",
    },
  },
};

Validator.localize(dictionary);

