const controllers = require('../controllers')

const baseUrl = '/api'

module.exports = (app) => {
  app.get(`${baseUrl}`, controllers.app.defaultMessage)
  app.post(`${baseUrl}/login`, controllers.app.login)        // Fazer login no sistema
  app.post(`${baseUrl}/signup`, controllers.app.signup)     // Criar um novo usuário pro sistema
  app.get(`${baseUrl}/notes/:email`, controllers.app.listNotes)    // Listar todos os lembretes
  app.post(`${baseUrl}/notes/:email`, controllers.app.createNote)   // Criar novo lembrete
  app.put(`${baseUrl}/notes/:id`, controllers.app.updateNote)    // Editar algum lembrete
  app.delete(`${baseUrl}/notes/:id`, controllers.app.deleteNote) // Deletar algum lembrete

}