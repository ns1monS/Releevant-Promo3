import { USERS_BBDD } from '../bbdd.js'

// Function para validar email y password
const checkAgeEyeColor = (age, eyeColor) => {
  // validacion email y password
  const user = USERS_BBDD.find(user => user.age === age)
  if (!user) throw new Error()
  if (user.eyeColor !== eyeColor) throw new Error()
  return user
}
export default checkAgeEyeColor
