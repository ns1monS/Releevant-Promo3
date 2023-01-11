import { USERS_BBDD } from '../bbdd.js'

// Function para validar email y password
const checkEmailPassword = (email, password) => {
  // validacion email y password
  const user = USERS_BBDD.find(user => user.email === email)
  if (!user) throw new Error()
  if (user.password !== password) throw new Error()
  return user
}
export default checkEmailPassword
