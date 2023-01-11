// importamos express
import express from 'express'

// importamos el archivo bbdd en el index.js
import { USERS_BBDD } from '../bbdd.js'

// Creamos un router
const accountRouter = express.Router()

// middleaware. Se ejecutara siempre antes del endpoint al que se llama
accountRouter.use((req, res, next) => {
  // Aqui le pasaremos la function que vamos a ejecutar
  console.log('Ejecutamos nuestra function definida en el middleware de account')
  // Continuamos con la siguiente function
  next()
})

// Obtener los detalles de una cuenta a partir del guid
accountRouter.get('/:guid', (req, res) => {
  // Vamos a modificar la obtencion de detalles de una cuenta aplicando una desestructuracion, ya que vamos a utilizarlo en mas endpoints, de la siguiente manera:
  // Buscamos los detalles de la cuenta a traves del guid recibido por req.params
  const { guid } = req.params
  // Buscamos los detalles de la cuenta a través del guid recibido por req.params
  const user = USERS_BBDD.find((user) => user.guid === guid)
  // Si no existe el usuario respondemos con un 404 (not found)
  if (!user) return res.status(404).send()
  // Si existe respondemos con los detalles de la cuenta
  res.send(user)
})

// Crear una nueva cuenta a partir del guid y de name
accountRouter.post('/', (req, res) => {
  const { guid, name } = req.body
  if (!guid || !name) return res.status(400).send()
  const user = USERS_BBDD.find((user) => user.guid === guid)
  if (user) return res.status(400).send()
  USERS_BBDD.push({
    guid,
    name
  })
  res.send('Usuario creado')
})

// Actualizar el nombre de una cuenta
accountRouter.patch('/:guid', (req, res) => {
  const { guid } = req.params
  // Extraemos el nombre del body
  const { name } = req.body

  if (!name) return res.status(400)
  const user = USERS_BBDD.find((user) => user.guid === guid)
  if (!user) return res.status(404).send()
  // Añadimos el nombre modificado y enviamos la respuesta
  user.name = name
  res.send(user)
})

// Eliminar una cuenta
accountRouter.delete('/:guid', (req, res) => {
  const { guid } = req.params
  const userIndex = USERS_BBDD.findIndex((user) => user.guid === guid)
  if (userIndex === -1) return res.status(404).send()
  // Eliminamos el índice de ese usuario del array
  USERS_BBDD.splice(userIndex, 1)
  // Enviamos simplemente una respuesta
  res.send()
})

export default accountRouter
