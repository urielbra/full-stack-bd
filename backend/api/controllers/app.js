const db = require('../models')
const jwt = require('jsonwebtoken')
const _ = require('lodash')

module.exports = {
  // Exemplos
  defaultMessage: (req, res) => {
    return res.status(200).json({ message: 'API LEMBRETES' })
  },

  login: async (req, res) => {
    const [name, password] = [req.body.name, req.body.password]

    if (_.isNil(name) || _.isNil(password)) return res.boom.badRequest('blank_name_or_password')

    const usuario = await db.Usuario.findUserWithPwd(name, password)

    if (_.isNil(usuario)) {
      return res.boom.unauthorized('wrong_name_or_password')
    } else {
      return res.status(200).json({ token: jwt.sign({ name: req.body.name }, process.env.SECRET_KEY) })
    }
  },

  signup: async (req, res) => {
    const email = req.body.email; 
    const password = req.body.password;
    const name =  req.body.name;
    if (_.isNil(name) || _.isNil(password) || _.isNil(email)) return res.boom.badRequest('blank_fields')

    try {
      const result = await db.Usuario.addUser(email,password,name)
      return res.status(200).json(result)
    } catch (err) {
      console.log(err)
      return res.boom.forbidden('name_already_registered')
    }
  },

  
  listNotes: async (req, res) => {
    try {
      const result = await db.Postit.allPosts(req.params.email)
      return res.status(200).json()
    } catch (err) {
      return res.boom.internal('DB Error')
    }
  },
  createNote: async (req, res) => {
    try {
      let email = req.params.email;
      let title = req.body.Title;
      let body = req.body.Text;
      const result = await db.Postit.createPost(email,title,body);
      return res.status(200).json(result)
    } catch (err) {
      return res.boom.internal('DB Error')
    }
  },
  updateNote: async (req, res) => {
    try {
      let noteId = req.params.id;
      let title = req.body.Title;
      let body = req.body.Text;
      const result = await db.Postit.updatePost(noteId,title,body);
      return res.status(200).json(result)
    } catch (err) {
      return res.boom.internal('DB Error')
    }
  },
  deleteNote: async (req, res) => {
    try {
      let noteId = req.params.id;
      const result = await db.Postit.deletePost(noteId)
      return res.status(200).json(result)
    } catch (err) {
      return res.boom.internal('DB Error')
    }
  }
}
