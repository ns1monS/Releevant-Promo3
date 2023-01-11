// importamos Type de la libreria "@sinclair/typebox
import { Type } from "@sinclair/typebox";
// importamos la librería ajv
import Ajv from "ajv";
// importamos los pquetes que extienden la funcionalidad de ajv
import addFormats from "ajv-formats";
import addErrors from "ajv-errors";

// Componemos el esquema usando la librería con la propiedad Type
const LoginDTOSchema = Type.Object(
  {
    email: Type.String({
      format: "email",
      errorMessage: {
        type: "El tipo de email deber ser un string",
        format: "Email debe contener un correo electrónico válido",
      },
    }),
    password: Type.String({
      errorMessage: {
        type: "El tipo de password debe ser un string",
      },
    }),
  },
  {
    additionalProperties: false,
    errorMessage: {
      additionalProperties: "El formato del objeto no es válido",
    },
  }
);

//instanciamos la clase
//añadimos la función addKeyword con por requisitos de la librería. Ver en la documentación de la misma
const ajv = new Ajv({ allErrors: true }); // allErrors:true nos valida los fallos de los dos campos (email y password)
addFormats(ajv, ["email"]).addKeyword("kind").addKeyword("modifier");
addErrors(ajv, { keepErrors: false });

// Metemos el esquema en el ajv para generar una función de validación
const validate = ajv.compile(LoginDTOSchema);

// Función para validar el dto (email, password)
const validateLoginDto = (req, res, next) => {
  // le pasamos la funciónd e validación
  const isDTOValid = validate(req.body);
  // Si no ha pasado la validación enviamos un 400 y el tipo de error de la validación
  if (!isDTOValid)
    return res
      .status(400)
      .send(ajv.errorsText(validate.errors, { separator: "\n" }));

  next();
};

export default validateLoginDto;
