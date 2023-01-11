# Autenticación de usuario

Cuando un usuario se quiera logar o iniciar sesión, primero tiene que verificar el email y password, y después se realiza la función.

La manera correcta de hacerlo es hacer una función aparte para verificar que el email y contraseña existan en la bbdd, en otro archivo js.
Este archivo lo llamaremos "check_email_password".

Quedaría como ejemplo así:

```javascript

import { USERS_BBDD } from '../bbdd.js'

const checkEmailPassword = (email, password) => {
  const user = USERS_BBDD.find(user => user.email === email)
  console.log(user)

  if (!user) throw new Error()

  if (user.password !== password) throw new Error()
  return user
}

export default checkEmailPassword


```

En la función indicamos que si no coinciden arrojen un error, y si coincide que devuelva los datos del usuario.

La respuesta la lanzamos en la constante checkEmailPassword y al exportarla, la recibe el archivo js que contenga la petición post del usuario.

```javascript

import express from 'express'
import checkEmailPassword from '../utils/check_email_password.js'
const authRouter = express.Router();

export default authRouter

authRouter.get('/public', (req, res) => res.send('Endpoint público'))

// Endpoint autenticado para todo usuario registrado
authRouter.post('/autenticado', (req, res) => {
  const { email, password } = req.body

  if (!email || !password) return res.sendStatus(400)

  try {
    const user = checkEmailPassword(email, password)
    return res.send(`Usuario ${user.name} autenticado`)
  } catch (err) {
    return res.sendStatus(401)
  }
})

```
Dentro de esta petición guardamos la importación de checkEmailPassword dentro de la constante usuario.