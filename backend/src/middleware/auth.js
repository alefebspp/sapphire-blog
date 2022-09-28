const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const authConfig = require('../config/auth')

async function auth(req, res, next) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ msg: 'Token not provided' })
  }
  const [, token] = authHeader.split(' ')
  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret)
    req.id = decoded.id
    return next()
  } catch (error) {
    res.send(401).json({ error: 'Invalid Token' })
  }
}

module.exports = { auth }
