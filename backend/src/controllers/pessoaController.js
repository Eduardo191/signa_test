const connection = require('../database/connection')

module.exports = {

  async index(req, res) {
    const pessoas = await connection('pessoa').select('*')

    return res.json(pessoas)
  },
  
}