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

authRouter.post('/autorizado', (req, res) => {
  const { email, password } = req.body

  if (!email || !password) return res.sendStatus(400)

  try {
    const user = checkEmailPassword(email, password)

    if (user.role !== 'admin') return res.sendStatus(403)

    return res.send(`Usuario administrador ${user.name}`)
  } catch (err) {
    return res.sendStatus(401)
  }
})
