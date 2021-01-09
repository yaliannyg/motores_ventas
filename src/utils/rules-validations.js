const { email } = require("vee-validate/dist/rules");

import { extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

extend('email', {
  ...rules.email,
  message: "Email Invalido"
});

extend('alpha_spaces', {
  ...rules.alpha_spaces,
  // message: "Nombre y Apellido Invalido"
});

extend('required', {
  ...rules.required,
  message: "Campo requerido"
});

extend('between', {
  ...rules.between,
  message: 'Campo Invalido'
});

extend('numeric', {
  ...rules.numeric,
  message: 'Solo caracteres numericos'
});

extend('alpha', {
  ...rules.alpha,
  
});