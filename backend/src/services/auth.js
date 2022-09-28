const bcrypt = require('bcrypt')

function hashPassword(password) {
  const convertedPassword = toString(password)
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(convertedPassword, salt)
  return hash
}

function comparePassword(raw, hash) {
  const convertedRaw = toString(raw)
  const result = bcrypt.compareSync(convertedRaw, hash)
  return result
}

module.exports = {
  hashPassword,
  comparePassword
}
